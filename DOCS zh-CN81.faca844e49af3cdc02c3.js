(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[174],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-imagery-urltemplate.md?vue&type=template&id=e56c504c

const vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_1 = {
  class: "content element-doc"
};

const vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcproviderimageryurltemplate\"><a class=\"header-anchor\" href=\"#vcproviderimageryurltemplate\">¶</a> VcProviderImageryUrltemplate</h2><p>通过一个约定的 URL 模板来请求加载影像图层，相当于初始化一个 <code>Cesium.UrlTemplateImageryProvider</code> 实例。比如加载的高德，腾讯等影像瓦片服务，URL 都是一个固定的规范，都可以通过该组件轻松实现。并且支持对高德等火星坐标系底图 <code>纠偏</code>。</p><p><strong>注意</strong>：需要作为 <code>vc-layer-imagery</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p><code>vc-provider-imagery-urltemplate</code> 组件的基础用法。</p>", 5);

const vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加高德地图影像瓦片图层。")])], -1);

const vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sortOrder=\"10\">\n      <vc-provider-imagery-urltemplate ref=\"provider\" :projectionTransforms=\"projectionTransforms\" :url=\"url\"></vc-provider-imagery-urltemplate>\n    </vc-layer-imagery>\n    <!-- 用于测试 projectionTransforms  -->\n    <vc-layer-imagery :sortOrder=\"5\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_w\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">切换地图</span>\n          <el-select v-model=\"url\" placeholder=\"请选择\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const projectionTransforms = ref(null)\n      projectionTransforms.value = {\n        from: 'GCJ02',\n        to: 'WGS84'\n      }\n      const options = [\n        {\n          value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',\n          label: '高德影像地图服务'\n        },\n        {\n          value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',\n          label: '高德矢量地图服务'\n        },\n        {\n          value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',\n          label: 'mapbox 栅格瓦片地图'\n        }\n      ]\n      const url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        projectionTransforms,\n        url,\n        options\n      }\n    }\n  }\n</script>\n")], -1);

const vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>url</td><td>String|Object</td><td></td><td><code>required</code> 指定服务地址。</td></tr><tr><td>pickFeaturesUrl</td><td>String|Object</td><td></td><td><code>optional</code> 指定拾取对象属性的 url，如果无效，会返回 undefined。</td></tr><tr><td>urlSchemeZeroPadding</td><td>Object</td><td></td><td><code>optional</code> 指定每个瓦片中心的偏移值。</td></tr><tr><td>subdomains</td><td>String</td><td><code>&#39;abc&#39;</code></td><td><code>optional</code> 指定服务的轮询子域名。</td></tr><tr><td>credit</td><td>String</td><td><code>&#39;&#39;</code></td><td><code>optional</code> 指定服务的描述信息</td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 最小层级。</td></tr><tr><td>maximumLevel</td><td>Number</td><td></td><td><code>optional</code> 最大层级。</td></tr><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>optional</code> 图层的矩形范围,此矩形限制了影像可见范围。</td></tr><tr><td>tilingScheme</td><td>Object</td><td></td><td><code>optional</code> 指定服务的投影参数。</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 参考椭球体。</td></tr><tr><td>tileWidth</td><td>Number</td><td><code>256</code></td><td><code>optional</code> 像元宽度。</td></tr><tr><td>tileHeight</td><td>Number</td><td><code>256</code></td><td><code>optional</code> 像元高度。</td></tr><tr><td>hasAlphaChannel</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 设置为 true 表示图层包含 alpha 透明通道，反之没有。</td></tr><tr><td>getFeatureInfoFormats</td><td>Array</td><td></td><td><code>optional</code> 格式化拾取对象属性时提示信息位置，该项要设置 pickFeaturesUrl 且起作用时才起作用。</td></tr><tr><td>enablePickFeatures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 是否开启图层拾取。</td></tr><tr><td>customTags</td><td>Object</td><td></td><td><code>optional</code> 替换 url 模板中的自定义关键字。</td></tr><tr><td>projectionTransforms</td><td>Boolean|Object</td><td><code>false</code></td><td><code>optional</code> 指定纠偏参数。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>当图层提供者可用时触发, 返回 ImageryProvider 实例。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html\">UrlTemplateImageryProvider</a></strong></li></ul>", 6);

function vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_1, [vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_7]),
    _: 1
  }), vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-urltemplate.md?vue&type=template&id=e56c504c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-imagery-urltemplate.md?vue&type=script&lang=ts

/* harmony default export */ var vc_provider_imagery_urltemplatevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createBlock: _createBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "透明度", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "亮度", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "对比度", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "切换地图", -1);

      function render(_ctx, _cache) {
        const _component_vc_provider_imagery_urltemplate = _resolveComponent("vc-provider-imagery-urltemplate");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_el_slider = _resolveComponent("el-slider");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_col = _resolveComponent("el-col");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_urltemplate, {
                ref: "provider",
                projectionTransforms: _ctx.projectionTransforms,
                url: _ctx.url
              }, null, 8, ["projectionTransforms", "url"])]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"]), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 5
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_w",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            })]),
            _: 1
          }), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
                modelValue: _ctx.alpha,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.alpha = $event),
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_7, _createVNode(_component_el_slider, {
                modelValue: _ctx.brightness,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brightness = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_select, {
                modelValue: _ctx.url,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.url = $event),
                placeholder: "请选择"
              }, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])])]),
              _: 1
            })]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        getCurrentInstance
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const provider = ref(null);
          const alpha = ref(1);
          const brightness = ref(1);
          const contrast = ref(1);
          const projectionTransforms = ref(null);
          projectionTransforms.value = {
            from: 'GCJ02',
            to: 'WGS84'
          };
          const options = [{
            value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            label: '高德影像地图服务'
          }, {
            value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
            label: '高德矢量地图服务'
          }, {
            value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',
            label: 'mapbox 栅格瓦片地图'
          }];
          const url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'); // methods

          const unload = () => {
            provider.value.unload();
          };

          const reload = () => {
            provider.value.reload();
          };

          const load = () => {
            provider.value.load();
          };

          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast,
            projectionTransforms,
            url,
            options
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-urltemplate.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-urltemplate.md



vc_provider_imagery_urltemplatevue_type_script_lang_ts.render = vc_provider_imagery_urltemplatevue_type_template_id_e56c504c_render

/* harmony default export */ var vc_provider_imagery_urltemplate = __webpack_exports__["default"] = (vc_provider_imagery_urltemplatevue_type_script_lang_ts);

/***/ })

}]);