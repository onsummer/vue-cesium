(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/datasources/vc-datasource-custom.md?vue&type=template&id=1cc468ea

const vc_datasource_customvue_type_template_id_1cc468ea_hoisted_1 = {
  class: "content element-doc"
};

const vc_datasource_customvue_type_template_id_1cc468ea_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcdatasourcecustom"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcdatasourcecustom"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcDatasourceCustom")], -1);

const vc_datasource_customvue_type_template_id_1cc468ea_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载自定义数据源，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CustomDataSource"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例，手动管理一组实体对象。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 基础用法")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "自定义数据源组件的基础用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-custom"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加几组自定义数据源对象，并做聚合管理。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-datasource-custom name=\"custom\" :entities=\"entities\" @click=\"onClicked\" :show=\"show\">\n      <vc-entity\n        ref=\"entity1\"\n        @click=\"onClicked\"\n        :position=\"[108, 35, 100]\"\n        :billboard=\"{\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          show: true,\n          pixelOffset: [0, -20],\n          eyeOffset: {x: 0, y: 0, z: 0},\n          horizontalOrigin: 0,\n          verticalOrigin: 1,\n          scale: 0.25,\n          color: 'lime'\n        }\"\n        description=\"Hello Vue Cesium\"\n        id=\"This is a billboard\"\n      >\n      </vc-entity>\n      <vc-entity ref=\"entity2\" :position=\"[105,40,200000]\" description=\"Hello Vue Cesium\">\n        <vc-graphics-cylinder\n          ref=\"cylinder1\"\n          :length=\"400000.0\"\n          :topRadius=\"200000.0\"\n          :bottomRadius=\"200000.0\"\n          :material=\"[0,255,0,125]\"\n          :outline=\"true\"\n          outlineColor=\"#006400\"\n        ></vc-graphics-cylinder>\n      </vc-entity>\n    </vc-datasource-custom>\n    <vc-datasource-custom\n      ref=\"datasourceRef\"\n      @click=\"onClicked\"\n      :key=\"index\"\n      :show=\"show\"\n      :name=\"datasource.name\"\n      v-for=\"(datasource, index) of datasources\"\n      :entities=\"datasource.entities\"\n      @clusterEvent=\"onDatasourceClusterEvent\"\n      @ready=\"onDatasourceReady\"\n    >\n    </vc-datasource-custom>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"显示/隐藏\"> </el-switch>\n    <el-switch v-model=\"clusterSch\" active-color=\"#13ce66\" inactive-text=\"聚合方案1\" active-text=\"聚合方案2\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const show = ref(true)\n      const datasourceRef = ref(null)\n      const datasources = reactive([])\n      const entities = reactive([\n        {\n          position: { lng: 105, lat: 35, height: 200 },\n          point: {\n            pixelSize: 5,\n            color: 'red'\n          }\n        },\n        {\n          position: { lng: 105, lat: 36, height: 300 },\n          point: {\n            pixelSize: 8,\n            color: 'yellow'\n          }\n        },\n        {\n          position: { lng: 105, lat: 37, height: 400 },\n          billboard: {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.25\n          }\n        }\n      ])\n      const instance = getCurrentInstance()\n      const clusterSch = ref(true)\n      let _viewer\n      // watch\n      watch(clusterSch, () => {\n        _viewer.scene.camera.changed.raiseEvent()\n      })\n      // methods\n      const addPoints = (options, flag) => {\n        if (flag) {\n          Cesium.Resource.fetchJson(options.datauri).then(res => {\n            const img = new Image()\n            img.src = options.iconOn\n            img.onload = () => {\n              let datasource = {\n                name: options.code,\n                clustering: true,\n                entities: []\n              }\n              datasource.entities = res.reduce((pre, cur) => {\n                return pre.concat({\n                  position: [Number(cur.Longitude), Number(cur.Latitude), 1000],\n                  id: cur.id,\n                  description: cur.name,\n                  billboard: {\n                    width: img.width,\n                    height: img.height,\n                    image: options.iconOn,\n                    scale: 0.5\n                  }\n                })\n              }, [])\n\n              datasources.push(datasource)\n            }\n          })\n        } else {\n          datasources = []\n        }\n      }\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        datasourceRef.value.unload()\n      }\n      const reload = () => {\n        datasourceRef.value.reload()\n      }\n      const load = () => {\n        datasourceRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        _viewer = viewer\n        const options = {\n          id: '1001',\n          code: '1001',\n          name: 'test',\n          iconOn: 'https://zouyaoji.top/vue-cesium/SampleData/points/pic.png',\n          giscolor: '#fb7228',\n          datauri: 'https://zouyaoji.top/vue-cesium/SampleData/points/custom-data.json'\n        }\n        addPoints(options, true)\n      }\n      const onDatasourceReady = ({ Cesium, viewer, cesiumObject }) => {\n        viewer.zoomTo(cesiumObject)\n        //开启聚合功能\n        cesiumObject.clustering.enabled = true\n        cesiumObject.clustering.pixelRange = 30\n        cesiumObject.clustering.minimumClusterSize = 3\n      }\n      const onDatasourceClusterEvent = (clusteredEntities, cluster) => {\n        if (clusterSch.value) {\n          cluster.billboard.show = !0\n          cluster.label.show = !1\n          cluster.billboard.id = cluster.label.id\n          cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM\n          clusteredEntities.length >= 300\n            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png')\n            : clusteredEntities.length >= 150\n            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png')\n            : clusteredEntities.length >= 90\n            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png')\n            : clusteredEntities.length >= 30\n            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png')\n            : clusteredEntities.length > 10\n            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png')\n            : (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/' + clusteredEntities.length + '.png')\n        } else {\n          cluster.label.show = true\n          cluster.label.scale = 0.5\n          cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF')\n          cluster.label.style = Cesium.LabelStyle.FILL\n          cluster.label.font = '30px caption'\n          cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM\n          cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5)\n          cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY\n          cluster.point.show = true\n          //聚合体属性\n          cluster.point.id = cluster.label.id\n          cluster.point.color = Cesium.Color.LIGHTSLATEGRAY\n          if (clusteredEntities.length >= 100) {\n            cluster.point.pixelSize = 38\n            cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5)\n          } else if (clusteredEntities.length >= 50) {\n            cluster.point.pixelSize = 36\n          } else if (clusteredEntities.length >= 40) {\n            cluster.point.pixelSize = 33\n          } else if (clusteredEntities.length >= 30) {\n            cluster.point.pixelSize = 28\n          } else if (clusteredEntities.length >= 20) {\n            cluster.point.pixelSize = 25\n          } else if (clusteredEntities.length >= 10) {\n            cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4)\n            cluster.label.scale = 0.4\n            cluster.point.pixelSize = 20\n          } else if (clusteredEntities.length >= 5) {\n            cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)\n            cluster.label.scale = 0.4\n            cluster.point.pixelSize = 15\n          } else {\n            cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)\n            cluster.label.scale = 0.4\n            cluster.point.pixelSize = 13\n          }\n        }\n      }\n      // life cycle\n      onMounted(() => {})\n\n      return {\n        unload,\n        reload,\n        load,\n        show,\n        onClicked,\n        onViewerReady,\n        onDatasourceReady,\n        onDatasourceClusterEvent,\n        datasourceRef,\n        datasources,\n        entities,\n        clusterSch\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>String</td><td></td><td><code>optional</code> 指定数据源名称。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定数据源是否显示。</td></tr><tr><td>entities</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定要添加到该数据源的实体集合。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>changedEvent</td><td></td><td>数据源改变时触发。</td></tr><tr><td>errorEvent</td><td></td><td>数据源发生错误时触发。</td></tr><tr><td>loadingEvent</td><td></td><td>数据源开始或结束加载时触发。</td></tr><tr><td>clusterEvent</td><td>(clusteredEntities, cluster)</td><td>数据源聚合事件。</td></tr><tr><td>collectionChanged</td><td>(collection, added, removed, changed)</td><td>数据源实体集合改变时触</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该数据源上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该数据源上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该数据源时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该数据源外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该数据源时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该数据源上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该数据源时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该数据源时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html\">CustomDataSource</a></strong></li></ul>", 6);

