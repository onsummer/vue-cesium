(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/base.md?vue&type=template&id=181d4f36

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("全局组件事件 ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<div class=\"tip\"><p>提示： vue-cesium 所有组件都包含下列 3 个事件，后续文档可能不再列出。</p></div><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table>", 2);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("全局组件实例方法 ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<div class=\"tip\"><p>提示： vue-cesium 所有组件都包含下列 4 个方法，后续文档可能不再列出。</p></div><table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td></td><td>加载组件。</td></tr><tr><td>unload</td><td></td><td>卸载组件。</td></tr><tr><td>reload</td><td></td><td>完成一次组件卸载 / 重新加载的方法。</td></tr><tr><td>getCesiumObject</td><td>Object</td><td>获取该组件加载的 Cesium 对象或者 HTMLElement。</td></tr></tbody></table>", 2);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("常量 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>由于 Cesium 在 <code>vc-viewer</code> 组件初始化完成之前无法获取到，因此 Cesium 的一些常量在组件绑定时无法通过 Cesium 直接获取到，但直接传他们的值依然是可以的。</p><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- 错误用法 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> <span class=\"hljs-attr\">:sceneMode</span>=<span class=\"hljs-string\">&quot;Cesium.SceneMode.SCENE3D&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- 正确用法 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> <span class=\"hljs-attr\">:sceneMode</span>=<span class=\"hljs-string\">&quot;3&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre></div>", 2);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("HorizontalOrigin ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>用于描述文本、布告板等对象水平对齐方式。</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>CENTER</td><td>0</td><td>居中对齐</td></tr><tr><td>LEFT</td><td>1</td><td>左对齐</td></tr><tr><td>RIGHT</td><td>-1</td><td>右对齐</td></tr></tbody></table>", 2);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VerticalOrigin ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>用于描述文本、布告板等对象垂直对齐方式。</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>CENTER</td><td>0</td><td>居中对齐</td></tr><tr><td>BOTTOM</td><td>1</td><td>底部对齐</td></tr><tr><td>BASELINE</td><td>2</td><td>基线对齐</td></tr><tr><td>TOP</td><td>-1</td><td>顶部对齐</td></tr></tbody></table>", 2);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("HeightReference ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>用于描述文本、布告板等对象高度模式。</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>NONE</td><td>0</td><td>绝对高度</td></tr><tr><td>CLAMP_TO_GROUND</td><td>1</td><td>贴地</td></tr><tr><td>RELATIVE_TO_GROUND</td><td>2</td><td>相对于地面</td></tr></tbody></table>", 2);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ShadowMode ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>用于描述阴影接收方式。</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>DISABLED</td><td>0</td><td>不接收不反射</td></tr><tr><td>ENABLED</td><td>1</td><td>接收切反射</td></tr><tr><td>CAST_ONLY</td><td>2</td><td>仅反射</td></tr><tr><td>RECEIVE_ONLY</td><td>3</td><td>仅接收</td></tr></tbody></table>", 2);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CornerType ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>用于描述 corridor 转角样式</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>ROUNDED</td><td>0</td><td>圆角</td></tr><tr><td>MITERED</td><td>1</td><td>直角</td></tr><tr><td>BEVELED</td><td>2</td><td>斜角</td></tr></tbody></table>", 2);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ClassificationType ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>描述贴对象方式</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>TERRAIN</td><td>0</td><td>只贴地</td></tr><tr><td>CESIUM_3D_TILE</td><td>1</td><td>只贴 3DTile</td></tr><tr><td>BOTH</td><td>2</td><td>都贴</td></tr></tbody></table>", 2);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BingMapsStyle ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>描述 BingMaps 风格</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>AERIAL</td><td>&#39;Aerial&#39;</td><td>卫星影像</td></tr><tr><td>AERIAL_WITH_LABELS</td><td>&#39;AerialWithLabels&#39;</td><td>卫星影像带标注</td></tr><tr><td>AERIAL_WITH_LABELS_ON_DEMAND</td><td>&#39;AerialWithLabelsOnDemand&#39;</td><td>卫星影像带主要的标注</td></tr><tr><td>ROAD</td><td>&#39;Road&#39;</td><td>道路</td></tr><tr><td>ROAD_ON_DEMAND</td><td>&#39;RoadOnDemand&#39;</td><td>主要道路</td></tr><tr><td>CANVAS_DARK</td><td>&#39;CanvasDark&#39;</td><td>暗色</td></tr><tr><td>CANVAS_LIGHT</td><td>&#39;CanvasGray&#39;</td><td>亮色</td></tr><tr><td>CANVAS_GRAY</td><td>&#39;CanvasLight&#39;</td><td>灰色</td></tr><tr><td>ORDNANCE_SURVEY</td><td>&#39;OrdnanceSurvey&#39;</td><td>军械测量图像。 该图像仅在英国伦敦地区可见。</td></tr><tr><td>COLLINS_BART</td><td>&#39;CollinsBart&#39;</td><td>柯林斯·巴特（Collins Bart）的影像。</td></tr></tbody></table>", 2);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("LabelStyle ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>描述文本风格</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>FILL</td><td>0</td><td>填充</td></tr><tr><td>OUTLINE</td><td>1</td><td>轮廓</td></tr><tr><td>FILL_AND_OUTLINE</td><td>2</td><td>填充和轮廓</td></tr></tbody></table>", 2);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ArcType ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>描述线段样式</p><table><thead><tr><th>常量</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>NONE</td><td>0</td><td>直线</td></tr><tr><td>GEODESIC</td><td>1</td><td>测地线</td></tr><tr><td>RHUMB</td><td>2</td><td>按照恒向线或等倾角螺旋</td></tr></tbody></table>", 2);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("SceneMode ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>描述场景是 3D、2D 或者是 2.5D</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>MORPHING</td><td>0</td><td>SceneMode 正在变换，如 3D 变到 2D。</td></tr><tr><td>COLUMBUS_VIEW</td><td>1</td><td>哥伦布视图模式。 一个 2.5D 透视图，在该图上面绘制了平坦的地图，并绘制了高度非零的对象。</td></tr><tr><td>SCENE2D</td><td>2</td><td>2D 模式。 使用正射投影从上至下查看地图。</td></tr><tr><td>SCENE3D</td><td>3</td><td>3D 模式。 地球的一个传统 3D 透视图。</td></tr></tbody></table>", 2);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("MapMode2D ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>描述地图如何在 2D 模式下运行。</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>ROTATE</td><td>0</td><td>二维地图可以绕 z 轴旋转。</td></tr><tr><td>INFINITE_SCROLL</td><td>1</td><td>二维地图可以在水平方向上无限滚动。</td></tr></tbody></table>", 2);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("类型 ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p><code>vue-cesium</code> 各组件传参支持直接传 Cesium 实例化的参数，但由于 Cesium 在 <code>vc-viewer</code> 组件初始化完成之前无法获取到，所以如果是传 Cesium 实例的参数需要在 <code>vc-viewer</code> 组件 <code>ready</code> 事件之后来初始化这些参数。为了简化开发，特将一些常用的参数抽象成<code>简单对象(PlainObject)</code>，可以提前对这些对象进行赋值。</p><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- 完整写法 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> @<span class=\"hljs-attr\">ready</span>=<span class=\"hljs-string\">&quot;onViewerReady&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-entity</span> <span class=\"hljs-attr\">:position</span>=<span class=\"hljs-string\">&quot;position&quot;</span> <span class=\"hljs-attr\">:point</span>=<span class=\"hljs-string\">&quot;point&quot;</span>&gt;</span> <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-entity</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-title function_\">data</span>(<span class=\"hljs-params\"></span>) {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">position</span>: <span class=\"hljs-literal\">null</span>,\n        <span class=\"hljs-attr\">point</span>: <span class=\"hljs-literal\">null</span>\n      }\n    },\n    <span class=\"hljs-attr\">methods</span>: {\n      <span class=\"hljs-title function_\">onViewerReady</span>(<span class=\"hljs-params\">{ Cesium, viewer }</span>) {\n        <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">position</span> = <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span>.<span class=\"hljs-title function_\">fromDegrees</span>(<span class=\"hljs-number\">108</span>, <span class=\"hljs-number\">35</span>, <span class=\"hljs-number\">1000</span>)\n        <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">point</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-title class_\">PointGraphics</span>({\n          <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">28</span>,\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span>.<span class=\"hljs-property\">RED</span>\n        })\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- 建议写法 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-entity</span> <span class=\"hljs-attr\">:position</span>=<span class=\"hljs-string\">&quot;[108, 35, 1000]&quot;</span> <span class=\"hljs-attr\">:point</span>=<span class=\"hljs-string\">&quot;{pixelSize: 28, color: &#39;red&#39;}&quot;</span>&gt;</span> <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-entity</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre></div><p>以下分别描述：</p>", 3);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cartesian2 ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Cartesian2</code> 有 2 种方式：</p><ul><li><code>Cartesian2Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">Cartesian2Option</span> {\n  <span class=\"hljs-attr\">x</span>: number\n  <span class=\"hljs-attr\">y</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[number, number]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Array<Cartesian2> ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Array&lt;Cartesian2&gt;</code> 有 2 种方式：</p><ul><li><code>Array&lt;Cartesian2Option&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[{ <span class=\"hljs-attr\">x</span>: number,  <span class=\"hljs-attr\">y</span>: number }, ..., { <span class=\"hljs-attr\">x</span>: number,  <span class=\"hljs-attr\">y</span>: number }]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;Array&lt;number&gt;&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[[<span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number],..., [<span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number]]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cartesian3 ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Cartesian3</code> 有 3 种方式:</p><ul><li><code>Cartesian3Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">Cartesian3Option</span> {\n  <span class=\"hljs-attr\">x</span>: number\n  <span class=\"hljs-attr\">y</span>: number\n  <span class=\"hljs-attr\">z</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>CartographicInDegreeOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 单位度</span>\ninterface <span class=\"hljs-title class_\">CartographicInDegreeOption</span> {\n  <span class=\"hljs-attr\">lng</span>: number\n  <span class=\"hljs-attr\">lat</span>: number\n  height?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 单位度</span>\n;[(<span class=\"hljs-attr\">lng</span>: number), (<span class=\"hljs-attr\">lat</span>: number), (<span class=\"hljs-attr\">height</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 7);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Array<Cartesian3> ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Array&lt;Cartesian3&gt;</code> 有 4 种方式:</p><ul><li><code>Array&lt;Cartesian3Option&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">\n[{ <span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number, <span class=\"hljs-attr\">z</span>: number },...,{ <span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number, <span class=\"hljs-attr\">z</span>: number }]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;CartographicInDegreeOption&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 单位度</span>\n[{ <span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, height?: number },..., { <span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, height?: number }]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 经度、纬度、高度（单位度）</span>\n[<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number, ..., <span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;Array&lt;number&gt;&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 经度、纬度、高度（单位度）</span>\n[[<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number], ..., [<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number]]\n</code><span class=\"lang-mark\">js</span></pre>", 9);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cartesian4 ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Cartesian4</code> 有 2 种方式:</p><ul><li><code>Cartesian4Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">Cartesian4Option</span> {\n  x?: number\n  y?: number\n  z?: number\n  w?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[(<span class=\"hljs-attr\">x</span>: number), (<span class=\"hljs-attr\">y</span>: number), (<span class=\"hljs-attr\">z</span>: number), (<span class=\"hljs-attr\">w</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Rectange(coordinates) ");

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Rectange</code> 有 3 种方式:</p><ul><li><code>RectangleInDegreeOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 单位度</span>\ninterface <span class=\"hljs-title class_\">RectangleInDegreeOption</span> {\n  <span class=\"hljs-attr\">west</span>: number\n  <span class=\"hljs-attr\">south</span>: number\n  <span class=\"hljs-attr\">east</span>: number\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Cartesian4Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 单位弧度</span>\ninterface <span class=\"hljs-title class_\">Cartesian4Option</span> {\n  x?: number\n  y?: number\n  z?: number\n  w?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 单位度</span>\n;[(<span class=\"hljs-attr\">west</span>: number), (<span class=\"hljs-attr\">south</span>: number), (<span class=\"hljs-attr\">east</span>: number), (<span class=\"hljs-attr\">north</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 7);

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Camera ");

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Camera</code> 有 1 种方式:</p><ul><li><code>CameraOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">CameraOption</span> {\n  position?: <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  retangle?: <span class=\"hljs-title class_\">RectangleInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  heading?: number\n  pitch?: number\n  roll?: number\n}\n</code><span class=\"lang-mark\">js</span></pre>", 3);

