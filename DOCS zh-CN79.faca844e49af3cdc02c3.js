(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-imagery-tianditu.md?vue&type=template&id=403c6010

const vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_1 = {
  class: "content element-doc"
};

const vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcproviderimagerytianditu\"><a class=\"header-anchor\" href=\"#vcproviderimagerytianditu\">¶</a> VcProviderImageryTianditu</h2><p>加载天地图影像瓦片服务。</p><p><strong>注意</strong>：需要作为 <code>vc-layer-imagery</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p><code>vc-provider-imagery-tianditu</code> 组件的基础用法。</p>", 5);

const vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由天地图提供的影像瓦片服务图层。")])], -1);

const vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 注记层 -->\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu :mapStyle=\"mapStyle\" token=\"436ce7e50d27eede2f2929307e6b33c0\" ref=\"provider\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">切换风格</span>\n          <el-select v-model=\"mapStyle\" placeholder=\"请选择\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const options = [\n        {\n          value: 'img_c',\n          label: '全球影像地图服务(经纬度)'\n        },\n        {\n          value: 'img_w',\n          label: '全球影像地图服务(墨卡托)'\n        },\n        {\n          value: 'vec_c',\n          label: '全球矢量地图服务(经纬度)'\n        },\n        {\n          value: 'vec_w',\n          label: '全球矢量地图服务(墨卡托)'\n        },\n        {\n          value: 'ter_c',\n          label: '全球地形晕渲服务(经纬度)'\n        },\n        {\n          value: 'ter_w',\n          label: '全球地形晕渲服务(墨卡托)'\n        },\n        {\n          value: 'ibo_c',\n          label: '全球境界(经纬度)'\n        },\n        {\n          value: 'ibo_w',\n          label: '全球境界(墨卡托)'\n        },\n      ]\n      const mapStyle = ref('img_c')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        options,\n        mapStyle\n      }\n    }\n  }\n</script>\n")], -1);

const vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>mapStyle</td><td>String</td><td><code>&#39;img_w&#39;</code></td><td><code>optional</code> 天地图服务地图类型。</td><td>cia_c/cia_w/cta_c/cta_w/cva_c/cva_w/ela_c/ela_w/eva_c/eva_w/img_c/img_w/ter_c/ter_w/vec_c/vec_w/ibo_c/ibo_w</td></tr><tr><td>credit</td><td>String|Object</td><td><code>&#39;天地图全球影像服务&#39;</code></td><td><code>optional</code> 服务版权描述信息。</td><td></td></tr><tr><td>token</td><td>String</td><td></td><td><code>optional</code> 天地图应用 key。 <a href=\"http://lbs.tianditu.gov.cn/home.html\">申请地址</a></td><td></td></tr><tr><td>protocol</td><td>String</td><td><code>https</code></td><td><code>optional</code> 指定请求协议类型。可以是<code>https</code>或者<code>http</code>。</td><td></td></tr><tr><td>rectangle</td><td>Object</td><td></td><td><code>optional</code> 图层的矩形范围，此矩形限制了影像可见范围。</td><td></td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 最小层级。</td><td></td></tr><tr><td>maximumLevel</td><td>Number</td><td><code>20</code></td><td><code>optional</code> 最大层级。</td><td></td></tr><tr><td>projectionTransforms</td><td>Boolean|Object</td><td><code>false</code></td><td><code>optional</code> 指定投影变换参数。<strong>结构： { from: &#39;GCJ02&#39;, to: &#39;WGS84&#39; }</strong></td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：</p><ul><li>mapStyle 可取值： <ul><li>&#39;cia_c&#39;: 天地图全球中文注记服务（经纬度坐标系）。</li><li>&#39;cia_w&#39;: 天地图全球中文注记服务（墨卡托投影坐标系）。</li><li>&#39;cta_c&#39;: 天地图全球地形中文注记服务（经纬度坐标系）。</li><li>&#39;cta_w&#39;: 天地图全球地形中文注记服务（墨卡托投影坐标系）。</li><li>&#39;cva_c&#39;: 天地图全球矢量中文注记服务（经纬度坐标系）。</li><li>&#39;cva_w&#39;: 天地图全球矢量中文注记服务（墨卡托投影坐标系）。</li><li>&#39;ela_c&#39;: 天地图全球影像英文注记服务（经纬度坐标系）。</li><li>&#39;ela_w&#39;: 天地图全球影像英文注记服务（墨卡托投影坐标系）。</li><li>&#39;eva_c&#39;: 天地图全球矢量英文注记服务（经纬度坐标系）。</li><li>&#39;eva_w&#39;: 天地图全球矢量英文注记服务（墨卡托投影坐标系）。</li><li>&#39;img_c&#39;: 天地图全球影像地图服务（经纬度坐标系）。</li><li>&#39;img_w&#39;: 天地图全球影像地图服务（墨卡托投影坐标系）。</li><li>&#39;ter_c&#39;: 天地图全球地形晕渲服务（经纬度坐标系）。</li><li>&#39;ter_w&#39;: 天地图全球地形晕渲服务（墨卡托投影坐标系）。</li><li>&#39;vec_c&#39;: 天地图全球矢量地图服务（经纬度坐标系）。</li><li>&#39;vec_w&#39;: 天地图全球矢量地图服务（墨卡托投影坐标系）。</li><li>&#39;ibo_c&#39;: 天地图全球矢量地图服务（经纬度坐标系）。</li><li>&#39;ibo_w&#39;: 天地图全球境界服务（墨卡托投影坐标系）。</li></ul></li></ul></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>当图层提供者可用时触发, 返回 ImageryProvider 实例。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>资料： <strong><a href=\"http://lbs.tianditu.gov.cn/server/MapService.html\">MapService</a></strong></li></ul>", 7);