function vc_datasource_customvue_type_template_id_1cc468ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_datasource_customvue_type_template_id_1cc468ea_hoisted_1, [vc_datasource_customvue_type_template_id_1cc468ea_hoisted_2, vc_datasource_customvue_type_template_id_1cc468ea_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/datasources/vc-datasource-custom.md?vue&type=template&id=1cc468ea

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/datasources/vc-datasource-custom.md?vue&type=script&lang=ts

/* harmony default export */ var vc_datasource_customvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createBlock: _createBlock,
        createTextVNode: _createTextVNode
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_graphics_cylinder = _resolveComponent("vc-graphics-cylinder");

        const _component_vc_datasource_custom = _resolveComponent("vc-datasource-custom");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_datasource_custom, {
              name: "custom",
              entities: _ctx.entities,
              onClick: _ctx.onClicked,
              show: _ctx.show
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_entity, {
                ref: "entity1",
                onClick: _ctx.onClicked,
                position: [108, 35, 100],
                billboard: {
                  image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                  show: true,
                  pixelOffset: [0, -20],
                  eyeOffset: {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  horizontalOrigin: 0,
                  verticalOrigin: 1,
                  scale: 0.25,
                  color: 'lime'
                },
                description: "Hello Vue Cesium",
                id: "This is a billboard"
              }, null, 8, ["onClick", "billboard"]), _createVNode(_component_vc_entity, {
                ref: "entity2",
                position: [105, 40, 200000],
                description: "Hello Vue Cesium"
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_graphics_cylinder, {
                  ref: "cylinder1",
                  length: 400000.0,
                  topRadius: 200000.0,
                  bottomRadius: 200000.0,
                  material: [0, 255, 0, 125],
                  outline: true,
                  outlineColor: "#006400"
                }, null, 8, ["length", "topRadius", "bottomRadius"])]),
                _: 1
              }, 512)]),
              _: 1
            }, 8, ["entities", "onClick", "show"]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.datasources, (datasource, index) => {
              return _openBlock(), _createBlock(_component_vc_datasource_custom, {
                ref: "datasourceRef",
                onClick: _ctx.onClicked,
                key: index,
                show: _ctx.show,
                name: datasource.name,
                entities: datasource.entities,
                onClusterEvent: _ctx.onDatasourceClusterEvent,
                onReady: _ctx.onDatasourceReady
              }, null, 8, ["onClick", "show", "name", "entities", "onClusterEvent", "onReady"]);
            }), 128))]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event),
              "active-color": "#13ce66",
              "inactive-text": "显示/隐藏"
            }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.clusterSch,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.clusterSch = $event),
              "active-color": "#13ce66",
              "inactive-text": "聚合方案1",
              "active-text": "聚合方案2"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const show = ref(true);
          const datasourceRef = ref(null);
          const datasources = reactive([]);
          const entities = reactive([{
            position: {
              lng: 105,
              lat: 35,
              height: 200
            },
            point: {
              pixelSize: 5,
              color: 'red'
            }
          }, {
            position: {
              lng: 105,
              lat: 36,
              height: 300
            },
            point: {
              pixelSize: 8,
              color: 'yellow'
            }
          }, {
            position: {
              lng: 105,
              lat: 37,
              height: 400
            },
            billboard: {
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.25
            }
          }]);
          const instance = getCurrentInstance();
          const clusterSch = ref(true);

          let _viewer; // watch


          watch(clusterSch, () => {
            _viewer.scene.camera.changed.raiseEvent();
          }); // methods

          const addPoints = (options, flag) => {
            if (flag) {
              Cesium.Resource.fetchJson(options.datauri).then(res => {
                const img = new Image();
                img.src = options.iconOn;

                img.onload = () => {
                  let datasource = {
                    name: options.code,
                    clustering: true,
                    entities: []
                  };
                  datasource.entities = res.reduce((pre, cur) => {
                    return pre.concat({
                      position: [Number(cur.Longitude), Number(cur.Latitude), 1000],
                      id: cur.id,
                      description: cur.name,
                      billboard: {
                        width: img.width,
                        height: img.height,
                        image: options.iconOn,
                        scale: 0.5
                      }
                    });
                  }, []);
                  datasources.push(datasource);
                };
              });
            } else {
              datasources = [];
            }
          };

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            datasourceRef.value.unload();
          };

          const reload = () => {
            datasourceRef.value.reload();
          };

          const load = () => {
            datasourceRef.value.load();
          };

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            _viewer = viewer;
            const options = {
              id: '1001',
              code: '1001',
              name: 'test',
              iconOn: 'https://zouyaoji.top/vue-cesium/SampleData/points/pic.png',
              giscolor: '#fb7228',
              datauri: 'https://zouyaoji.top/vue-cesium/SampleData/points/custom-data.json'
            };
            addPoints(options, true);
          };

          const onDatasourceReady = ({
            Cesium,
            viewer,
            cesiumObject
          }) => {
            viewer.zoomTo(cesiumObject); //开启聚合功能

            cesiumObject.clustering.enabled = true;
            cesiumObject.clustering.pixelRange = 30;
            cesiumObject.clustering.minimumClusterSize = 3;
          };

          const onDatasourceClusterEvent = (clusteredEntities, cluster) => {
            if (clusterSch.value) {
              cluster.billboard.show = !0;
              cluster.label.show = !1;
              cluster.billboard.id = cluster.label.id;
              cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
              clusteredEntities.length >= 300 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png' : clusteredEntities.length >= 150 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png' : clusteredEntities.length >= 90 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png' : clusteredEntities.length >= 30 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png' : clusteredEntities.length > 10 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png' : cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/' + clusteredEntities.length + '.png';
            } else {
              cluster.label.show = true;
              cluster.label.scale = 0.5;
              cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF');
              cluster.label.style = Cesium.LabelStyle.FILL;
              cluster.label.font = '30px caption';
              cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM;
              cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5);
              cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY;
              cluster.point.show = true; //聚合体属性

              cluster.point.id = cluster.label.id;
              cluster.point.color = Cesium.Color.LIGHTSLATEGRAY;

              if (clusteredEntities.length >= 100) {
                cluster.point.pixelSize = 38;
                cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5);
              } else if (clusteredEntities.length >= 50) {
                cluster.point.pixelSize = 36;
              } else if (clusteredEntities.length >= 40) {
                cluster.point.pixelSize = 33;
              } else if (clusteredEntities.length >= 30) {
                cluster.point.pixelSize = 28;
              } else if (clusteredEntities.length >= 20) {
                cluster.point.pixelSize = 25;
              } else if (clusteredEntities.length >= 10) {
                cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4);
                cluster.label.scale = 0.4;
                cluster.point.pixelSize = 20;
              } else if (clusteredEntities.length >= 5) {
                cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4);
                cluster.label.scale = 0.4;
                cluster.point.pixelSize = 15;
              } else {
                cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4);
                cluster.label.scale = 0.4;
                cluster.point.pixelSize = 13;
              }
            }
          }; // life cycle


          onMounted(() => {});
          return {
            unload,
            reload,
            load,
            show,
            onClicked,
            onViewerReady,
            onDatasourceReady,
            onDatasourceClusterEvent,
            datasourceRef,
            datasources,
            entities,
            clusterSch
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
// CONCATENATED MODULE: ./website/docs/zh-CN/datasources/vc-datasource-custom.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/datasources/vc-datasource-custom.md



vc_datasource_customvue_type_script_lang_ts.render = vc_datasource_customvue_type_template_id_1cc468ea_render

/* harmony default export */ var vc_datasource_custom = __webpack_exports__["default"] = (vc_datasource_customvue_type_script_lang_ts);

/***/ })

}]);