const _hoisted_99 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolygonHierarchy ");

const _hoisted_100 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.PolygonHierarchy</code> 的方式有 2 种:</p><ul><li><code>PolygonHierarchyOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">PolygonHierarchyOption</span> {\n  <span class=\"hljs-attr\">positions</span>: <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span>&gt; | <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Cartesian3Option</span>&gt; | <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Array</span>&lt;number&gt;&gt;\n  holes?: <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">PolygonHierarchyOption</span>&gt;\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;Cartesian3Option&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number},...,{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number}]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_105 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("NearFarScalar ");

const _hoisted_106 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.NearFarScalar</code> 的方式有 2 种：</p><ul><li><code>NearFarScalarOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">NearFarScalarOption</span> {\n  <span class=\"hljs-attr\">near</span>: number\n  <span class=\"hljs-attr\">nearValue</span>: number\n  <span class=\"hljs-attr\">far</span>: number\n  <span class=\"hljs-attr\">farValue</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[<span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">nearValue</span>: number, <span class=\"hljs-attr\">far</span>: number, <span class=\"hljs-attr\">farValue</span>: number, ..., <span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">nearValue</span>: number, <span class=\"hljs-attr\">far</span>: number, <span class=\"hljs-attr\">farValue</span>: number]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_111 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DistanceDisplayCondition ");

