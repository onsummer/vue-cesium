import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { Cesium as CesiumNative, VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import * as coordtransform from '@vue-cesium/utils/coordtransform'
import useCommon from '../use-common'

export default function(props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['errorEvent']
  const commonState = useCommon(props, ctx, vcInstance)
  vcInstance.renderByParent = true
  // computed
  vcInstance.mount = async () => {
    const imageryProvider = vcInstance.cesiumObject as CesiumNative.ImageryProvider
    imageryProvider.readyPromise.then(() => {
      const listener = getInstanceListener(vcInstance, 'readyPromise')
      listener && ctx.emit('readyPromise', imageryProvider)
    })

    if (props.projectionTransforms && props.projectionTransforms.from !== props.projectionTransforms.to) {
      const ignoreTransforms =
        vcInstance.proxy.$options.name === 'VcProviderImageryBaidumap' ||
        (vcInstance.proxy.$options.name === 'vc-provider-imagery-tianditu' && (imageryProvider as any)._epsgCode === '4490')
      if (!ignoreTransforms) {
        const { WebMercatorTilingScheme, Cartographic, Math: CesiumMath } = Cesium
        const tilingScheme = new WebMercatorTilingScheme()
        const projection = tilingScheme.projection
        const nativeProject = projection.project
        const nativeUnProject = projection.unproject
        let projectMethods
        let unprojectMethods
        if (props.projectionTransforms.to.toUpperCase() === 'WGS84') {
          projectMethods = 'wgs84togcj02'
          unprojectMethods = 'gcj02towgs84'
        } else if (props.projectionTransforms.to.toUpperCase() === 'GCJ02') {
          projectMethods = 'gcj02towgs84'
          unprojectMethods = 'wgs84togcj02'
        }

        if (projectMethods && unprojectMethods) {
          projection.project = function(cartographic, result) {
            // result = result || {}
            result = coordtransform[projectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
            return nativeProject.call(this, new Cartographic(CesiumMath.toRadians(result[0]), CesiumMath.toRadians(result[1])))
          }
          projection.unproject = function(cartesian2, result) {
            // result = result || {}
            const cartographic = nativeUnProject.call(this, cartesian2)
            result = coordtransform[unprojectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
            return new Cartographic(CesiumMath.toRadians(result[0]), CesiumMath.toRadians(result[1]))
          }
          ;(imageryProvider as any)._tilingScheme = tilingScheme
        }
      }
    }
    const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
    return parentVM && parentVM.__setProvider(imageryProvider)
  }
  vcInstance.unmount = async () => {
    const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
    return parentVM && parentVM.__setProvider(undefined)
  }

  // expose public methods
  Object.assign(vcInstance.proxy, {
    createPromise: commonState.createPromise,
    load: commonState.load,
    unload: commonState.unload,
    reload: commonState.reload,
    getCesiumObject: () => vcInstance.cesiumObject
  })

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}