/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2022-02-08 11:01:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\point\index.ts
 */
import { defineComponent } from 'vue'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingPoint from '@vue-cesium/composables/use-drawing/use-drawing-point'
import { drawingEmit } from '@vue-cesium/utils/emits'

export default defineComponent({
  name: 'VcDrawingPoint',
  props: {
    ...useDrawingActionProps,
    heightReference: Number,
    disableDepthTest: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPoint(props, ctx, 'VcDrawingPoint')
  }
})
