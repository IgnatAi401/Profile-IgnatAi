import{i as e,n as t,r as n,t as r}from"./Triangle-Wdq_YMCd.js";var i=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,a=`
precision highp float;
uniform vec2 uSize;
uniform float uDpr;
uniform vec2 uStart;
uniform vec2 uDir;
uniform float uLength;
uniform float uSigma;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}
float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  mat2 turn = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    sum += amp * noise(p);
    p = turn * p * 2.03 + 17.1;
    amp *= 0.5;
  }
  return sum;
}
// A round star of radius r (CSS px) somewhere in each cell, with a chance
// of density; returns its light at p.
float stars(vec2 p, float cell, float density, float r, float seed) {
  vec2 id = floor(p / cell);
  float roll = hash(id + seed);
  if (roll > density) return 0.0;
  vec2 at = (id + 0.25 + 0.5 * vec2(hash(id + seed + 3.7), hash(id + seed + 9.1))) * cell;
  float d = length(p - at);
  float size = r * (0.6 + 0.8 * hash(id + seed + 5.3));
  return exp(-d * d / (size * size)) * (0.35 + 0.65 * hash(id + seed + 7.9));
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uSize.y * uDpr - gl_FragCoord.y) / uDpr;
  vec2 rel = p - uStart;
  float along = dot(rel, uDir) / uLength;
  float across = (rel.x * uDir.y - rel.y * uDir.x) / uSigma;
  vec2 q = vec2(along * uLength / uSigma, across);

  // Ragged edges: the centre line wanders and the width breathes.
  vec2 warp = vec2(fbm(q * 0.3 + 3.1), fbm(q * 0.3 + 7.7)) - 0.5;
  float edge = across + warp.y * 1.2 + (fbm(q * vec2(0.12, 0.3) + 1.3) - 0.5) * 1.4;
  float fade = smoothstep(0.02, 0.22, along) * (1.0 - smoothstep(0.74, 1.0, along));

  float body = exp(-edge * edge * 0.35);
  float core = exp(-edge * edge * 1.8);
  float clouds = smoothstep(0.32, 0.82, fbm(q * vec2(0.5, 1.0) + warp * 1.8));
  vec2 b = vec2((along - 0.2) * uLength / uSigma / 2.4, edge / 1.3);
  float bulge = exp(-dot(b, b));
  float light = fade * (0.24 * body + 0.7 * core * (0.35 + clouds) + 0.7 * bulge * (0.45 + clouds));

  // The Great Rift, a dark lane wandering along the bright centre, and finer
  // dust filaments everywhere.
  float lane = edge - 0.1 - 0.28 * sin(along * 8.0 + 1.0) - (fbm(q * 0.22 + 9.0) - 0.5) * 0.9;
  float rift = exp(-lane * lane / 0.12)
    * smoothstep(0.34, 0.66, fbm(q * vec2(0.7, 2.0) + warp * 2.2 + 4.0))
    * smoothstep(0.08, 0.26, along) * (1.0 - smoothstep(0.62, 0.84, along));
  light *= (1.0 - 0.85 * rift) * (0.7 + 0.3 * smoothstep(0.28, 0.72, fbm(q * vec2(1.4, 3.2) + warp * 3.0)));

  // Violet and blue drift along the band; the brightest clouds pale to
  // lavender and the bulge low on the horizon takes a little pink.
  float hue = clamp(smoothstep(0.3, 0.7, fbm(q * 0.2 + 20.0)) * 0.8 + along * 0.8 - 0.12, 0.0, 1.0);
  vec3 color = mix(vec3(0.56, 0.34, 0.98), vec3(0.26, 0.5, 1.0), hue);
  color = mix(color, vec3(0.86, 0.8, 1.0), clamp(core * clouds * 0.75, 0.0, 1.0));
  color = mix(color, vec3(1.0, 0.72, 0.96), bulge * 0.45);
  vec3 rgb = color * light * 0.78;

  // Star dust packs into the clouds and thins out toward the edges.
  float crowd = fade * (0.05 * body + core * (0.12 + 0.55 * clouds) + bulge * 0.4) * (1.0 - 0.7 * rift);
  float dust = stars(p, 2.6, crowd * 0.55, 0.55, 0.0) * 0.7
    + stars(p, 5.3, crowd * 0.35 + 0.004, 0.75, 31.0)
    + stars(p, 11.0, crowd * 0.18 + 0.006, 0.9, 67.0) * 1.3;
  rgb += mix(color, vec3(0.92, 0.94, 1.0), 0.6) * dust * 0.85;

  rgb = 1.0 - exp(-rgb * 1.25);
  rgb = max(rgb + (hash(gl_FragCoord.xy) - 0.5) / 255.0, 0.0);
  // Premultiplied light over the sky; Safari mishandles straight alpha and
  // would blow the faint halo and the dither up to full brightness.
  gl_FragColor = vec4(rgb, clamp(max(rgb.r, max(rgb.g, rgb.b)), 0.0, 1.0));
}
`;function o(o){let s,c,l,u=null,d=()=>{s=new n({canvas:o,alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0});let u=s.gl;c=new e(u,{vertex:i,fragment:a,transparent:!1,depthTest:!1,uniforms:{uSize:{value:[1,1]},uDpr:{value:1},uStart:{value:[0,0]},uDir:{value:[1,0]},uLength:{value:1},uSigma:{value:1}}}),l=new t(u,{geometry:new r(u),program:c})},f=(e,t,n,r)=>{if(u={band:e,width:t,height:n,dpr:r},s.gl.isContextLost())return;s.dpr=r,s.setSize(t,n);let i=c.uniforms;i.uSize.value=[t,n],i.uDpr.value=r,i.uStart.value=[e.ax,e.ay],i.uDir.value=[e.dx,e.dy],i.uLength.value=e.length,i.uSigma.value=e.sigma,s.render({scene:l})},p=e=>e.preventDefault(),m=()=>{d(),u&&f(u.band,u.width,u.height,u.dpr)};return o.addEventListener(`webglcontextlost`,p),o.addEventListener(`webglcontextrestored`,m),d(),{draw:f,dispose(){o.removeEventListener(`webglcontextlost`,p),o.removeEventListener(`webglcontextrestored`,m),s.gl.getExtension(`WEBGL_lose_context`)?.loseContext()}}}export{o as createMilkyWay};