const _hoisted_112 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.DistanceDisplayCondition</code> 的方式有 2 种：</p><ul><li><code>DistanceDisplayConditionOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">DistanceDisplayConditionOption</span> {\n  <span class=\"hljs-attr\">near</span>: number\n  <span class=\"hljs-attr\">far</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[<span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">far</span>: number, ..., <span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">far</span>: number]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_117 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Color ");

const _hoisted_118 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Color</code> 的方式有 4 种：</p><ul><li><code>string</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// css color</span>\n<span class=\"hljs-string\">&#39;white&#39;</span>\n<span class=\"hljs-string\">&#39;#fff&#39;</span>\n<span class=\"hljs-string\">&#39;rgba(255,255,255,0)&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in byte</span>\n;[(<span class=\"hljs-attr\">r</span>: number), (<span class=\"hljs-attr\">g</span>: number), (<span class=\"hljs-attr\">b</span>: number), (<span class=\"hljs-attr\">a</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>ColorInByteOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">ColorInByteOption</span> {\n  <span class=\"hljs-attr\">red</span>: number\n  <span class=\"hljs-attr\">green</span>: number\n  <span class=\"hljs-attr\">blue</span>: number\n  alpha?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Cartesian4Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 范围从0（无强度）到1.0（全强度）。</span>\ninterface <span class=\"hljs-title class_\">Cartesian4Option</span> {\n  x?: number\n  y?: number\n  z?: number\n  w?: number\n}\n</code><span class=\"lang-mark\">js</span></pre>", 9);

