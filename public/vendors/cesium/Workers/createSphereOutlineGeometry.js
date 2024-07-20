define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-d1adddcb","./Transforms-ea828842","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-618451c9","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./GeometryOffsetAttribute-7350d9af","./EllipsoidOutlineGeometry-8bb960c1"],function(n,e,i,s,t,r,o,a,d,c,l,u,m){"use strict";function p(e){var i=n.defaultValue(e.radius,1),t={radii:new s.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}p.packedLength=m.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return m.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var y=new m.EllipsoidOutlineGeometry,f={radius:void 0,radii:new s.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(e,i,t){var r=m.EllipsoidOutlineGeometry.unpack(e,i,y);return f.stackPartitions=r._stackPartitions,f.slicePartitions=r._slicePartitions,f.subdivisions=r._subdivisions,n.defined(t)?(s.Cartesian3.clone(r._radii,f.radii),t._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(f),t):(f.radius=r._radii.x,new p(f))},p.createGeometry=function(e){return m.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=p.unpack(e,i)),p.createGeometry(e)}});