function vc_provider_imagery_tiandituvue_type_template_id_403c6010_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_1, [vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_7]),
    _: 1
  }), vc_provider_imagery_tiandituvue_type_template_id_403c6010_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-tianditu.md?vue&type=template&id=403c6010

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-imagery-tianditu.md?vue&type=script&lang=ts

/* harmony default export */ var vc_provider_imagery_tiandituvue_type_script_lang_ts = ({
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
      }, "切换风格", -1);

      function render(_ctx, _cache) {
        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

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
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"]), _createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: _ctx.mapStyle,
                token: "436ce7e50d27eede2f2929307e6b33c0",
                ref: "provider"
              }, null, 8, ["mapStyle"])]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"])]),
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
                modelValue: _ctx.mapStyle,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.mapStyle = $event),
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
          const options = [{
            value: 'img_c',
            label: '全球影像地图服务(经纬度)'
          }, {
            value: 'img_w',
            label: '全球影像地图服务(墨卡托)'
          }, {
            value: 'vec_c',
            label: '全球矢量地图服务(经纬度)'
          }, {
            value: 'vec_w',
            label: '全球矢量地图服务(墨卡托)'
          }, {
            value: 'ter_c',
            label: '全球地形晕渲服务(经纬度)'
          }, {
            value: 'ter_w',
            label: '全球地形晕渲服务(墨卡托)'
          }, {
            value: 'ibo_c',
            label: '全球境界(经纬度)'
          }, {
            value: 'ibo_w',
            label: '全球境界(墨卡托)'
          }];
          const mapStyle = ref('img_c'); // methods

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
            options,
            mapStyle
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
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-tianditu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-imagery-tianditu.md



vc_provider_imagery_tiandituvue_type_script_lang_ts.render = vc_provider_imagery_tiandituvue_type_template_id_403c6010_render

/* harmony default export */ var vc_provider_imagery_tianditu = __webpack_exports__["default"] = (vc_provider_imagery_tiandituvue_type_script_lang_ts);

/***/ })

}]);