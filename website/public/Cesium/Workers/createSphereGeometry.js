define([
  './when-4bbc8319',
  './Matrix2-9aa31791',
  './RuntimeError-346a3079',
  './EllipsoidGeometry-9a4ae869',
  './VertexFormat-71718faa',
  './ComponentDatatype-93750d1a',
  './WebGLConstants-1c8239cc',
  './GeometryOffsetAttribute-1772960d',
  './Transforms-d13cc04e',
  './combine-83860057',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './IndexDatatype-b7d979a6'
], function (e, t, r, i, a, o, n, s, c, d, l, m, u) {
  'use strict'
  function p(r) {
    var a = e.defaultValue(r.radius, 1),
      o = { radii: new t.Cartesian3(a, a, a), stackPartitions: r.stackPartitions, slicePartitions: r.slicePartitions, vertexFormat: r.vertexFormat }
    ;(this._ellipsoidGeometry = new i.EllipsoidGeometry(o)), (this._workerName = 'createSphereGeometry')
  }
  ;(p.packedLength = i.EllipsoidGeometry.packedLength),
    (p.pack = function (e, t, r) {
      return i.EllipsoidGeometry.pack(e._ellipsoidGeometry, t, r)
    })
  var y = new i.EllipsoidGeometry(),
    G = { radius: void 0, radii: new t.Cartesian3(), vertexFormat: new a.VertexFormat(), stackPartitions: void 0, slicePartitions: void 0 }
  return (
    (p.unpack = function (r, o, n) {
      var s = i.EllipsoidGeometry.unpack(r, o, y)
      return (
        (G.vertexFormat = a.VertexFormat.clone(s._vertexFormat, G.vertexFormat)),
        (G.stackPartitions = s._stackPartitions),
        (G.slicePartitions = s._slicePartitions),
        e.defined(n)
          ? (t.Cartesian3.clone(s._radii, G.radii), (n._ellipsoidGeometry = new i.EllipsoidGeometry(G)), n)
          : ((G.radius = s._radii.x), new p(G))
      )
    }),
    (p.createGeometry = function (e) {
      return i.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)
    }),
    function (t, r) {
      return e.defined(r) && (t = p.unpack(t, r)), p.createGeometry(t)
    }
  )
})
