define([
  './when-4bbc8319',
  './Matrix2-9aa31791',
  './ArcType-98ec98bf',
  './GeometryOffsetAttribute-1772960d',
  './Transforms-d13cc04e',
  './RuntimeError-346a3079',
  './ComponentDatatype-93750d1a',
  './EllipsoidTangentPlane-eecce7e8',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './GeometryInstance-47b34185',
  './GeometryPipeline-2356afec',
  './IndexDatatype-b7d979a6',
  './PolygonGeometryLibrary-dec9574a',
  './PolygonPipeline-da7fc5ca',
  './combine-83860057',
  './WebGLConstants-1c8239cc',
  './AxisAlignedBoundingBox-07c6b7f2',
  './IntersectionTests-96a04219',
  './Plane-318d6937',
  './AttributeCompression-af389d04',
  './EncodedCartesian3-f286cedc',
  './arrayRemoveDuplicates-18786327',
  './EllipsoidRhumbLine-30c47ff4'
], function (e, t, i, r, o, n, a, l, s, y, u, p, d, c, g, f, m, h, b, P, v, E, A, _) {
  'use strict'
  var G = [],
    L = []
  function T(e, t, r, o, n) {
    var p,
      f,
      m = l.EllipsoidTangentPlane.fromPoints(t, e).projectPointsOntoPlane(t, G)
    g.PolygonPipeline.computeWindingOrder2D(m) === g.WindingOrder.CLOCKWISE && (m.reverse(), (t = t.slice().reverse()))
    var h = t.length,
      b = 0
    if (o)
      for (p = new Float64Array(2 * h * 3), f = 0; f < h; f++) {
        var P = t[f],
          v = t[(f + 1) % h]
        ;(p[b++] = P.x), (p[b++] = P.y), (p[b++] = P.z), (p[b++] = v.x), (p[b++] = v.y), (p[b++] = v.z)
      }
    else {
      var E = 0
      if (n === i.ArcType.GEODESIC) for (f = 0; f < h; f++) E += c.PolygonGeometryLibrary.subdivideLineCount(t[f], t[(f + 1) % h], r)
      else if (n === i.ArcType.RHUMB) for (f = 0; f < h; f++) E += c.PolygonGeometryLibrary.subdivideRhumbLineCount(e, t[f], t[(f + 1) % h], r)
      for (p = new Float64Array(3 * E), f = 0; f < h; f++) {
        var A
        n === i.ArcType.GEODESIC
          ? (A = c.PolygonGeometryLibrary.subdivideLine(t[f], t[(f + 1) % h], r, L))
          : n === i.ArcType.RHUMB && (A = c.PolygonGeometryLibrary.subdivideRhumbLine(e, t[f], t[(f + 1) % h], r, L))
        for (var _ = A.length, T = 0; T < _; ++T) p[b++] = A[T]
      }
    }
    var H = 2 * (h = p.length / 3),
      O = d.IndexDatatype.createTypedArray(h, H)
    for (b = 0, f = 0; f < h - 1; f++) (O[b++] = f), (O[b++] = f + 1)
    return (
      (O[b++] = h - 1),
      (O[b++] = 0),
      new u.GeometryInstance({
        geometry: new s.Geometry({
          attributes: new y.GeometryAttributes({
            position: new s.GeometryAttribute({ componentDatatype: a.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: p })
          }),
          indices: O,
          primitiveType: s.PrimitiveType.LINES
        })
      })
    )
  }
  function H(e, t, r, o, n) {
    var p,
      f,
      m = l.EllipsoidTangentPlane.fromPoints(t, e).projectPointsOntoPlane(t, G)
    g.PolygonPipeline.computeWindingOrder2D(m) === g.WindingOrder.CLOCKWISE && (m.reverse(), (t = t.slice().reverse()))
    var h = t.length,
      b = new Array(h),
      P = 0
    if (o)
      for (p = new Float64Array(2 * h * 3 * 2), f = 0; f < h; ++f) {
        b[f] = P / 3
        var v = t[f],
          E = t[(f + 1) % h]
        ;(p[P++] = v.x), (p[P++] = v.y), (p[P++] = v.z), (p[P++] = E.x), (p[P++] = E.y), (p[P++] = E.z)
      }
    else {
      var A = 0
      if (n === i.ArcType.GEODESIC) for (f = 0; f < h; f++) A += c.PolygonGeometryLibrary.subdivideLineCount(t[f], t[(f + 1) % h], r)
      else if (n === i.ArcType.RHUMB) for (f = 0; f < h; f++) A += c.PolygonGeometryLibrary.subdivideRhumbLineCount(e, t[f], t[(f + 1) % h], r)
      for (p = new Float64Array(3 * A * 2), f = 0; f < h; ++f) {
        var _
        ;(b[f] = P / 3),
          n === i.ArcType.GEODESIC
            ? (_ = c.PolygonGeometryLibrary.subdivideLine(t[f], t[(f + 1) % h], r, L))
            : n === i.ArcType.RHUMB && (_ = c.PolygonGeometryLibrary.subdivideRhumbLine(e, t[f], t[(f + 1) % h], r, L))
        for (var T = _.length, H = 0; H < T; ++H) p[P++] = _[H]
      }
    }
    h = p.length / 6
    var O = b.length,
      x = 2 * (2 * h + O),
      C = d.IndexDatatype.createTypedArray(h + O, x)
    for (P = 0, f = 0; f < h; ++f) (C[P++] = f), (C[P++] = (f + 1) % h), (C[P++] = f + h), (C[P++] = ((f + 1) % h) + h)
    for (f = 0; f < O; f++) {
      var D = b[f]
      ;(C[P++] = D), (C[P++] = D + h)
    }
    return new u.GeometryInstance({
      geometry: new s.Geometry({
        attributes: new y.GeometryAttributes({
          position: new s.GeometryAttribute({ componentDatatype: a.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: p })
        }),
        indices: C,
        primitiveType: s.PrimitiveType.LINES
      })
    })
  }
  function O(r) {
    var o = r.polygonHierarchy,
      n = e.defaultValue(r.ellipsoid, t.Ellipsoid.WGS84),
      l = e.defaultValue(r.granularity, a.CesiumMath.RADIANS_PER_DEGREE),
      s = e.defaultValue(r.perPositionHeight, !1),
      y = s && e.defined(r.extrudedHeight),
      u = e.defaultValue(r.arcType, i.ArcType.GEODESIC),
      p = e.defaultValue(r.height, 0),
      d = e.defaultValue(r.extrudedHeight, p)
    if (!y) {
      var g = Math.max(p, d)
      ;(d = Math.min(p, d)), (p = g)
    }
    ;(this._ellipsoid = t.Ellipsoid.clone(n)),
      (this._granularity = l),
      (this._height = p),
      (this._extrudedHeight = d),
      (this._arcType = u),
      (this._polygonHierarchy = o),
      (this._perPositionHeight = s),
      (this._perPositionHeightExtrude = y),
      (this._offsetAttribute = r.offsetAttribute),
      (this._workerName = 'createPolygonOutlineGeometry'),
      (this.packedLength = c.PolygonGeometryLibrary.computeHierarchyPackedLength(o) + t.Ellipsoid.packedLength + 8)
  }
  O.pack = function (i, r, o) {
    return (
      (o = e.defaultValue(o, 0)),
      (o = c.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy, r, o)),
      t.Ellipsoid.pack(i._ellipsoid, r, o),
      (o += t.Ellipsoid.packedLength),
      (r[o++] = i._height),
      (r[o++] = i._extrudedHeight),
      (r[o++] = i._granularity),
      (r[o++] = i._perPositionHeightExtrude ? 1 : 0),
      (r[o++] = i._perPositionHeight ? 1 : 0),
      (r[o++] = i._arcType),
      (r[o++] = e.defaultValue(i._offsetAttribute, -1)),
      (r[o] = i.packedLength),
      r
    )
  }
  var x = t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),
    C = { polygonHierarchy: {} }
  return (
    (O.unpack = function (i, r, o) {
      r = e.defaultValue(r, 0)
      var n = c.PolygonGeometryLibrary.unpackPolygonHierarchy(i, r)
      ;(r = n.startingIndex), delete n.startingIndex
      var a = t.Ellipsoid.unpack(i, r, x)
      r += t.Ellipsoid.packedLength
      var l = i[r++],
        s = i[r++],
        y = i[r++],
        u = 1 === i[r++],
        p = 1 === i[r++],
        d = i[r++],
        g = i[r++],
        f = i[r]
      return (
        e.defined(o) || (o = new O(C)),
        (o._polygonHierarchy = n),
        (o._ellipsoid = t.Ellipsoid.clone(a, o._ellipsoid)),
        (o._height = l),
        (o._extrudedHeight = s),
        (o._granularity = y),
        (o._perPositionHeight = p),
        (o._perPositionHeightExtrude = u),
        (o._arcType = d),
        (o._offsetAttribute = -1 === g ? void 0 : g),
        (o.packedLength = f),
        o
      )
    }),
    (O.fromPositions = function (t) {
      return new O({
        polygonHierarchy: { positions: (t = e.defaultValue(t, e.defaultValue.EMPTY_OBJECT)).positions },
        height: t.height,
        extrudedHeight: t.extrudedHeight,
        ellipsoid: t.ellipsoid,
        granularity: t.granularity,
        perPositionHeight: t.perPositionHeight,
        arcType: t.arcType,
        offsetAttribute: t.offsetAttribute
      })
    }),
    (O.createGeometry = function (t) {
      var i = t._ellipsoid,
        n = t._granularity,
        l = t._polygonHierarchy,
        y = t._perPositionHeight,
        u = t._arcType,
        d = c.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(l, !y, i)
      if (0 !== d.length) {
        var f,
          m,
          h,
          b = [],
          P = a.CesiumMath.chordLength(n, i.maximumRadius),
          v = t._height,
          E = t._extrudedHeight
        if (t._perPositionHeightExtrude || !a.CesiumMath.equalsEpsilon(v, E, 0, a.CesiumMath.EPSILON2))
          for (h = 0; h < d.length; h++) {
            if (
              (((f = H(i, d[h], P, y, u)).geometry = c.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(f.geometry, v, E, i, y)),
              e.defined(t._offsetAttribute))
            ) {
              var A = f.geometry.attributes.position.values.length / 3,
                _ = new Uint8Array(A)
              t._offsetAttribute === r.GeometryOffsetAttribute.TOP
                ? (_ = r.arrayFill(_, 1, 0, A / 2))
                : ((m = t._offsetAttribute === r.GeometryOffsetAttribute.NONE ? 0 : 1), (_ = r.arrayFill(_, m))),
                (f.geometry.attributes.applyOffset = new s.GeometryAttribute({
                  componentDatatype: a.ComponentDatatype.UNSIGNED_BYTE,
                  componentsPerAttribute: 1,
                  values: _
                }))
            }
            b.push(f)
          }
        else
          for (h = 0; h < d.length; h++) {
            if (
              (((f = T(i, d[h], P, y, u)).geometry.attributes.position.values = g.PolygonPipeline.scaleToGeodeticHeight(
                f.geometry.attributes.position.values,
                v,
                i,
                !y
              )),
              e.defined(t._offsetAttribute))
            ) {
              var G = f.geometry.attributes.position.values.length,
                L = new Uint8Array(G / 3)
              ;(m = t._offsetAttribute === r.GeometryOffsetAttribute.NONE ? 0 : 1),
                r.arrayFill(L, m),
                (f.geometry.attributes.applyOffset = new s.GeometryAttribute({
                  componentDatatype: a.ComponentDatatype.UNSIGNED_BYTE,
                  componentsPerAttribute: 1,
                  values: L
                }))
            }
            b.push(f)
          }
        var O = p.GeometryPipeline.combineInstances(b)[0],
          x = o.BoundingSphere.fromVertices(O.attributes.position.values)
        return new s.Geometry({
          attributes: O.attributes,
          indices: O.indices,
          primitiveType: O.primitiveType,
          boundingSphere: x,
          offsetAttribute: t._offsetAttribute
        })
      }
    }),
    function (i, r) {
      return e.defined(r) && (i = O.unpack(i, r)), (i._ellipsoid = t.Ellipsoid.clone(i._ellipsoid)), O.createGeometry(i)
    }
  )
})