const _hoisted_127 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Material ");

const _hoisted_128 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Material</code>, <code>Cesium.MaterialProperty</code> 的方式有 3 种：</p><ul><li><code>string</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 颜色或者图片url</span>\n<span class=\"hljs-string\">&#39;red&#39;</span>\n<span class=\"hljs-string\">&#39;https://zouyaoji.top/vue-cesium/favicon.png&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 颜色</span>\n;[<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">255</span>]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>MaterialOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">MaterialOption</span> {\n    <span class=\"hljs-attr\">fabric</span>: {\n    <span class=\"hljs-attr\">type</span>: string\n    <span class=\"hljs-attr\">uniforms</span>: {\n      color?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      image?: string | <span class=\"hljs-title class_\">HTMLImageElement</span> | <span class=\"hljs-title class_\">HTMLCanvasElement</span> | <span class=\"hljs-title class_\">HTMLVideoElement</span>\n      repeat?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      transparent?: boolean\n      evenColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      oddColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      gapColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      dashLength?: number\n      dashPattern?: number\n      glowPower?: number\n      taperPower?: number\n      outlineColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      outlineWidth?: number\n      cellAlpha?: number\n      lineCount?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      lineThickness?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      lineOffset?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      orientation?: number | <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">StripeOrientation</span>\n      offset?: number\n    }\n  }\n  strict?: boolean\n  translucent?: boolean | <span class=\"hljs-title class_\">AnyFunction</span>\n  minificationFilter?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">TextureMinificationFilter</span>\n  magnificationFilter?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">TextureMagnificationFilter</span>\n}\n</code><span class=\"lang-mark\">js</span></pre>", 7);

