/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-01 23:15:43
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\wmts\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  url,
  format,
  clock,
  times,
  tileWidth,
  tileHeight,
  tilingScheme,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid,
  credit,
  subdomains,
  dimensions
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcProviderImageryWmts',
  props: {
    ...url,
    ...format,
    layer: String,
    wmtsStyle: String,
    tileMatrixSetID: String,
    tileMatrixLabels: Array,
    ...clock,
    ...times,
    ...dimensions,
    ...tileWidth,
    ...tileHeight,
    ...tilingScheme,
    ...rectangle,
    ...minimumLevel,
    ...maximumLevel,
    ...ellipsoid,
    ...credit,
    ...subdomains
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WebMapTileServiceImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})