const _hoisted_135 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BoundingRectangle ");

const _hoisted_136 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.BoundingRectangle</code> 的方式有 2 种：</p><ul><li><code>BoundingRectangleOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">BoundingRectangleOption</span> {\n  <span class=\"hljs-attr\">x</span>: number\n  <span class=\"hljs-attr\">y</span>: number\n  <span class=\"hljs-attr\">width</span>: number\n  <span class=\"hljs-attr\">height</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[(<span class=\"hljs-attr\">x</span>: number), (<span class=\"hljs-attr\">y</span>: number), (<span class=\"hljs-attr\">width</span>: number), (<span class=\"hljs-attr\">height</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_141 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Plane ");

const _hoisted_142 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.Plane</code> 的方式有 2 种：</p><ul><li><code>PlaneOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">PlaneOption</span> {\n  <span class=\"hljs-attr\">normal</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  <span class=\"hljs-attr\">distance</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;any&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[(<span class=\"hljs-attr\">plane</span>: <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Cartesian3Option</span>&gt;), (<span class=\"hljs-attr\">distance</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_147 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("TranslationRotationScale ");

const _hoisted_148 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>表达 <code>Cesium.TranslationRotationScale</code> 的方式有 2 种：</p><ul><li><code>TranslationRotationScaleOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">TranslationRotationScaleOption</span> {\n  <span class=\"hljs-attr\">translation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  <span class=\"hljs-attr\">rotation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Quaternion</span> | <span class=\"hljs-title class_\">Cartesian4Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  <span class=\"hljs-attr\">scale</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;any&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[\n  (<span class=\"hljs-attr\">translation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;),\n  (<span class=\"hljs-attr\">rotation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Quaternion</span> | <span class=\"hljs-title class_\">Cartesian4Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;),\n  (<span class=\"hljs-attr\">scale</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;)\n]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu",
    tabindex: "-1",
    content: "基础",
    href: "#ji-chu",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "quan-ju-zu-jian-shi-jian",
    tabindex: "-1",
    content: "全局组件事件",
    href: "#quan-ju-zu-jian-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#quan-ju-zu-jian-shi-jian"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "quan-ju-zu-jian-shi-li-fang-fa",
    tabindex: "-1",
    content: "全局组件实例方法",
    href: "#quan-ju-zu-jian-shi-li-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#quan-ju-zu-jian-shi-li-fang-fa"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "chang-liang",
    tabindex: "-1",
    content: "常量",
    href: "#chang-liang",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chang-liang"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "horizontalorigin",
    tabindex: "-1",
    content: "HorizontalOrigin",
    href: "#horizontalorigin",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#horizontalorigin"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "verticalorigin",
    tabindex: "-1",
    content: "VerticalOrigin",
    href: "#verticalorigin",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#verticalorigin"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "heightreference",
    tabindex: "-1",
    content: "HeightReference",
    href: "#heightreference",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#heightreference"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shadowmode",
    tabindex: "-1",
    content: "ShadowMode",
    href: "#shadowmode",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shadowmode"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cornertype",
    tabindex: "-1",
    content: "CornerType",
    href: "#cornertype",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cornertype"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "classificationtype",
    tabindex: "-1",
    content: "ClassificationType",
    href: "#classificationtype",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#classificationtype"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bingmapsstyle",
    tabindex: "-1",
    content: "BingMapsStyle",
    href: "#bingmapsstyle",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bingmapsstyle"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "labelstyle",
    tabindex: "-1",
    content: "LabelStyle",
    href: "#labelstyle",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#labelstyle"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "arctype",
    tabindex: "-1",
    content: "ArcType",
    href: "#arctype",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#arctype"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "scenemode",
    tabindex: "-1",
    content: "SceneMode",
    href: "#scenemode",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scenemode"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "mapmodetwod",
    tabindex: "-1",
    content: "MapMode2D",
    href: "#mapmodetwod",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_42, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mapmodetwod"
    })]),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("blockquote", null, [Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/global.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_46]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "lei-xing",
    tabindex: "-1",
    content: "类型",
    href: "#lei-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#lei-xing"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cartesiantwo",
    tabindex: "-1",
    content: "Cartesian2",
    href: "#cartesiantwo",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cartesiantwo"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "array-cartesiantwo",
    tabindex: "-1",
    content: "Array<Cartesian2>",
    href: "#array-cartesiantwo",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#array-cartesiantwo"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cartesianthree",
    tabindex: "-1",
    content: "Cartesian3",
    href: "#cartesianthree",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_63, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cartesianthree"
    })]),
    _: 1
  }), _hoisted_64, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "array-cartesianthree",
    tabindex: "-1",
    content: "Array<Cartesian3>",
    href: "#array-cartesianthree",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_71, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#array-cartesianthree"
    })]),
    _: 1
  }), _hoisted_72, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cartesianfour",
    tabindex: "-1",
    content: "Cartesian4",
    href: "#cartesianfour",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_81, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cartesianfour"
    })]),
    _: 1
  }), _hoisted_82, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "rectange-coordinates",
    tabindex: "-1",
    content: "Rectange(coordinates)",
    href: "#rectange-coordinates",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_87, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rectange-coordinates"
    })]),
    _: 1
  }), _hoisted_88, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "camera",
    tabindex: "-1",
    content: "Camera",
    href: "#camera",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_95, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#camera"
    })]),
    _: 1
  }), _hoisted_96, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "polygonhierarchy",
    tabindex: "-1",
    content: "PolygonHierarchy",
    href: "#polygonhierarchy",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_99, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#polygonhierarchy"
    })]),
    _: 1
  }), _hoisted_100, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "nearfarscalar",
    tabindex: "-1",
    content: "NearFarScalar",
    href: "#nearfarscalar",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_105, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nearfarscalar"
    })]),
    _: 1
  }), _hoisted_106, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "distancedisplaycondition",
    tabindex: "-1",
    content: "DistanceDisplayCondition",
    href: "#distancedisplaycondition",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_111, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#distancedisplaycondition"
    })]),
    _: 1
  }), _hoisted_112, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "color",
    tabindex: "-1",
    content: "Color",
    href: "#color",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_117, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#color"
    })]),
    _: 1
  }), _hoisted_118, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "material",
    tabindex: "-1",
    content: "Material",
    href: "#material",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_127, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#material"
    })]),
    _: 1
  }), _hoisted_128, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "boundingrectangle",
    tabindex: "-1",
    content: "BoundingRectangle",
    href: "#boundingrectangle",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_135, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#boundingrectangle"
    })]),
    _: 1
  }), _hoisted_136, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "plane",
    tabindex: "-1",
    content: "Plane",
    href: "#plane",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_141, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#plane"
    })]),
    _: 1
  }), _hoisted_142, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "translationrotationscale",
    tabindex: "-1",
    content: "TranslationRotationScale",
    href: "#translationrotationscale",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_147, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#translationrotationscale"
    })]),
    _: 1
  }), _hoisted_148, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/base.md?vue&type=template&id=181d4f36

// CONCATENATED MODULE: ./website/docs/zh-CN/base.md

const script = {}
script.render = render

/* harmony default export */ var base = __webpack_exports__["default"] = (script);

/***/ })

}]);