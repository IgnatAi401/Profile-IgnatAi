import{a as e,d as t,f as n,i as r,l as i,n as a,o,p as s,r as c,s as l,t as u,u as d}from"./orbits-BdXiekh6.js";import{a as f,i as p,n as m,r as h,t as g}from"./Triangle-Wdq_YMCd.js";var _=new Uint8Array(4);function v(e){return(e&e-1)==0}var y=1,b=class{constructor(e,{image:t,target:n=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:i=e.RGBA,internalFormat:a=i,wrapS:o=e.CLAMP_TO_EDGE,wrapT:s=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:l=n===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:u=l?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:d=e.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:p=4,flipY:m=n==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:h=0,level:g=0,width:_,height:v=_,length:b=1}={}){this.gl=e,this.id=y++,this.image=t,this.target=n,this.type=r,this.format=i,this.internalFormat=a,this.minFilter=u,this.magFilter=d,this.wrapS=o,this.wrapT=s,this.wrapR=c,this.generateMipmaps=l,this.premultiplyAlpha=f,this.unpackAlignment=p,this.flipY=m,this.anisotropy=Math.min(h,this.gl.renderer.parameters.maxAnisotropy),this.level=g,this.width=_,this.height=v,this.length=b,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){let t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension(`EXT_texture_filter_anisotropic`).TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,this.level,this.internalFormat,this.format,this.type,this.image[e]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let e=0;e<this.image.length;e++)this.gl.compressedTexImage2D(this.target,e,this.internalFormat,this.image[e].width,this.image[e].height,0,this.image[e].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!v(this.image.width)||!v(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,_);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,_);this.store.image=this.image}}},x=Math.PI/180,ee=[{key:`soho`,en:`SOHO`,zh:`SOHO`,color:`#ffc37a`},{key:`jwst`,en:`JWST`,zh:`韦伯望远镜`,color:`#d9b8ff`},{key:`euclid`,en:`Euclid`,zh:`欧几里得`,color:`#8fe3ff`}],te=[{key:`lro`,en:`LRO`,zh:`LRO`,color:`#ffe08a`},{key:`danuri`,en:`Danuri`,zh:`Danuri`,color:`#8ff0c8`}];function ne(e,t,n,r){let i=e.vectors.tracks[t],a=e.vectors.step;if(!i)return!1;let o=(n-e.start)/a,s=Math.floor(o);if(s<0||(s+1)*6>=i.length)return!1;let c=o-s,[l,u,d,f]=[2*c**3-3*c**2+1,c**3-2*c**2+c,-2*c**3+3*c**2,c**3-c**2],p=a/1e3;for(let e=0;e<3;e++){let t=i[s*6+e],n=i[(s+1)*6+e],a=i[s*6+3+e]*p,o=i[(s+1)*6+3+e]*p;r[e]=l*t+u*a+d*n+f*o}return!0}function S(e,t,n,r){let i=e.lunar.tracks[t],a=e.lunar.step;if(!i)return!1;let o=Math.round((n-e.start)/a);if(o<0||o*7>=i.length)return!1;let[s,c,l,u,d,f,p]=i.slice(o*7,o*7+7),m=(f+p*((n-e.start-o*a)/1e3))*x,h=m+c*Math.sin(m);for(let e=0;e<4;e++)h-=(h-c*Math.sin(h)-m)/(1-c*Math.cos(h));let g=s*(Math.cos(h)-c),_=s*Math.sqrt(1-c*c)*Math.sin(h),v=Math.cos(d*x),y=Math.sin(d*x),b=Math.cos(u*x),ee=Math.sin(u*x),te=Math.cos(l*x),ne=Math.sin(l*x),S=g*v-_*y,re=g*y+_*v;return r[0]=S*b-re*te*ee,r[1]=S*ee+re*te*b,r[2]=re*ne,!0}function re(e,t,n){let r=e.lunar.tracks[t];return 360/r[Math.min(r.length/7-1,Math.max(0,Math.round((n-e.start)/e.lunar.step)))*7+6]*1e3}var C=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ie=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255),ae=u.map(({color:e})=>ie(e)),oe=u.findIndex(({kind:e})=>e===`gnss`),se=[1.35,2.4,2.4,2.7,2.7,2.7,2.7],w=40,ce=[0,.07,.07,.09,.09,.09,.09],T=[0,2.6,2.6,3.4,3.4,3.4,3.4],le=[{en:`San Francisco`,zh:`旧金山`,latitude:37.77,longitude:-122.42},{en:`São Paulo`,zh:`圣保罗`,latitude:-23.55,longitude:-46.63},{en:`London`,zh:`伦敦`,latitude:51.51,longitude:-.13},{en:`Nairobi`,zh:`内罗毕`,latitude:-1.29,longitude:36.82},{en:`Shanghai`,zh:`上海`,latitude:31.23,longitude:121.47},{en:`Sydney`,zh:`悉尼`,latitude:-33.87,longitude:151.21}],ue=10*Math.PI/180,de=864e5,fe=.74,pe=1737.4,me=1491500,he=1501500,ge={gps:23.5,glonass:20,galileo:20.5,beidou:21,beidouHigh:10},E=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,D=`#version 300 es
precision highp float;
uniform vec2 uSize;
uniform float uDpr;
uniform vec2 uCenter;
uniform float uScale;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uToward;
uniform vec3 uSun;
uniform float uGmst;
uniform float uEarthR;
uniform float uStarZoom;
uniform sampler2D uLand;
uniform float uLandReady;
uniform vec3 uMoon;
uniform vec3 uMoonLook;
uniform mat3 uMoonFrame;
uniform vec2 uSunGlow;
uniform vec3 uInset;
uniform float uInsetAlpha;
out vec4 fragColor;

#define PI 3.14159265359
#define TAU 6.28318530718

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float hash3(vec3 p) {
  p = fract(p * 0.3183099 + 0.1) * 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise3(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y),
    f.z
  );
}
float fbm(vec3 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    sum += amp * noise3(p);
    p = p * 2.07 + vec3(1.7, 9.2, 3.1);
    amp *= 0.5;
  }
  return sum;
}
float stars(vec2 p, float cell, float density, float r, float seed) {
  vec2 id = floor(p / cell);
  if (hash(id + seed) > density) return 0.0;
  vec2 at = (id + 0.2 + 0.6 * vec2(hash(id + seed + 3.7), hash(id + seed + 9.1))) * cell;
  float d = length(p - at);
  float size = r * (0.6 + 0.8 * hash(id + seed + 5.3));
  return exp(-d * d / (size * size)) * (0.3 + 0.7 * hash(id + seed + 7.9));
}
vec4 over(vec4 top, vec4 under) {
  return vec4(top.rgb + under.rgb * (1.0 - top.a), top.a + under.a * (1.0 - top.a));
}
// A unit disc point to a world-space normal on the camera-facing hemisphere.
vec3 sphereNormal(vec2 q) {
  float z = sqrt(max(0.0, 1.0 - dot(q, q)));
  return normalize(uRight * q.x + uUp * q.y + uToward * z);
}
float gridLine(float value, float spacing) {
  float d = abs(fract(value / spacing + 0.5) - 0.5) * spacing;
  return 1.0 - smoothstep(0.0, fwidth(value) * 1.3, d);
}

vec4 earth(vec2 p) {
  float radius = uEarthR * uScale;
  vec2 q = (p - uCenter) / radius * vec2(1.0, -1.0);
  float r = length(q);
  float aa = 1.0 / radius;
  vec3 limb = normalize(uRight * q.x + uUp * q.y);
  float sunSide = dot(limb, uSun);
  float dusk = exp(-sunSide * sunSide * 10.0);
  vec3 air = mix(vec3(0.3, 0.52, 1.0), vec3(1.0, 0.56, 0.36), dusk * 0.7);

  // Scattered light around the limb, strongest on the day side.
  float fall = max(radius * 0.07, 2.2);
  float halo = exp(-max(r - 1.0, 0.0) * radius / fall) * smoothstep(1.0 - aa, 1.0 + aa, r);
  vec4 glow = vec4(air * halo * (0.08 + 0.9 * smoothstep(-0.35, 0.45, sunSide)), 0.0);
  glow.a = clamp(max(glow.r, max(glow.g, glow.b)), 0.0, 1.0);
  if (r > 1.0 + aa) return glow;

  vec3 n = sphereNormal(q);
  float c = cos(uGmst);
  float s = sin(uGmst);
  vec3 e = vec3(c * n.x + s * n.y, -s * n.x + c * n.y, n.z);
  float lon = atan(e.y, e.x);
  float lat = asin(clamp(e.z, -1.0, 1.0));
  vec2 uv = vec2(lon / TAU + 0.5, 0.5 + lat / PI);
  // Take derivatives from whichever longitude parametrisation has no seam
  // here, so mipmapping does not draw a line down the antimeridian.
  float shifted = fract(uv.x + 0.5);
  float dxu = abs(dFdx(uv.x)) < abs(dFdx(shifted)) ? dFdx(uv.x) : dFdx(shifted);
  float dyu = abs(dFdy(uv.x)) < abs(dFdy(shifted)) ? dFdy(uv.x) : dFdy(shifted);
  vec4 tex = textureGrad(uLand, uv, vec2(dxu, dFdx(uv.y)), vec2(dyu, dFdy(uv.y))) * uLandReady;
  float land = tex.r;
  float lines = tex.g;
  float shelf = tex.b;

  float alat = abs(lat) * 180.0 / PI;
  float n1 = fbm(e * 3.2);
  float n2 = fbm(e * 11.0 + 4.0);
  vec3 forest = vec3(0.13, 0.27, 0.19);
  vec3 grass = vec3(0.33, 0.39, 0.23);
  vec3 desert = vec3(0.69, 0.57, 0.41);
  vec3 tundra = vec3(0.42, 0.44, 0.41);
  vec3 ice = vec3(0.9, 0.94, 1.0);
  float dry = exp(-pow((alat - 23.0) / 10.0, 2.0)) * smoothstep(0.38, 0.62, n1 + 0.12);
  vec3 ground = mix(forest, grass, smoothstep(0.3, 0.7, n1));
  ground = mix(ground, desert, dry);
  ground = mix(ground, tundra, smoothstep(48.0, 64.0, alat + n2 * 6.0));
  ground = mix(ground, ice, smoothstep(63.0, 72.0, alat + n2 * 10.0));
  ground *= 0.84 + 0.32 * n2;
  vec3 ocean = mix(vec3(0.015, 0.06, 0.19), vec3(0.04, 0.2, 0.36), shelf * (1.0 - land) * 0.85);
  ocean = mix(ocean, ice * 0.85, smoothstep(76.0, 82.0, alat + n2 * 6.0));
  vec3 surface = mix(ocean, ground, land);

  float mu = dot(n, uSun);
  float day = smoothstep(-0.1, 0.22, mu);
  vec3 lit = surface * (0.18 + 1.05 * pow(max(mu, 0.0), 0.8));
  vec3 halfway = normalize(uSun + uToward);
  lit += vec3(1.0, 0.9, 0.78) * pow(max(dot(n, halfway), 0.0), 70.0) * (1.0 - land) * 0.7;
  // Night: coastlines and borders glow faintly, like a chart under a lamp.
  vec3 dark = vec3(0.01, 0.016, 0.04) + surface * 0.05 + vec3(0.36, 0.42, 0.95) * lines * 0.3;
  vec3 color = mix(dark, lit, day);
  float grid = max(gridLine(lat * 180.0 / PI, 30.0), gridLine(lon * 180.0 / PI, 30.0));
  color += vec3(0.55, 0.62, 1.0) * grid * mix(0.09, 0.035, day);
  color += vec3(0.95, 0.42, 0.2) * exp(-mu * mu * 90.0) * 0.1;
  // Looking through more air toward the limb.
  float z = sqrt(max(0.0, 1.0 - r * r));
  float rim = pow(1.0 - z, 2.4);
  color = mix(color, air * (0.12 + 0.9 * day), rim * 0.65);

  float alpha = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
  return over(vec4(color * alpha, alpha), glow);
}

// A lit Moon disc at geom = (x, y, radius px); look = (edge blur px, opacity).
vec4 moonDisc(vec2 p, vec3 geom, vec2 look) {
  float radius = geom.z;
  float blur = look.x;
  vec2 q = (p - geom.xy) / radius * vec2(1.0, -1.0);
  float r = length(q);
  float soft = max(blur, 0.8) / radius;
  if (r > 1.0 + soft * 2.0 + blur * 0.25) return vec4(0.0);
  vec3 n = sphereNormal(q / max(r, 1.0));
  vec3 local = uMoonFrame * n;
  float maria = smoothstep(0.48, 0.62, fbm(local * 2.2 + 3.0));
  float grain = fbm(local * 9.0);
  vec3 albedo = mix(vec3(0.78, 0.77, 0.8), vec3(0.42, 0.42, 0.47), maria) * (0.82 + 0.3 * grain);
  float mu = dot(n, uSun);
  vec3 color = albedo * (smoothstep(-0.04, 0.12, mu) * (0.25 + 0.85 * max(mu, 0.0))) + albedo * 0.025;
  float alpha = 1.0 - smoothstep(1.0 - soft, 1.0 + soft, r);
  // As a backdrop the Moon is out of focus and haloed.
  float halo = exp(-max(r - 1.0, 0.0) * 3.0) * blur / 14.0 * 0.35;
  vec4 disc = vec4(color * alpha, alpha) * look.y;
  return over(disc, vec4(vec3(0.75, 0.74, 0.86) * halo, halo) * look.y);
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uSize.y * uDpr - gl_FragCoord.y) / uDpr;
#ifdef INSET
  // The lunar close-up: a dark lens with the Moon filling most of it.
  float lens = 1.0 - smoothstep(uInset.z - 1.0, uInset.z + 0.5, length(p - uInset.xy));
  vec4 inset = over(moonDisc(p, vec3(uInset.xy, uInset.z * ${fe}), vec2(0.0, 1.0)), vec4(vec3(0.018, 0.02, 0.04) * lens, lens * 0.94));
  fragColor = inset * uInsetAlpha;
  return;
#endif
  // Stars drift outward a little as the camera pulls back.
  vec2 sp = uCenter + (p - uCenter) * uStarZoom;
  float light = stars(sp, 4.0, 0.05, 0.6, 0.0) * 0.6
    + stars(sp, 9.0, 0.05, 0.8, 21.0) * 0.8
    + stars(sp, 23.0, 0.08, 1.05, 57.0);
  vec3 sky = vec3(0.82, 0.85, 1.0) * light * 0.5;
  float diagonal = length(uSize);
  float d = length(p - uSunGlow) / diagonal;
  sky += vec3(1.0, 0.72, 0.42) * (0.34 * exp(-d * 6.5) + 0.12 * exp(-d * 2.2));
  sky = 1.0 - exp(-sky * 1.15);
  vec4 color = vec4(sky, clamp(max(sky.r, max(sky.g, sky.b)), 0.0, 1.0));

  vec4 planet = earth(p);
  vec4 satellite = moonDisc(p, uMoon, uMoonLook.xy);
  if (uMoonLook.z > 0.5) color = over(satellite, over(planet, color));
  else color = over(planet, over(satellite, color));
  color.rgb += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  fragColor = clamp(color, 0.0, 1.0);
}
`,O=`
uniform vec2 uSize;
uniform vec2 uCenter;
uniform float uScale;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uToward;
uniform float uEarthR;
float hiddenBehindEarth(vec3 p) {
  vec2 plane = vec2(dot(p, uRight), dot(p, uUp));
  float r2 = uEarthR * uEarthR;
  return (dot(p, uToward) < 0.0 && dot(plane, plane) < r2) || dot(p, p) < r2 ? 1.0 : 0.0;
}
vec4 project(vec3 p) {
  vec2 px = uCenter + vec2(dot(p, uRight), -dot(p, uUp)) * uScale;
  return vec4(px.x / uSize.x * 2.0 - 1.0, 1.0 - px.y / uSize.y * 2.0, 0.0, 1.0);
}
`,_e=`#version 300 es
in vec3 position;
in float group;
uniform float uDpr;
uniform vec3 uSun;
uniform float uAlpha[7];
uniform vec3 uColor[7];
uniform float uPointSize[7];
uniform float uSizeScale;
out vec4 vColor;
${O}
void main() {
  int g = int(group + 0.5);
  gl_Position = project(position);
  // Satellites inside Earth's shadow cylinder are in eclipse: dimmed.
  float along = dot(position, uSun);
  float eclipse = along < 0.0 && dot(position, position) - along * along < 1.0 ? 0.35 : 1.0;
  float alpha = uAlpha[g] * (1.0 - hiddenBehindEarth(position));
  // Starlink's shell in front of the planet reads as haze: keep the
  // continents visible through it.
  vec2 plane = vec2(dot(position, uRight), dot(position, uUp));
  if (g == 0 && dot(plane, plane) < uEarthR * uEarthR) alpha *= 0.42;
  vColor = vec4(uColor[g] * eclipse, alpha);
  gl_PointSize = alpha > 0.0 ? uPointSize[g] * uSizeScale * uDpr : 0.0;
}
`,k=`#version 300 es
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = vColor.a * (1.0 - smoothstep(0.55, 1.0, d));
  fragColor = vec4(vColor.rgb * a, a);
}
`,ve=`#version 300 es
in vec3 position;
in vec3 next;
in float side;
in float fade;
in float group;
uniform float uAlpha[7];
uniform vec3 uColor[7];
uniform float uWidth[7];
out vec4 vColor;
out float vHidden;
out float vSide;
${O}
vec2 toPx(vec3 p) {
  return uCenter + vec2(dot(p, uRight), -dot(p, uUp)) * uScale;
}
void main() {
  int g = int(group + 0.5);
  vec2 here = toPx(position);
  vec2 along = toPx(next) - here;
  float length2 = dot(along, along);
  along = length2 > 1e-8 ? along / sqrt(length2) : vec2(1.0, 0.0);
  float width = uWidth[g] * mix(1.0, 0.18, fade);
  vec2 px = here + vec2(-along.y, along.x) * side * width * 0.5;
  gl_Position = vec4(px.x / uSize.x * 2.0 - 1.0, 1.0 - px.y / uSize.y * 2.0, 0.0, 1.0);
  vHidden = hiddenBehindEarth(position);
  vSide = side;
  float head = pow(1.0 - fade, 5.0);
  vColor = vec4(mix(uColor[g], vec3(1.0), head * 0.55), uAlpha[g] * pow(1.0 - fade, 1.7));
}
`,A=`#version 300 es
precision highp float;
in vec4 vColor;
in float vHidden;
in float vSide;
out vec4 fragColor;
void main() {
  if (vHidden > 0.5) discard;
  float a = vColor.a * (1.0 - smoothstep(0.25, 1.0, abs(vSide)));
  fragColor = vec4(vColor.rgb * a, a);
}
`;function ye(e){let t=[...e].sort((e,t)=>e[0]-t[0]||e[1]-t[1]),n=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),r=e=>{let t=[];for(let r of e){for(;t.length>=2&&n(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t.pop(),t};return[...r(t),...r([...t].reverse())]}function j(_,v){let y=new h({canvas:_,alpha:!0,premultipliedAlpha:!0,antialias:!0,webgl:2});if(!y.isWebgl2)throw Error(`WebGL 2 is unavailable`);let x=y.gl;x.clearColor(0,0,0,0);let O=()=>({uSize:{value:[1,1]},uDpr:{value:1},uCenter:{value:[0,0]},uScale:{value:1},uRight:{value:[0,1,0]},uUp:{value:[0,0,1]},uToward:{value:[1,0,0]},uSun:{value:[1,0,0]},uEarthR:{value:1}}),j=new b(x,{image:new Uint8Array(4),width:1,height:1,generateMipmaps:!1,minFilter:x.LINEAR}),be=new p(x,{vertex:E,fragment:D,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{...O(),uGmst:{value:0},uStarZoom:{value:1},uLand:{value:j},uLandReady:{value:0},uMoon:{value:[0,0,1]},uMoonLook:{value:[0,0,0]},uMoonFrame:{value:[1,0,0,0,1,0,0,0,1]},uSunGlow:{value:[0,0]}}}),xe=new p(x,{vertex:E,fragment:D.replace(`#version 300 es
`,`#version 300 es
#define INSET
`),transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{...O(),uMoonFrame:{value:[1,0,0,0,1,0,0,0,1]},uInset:{value:[0,0,1]},uInsetAlpha:{value:0}}}),M=()=>({...O(),uAlpha:{value:Array.from({length:7},()=>0)},uColor:{value:ae}}),Se=new p(x,{vertex:_e,fragment:k,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{...M(),uPointSize:{value:se},uSizeScale:{value:1}}}),Ce=new p(x,{vertex:ve,fragment:A,transparent:!0,depthTest:!1,depthWrite:!1,cullFace:!1,uniforms:{...M(),uWidth:{value:T}}}),we=new m(x,{geometry:new g(x),program:be}),Te=new m(x,{geometry:new g(x),program:xe}),N=null,Ee=null,De=null,P=null,F=new Float32Array,I=new Float32Array,Oe=new Float32Array,L=[],R=v.getContext(`2d`),z=document.createElement(`canvas`),B=z.getContext(`2d`),ke={width:1,height:1,dpr:1},Ae=getComputedStyle(v.isConnected?v:document.documentElement).getPropertyValue(`--font-mono`).trim()||`monospace`,V=e=>{P=e,F=new Float32Array(e.count*3);let t=new Float32Array(e.count);e.group.forEach((e,n)=>t[n]=e),Ee=new m(x,{mode:x.POINTS,program:Se,geometry:new f(x,{position:{size:3,data:F,usage:x.DYNAMIC_DRAW},group:{size:1,data:t}})}),L.length=0;for(let t=0;t<e.count;t++)ce[e.group[t]]>0&&L.push(t);let n=L.length*w*2;I=new Float32Array(n*3),Oe=new Float32Array(n*3);let r=new Float32Array(n),i=new Float32Array(n),a=new Float32Array(n),o=new Uint16Array(L.length*(w-1)*6);L.forEach((t,n)=>{for(let s=0;s<w;s++){let c=(n*w+s)*2;r.set([-1,1],c),i.fill(s/(w-1),c,c+2),a.fill(e.group[t],c,c+2),s!==w-1&&o.set([c,c+1,c+2,c+1,c+3,c+2],(n*(w-1)+s)*6)}}),De=new m(x,{program:Ce,geometry:new f(x,{position:{size:3,data:I,usage:x.DYNAMIC_DRAW},next:{size:3,data:Oe,usage:x.DYNAMIC_DRAW},side:{size:1,data:r},fade:{size:1,data:i},group:{size:1,data:a},index:{data:o}})})},je=e=>{j.generateMipmaps=!0,j.minFilter=x.LINEAR_MIPMAP_LINEAR,j.image=e,j.needsUpdate=!0,j.update(),be.uniforms.uLandReady.value=1},Me=(e,t,n)=>{ke={width:e,height:t,dpr:n},y.dpr=n,y.setSize(e,t),v.width=Math.round(e*n),v.height=Math.round(t*n),z.width=v.width,z.height=v.height},Ne=(f,p,m)=>{if(x.isContextLost())return;let{width:h,height:g,dpr:_}=ke,{time:v}=f,b=s(v),se=Math.atan2(b[1],b[0])+f.azimuth,T=[Math.cos(f.elevation)*Math.cos(se),Math.cos(f.elevation)*Math.sin(se),Math.sin(f.elevation)],E=[-Math.sin(se),Math.cos(se),0],D=[T[1]*E[2]-T[2]*E[1],T[2]*E[0]-T[0]*E[2],T[0]*E[1]-T[1]*E[0]],O=[h/2,g/2],_e=Math.min(h/1.6,g)/2,k=l(v),ve=Math.max(18,Math.abs(C(k,E))*_e/(.7*h*.5),Math.abs(C(k,D))*_e/(.62*g*.5)),A=Math.exp(Math.log(f.zoom)*(1-f.fitMoon)+Math.log(ve)*f.fitMoon),j=_e/A;if(!Number.isFinite(j)||j<=0)return;let M=Math.max(1,5/j),V=e=>[O[0]+C(e,E)*j,O[1]-C(e,D)*j],je=e=>{let t=C(e,E),n=C(e,D);return C(e,T)<0&&t*t+n*n<M*M||C(e,e)<M*M};for(let e of[be,xe,Se,Ce]){let t=e.uniforms;t.uSize.value=[h,g],t.uDpr.value=_,t.uCenter.value=O,t.uScale.value=j,t.uRight.value=E,t.uUp.value=D,t.uToward.value=T,t.uSun.value=b,t.uEarthR.value=M}let[Me,Ne]=V(k),Pe=Math.max(Math.abs(Me-O[0])/(O[0]-34),Math.abs(Ne-O[1])/(O[1]-34)),Fe=Math.min(1,Math.max(0,(Pe-1)/1.4)),Ie=Pe>1?1/Pe:1,H=[O[0]+(Me-O[0])*Ie,O[1]+(Ne-O[1])*Ie],U=Fe*Fe*(3-2*Fe),W=Math.max(c*j,6.5)*(1-U)+24*U,G=k.map(e=>-e/Math.hypot(...k)),K=[-G[1],G[0],0].map(e=>e/Math.hypot(G[0],G[1])),Le=[G[1]*K[2]-G[2]*K[1],G[2]*K[0]-G[0]*K[2],G[0]*K[1]-G[1]*K[0]],q=be.uniforms;q.uGmst.value=n(v),q.uStarZoom.value=(A/3.7)**-.06,q.uMoon.value=[H[0],H[1],W],q.uMoonLook.value=[U*10,1-U*.45,+(C(k,T)>0)],q.uMoonFrame.value=[G[0],K[0],Le[0],G[1],K[1],Le[1],G[2],K[2],Le[2]],xe.uniforms.uMoonFrame.value=q.uMoonFrame.value;let J=Math.min(68,g*.17,h*.15),Y=[h-J-20,J+20],X=f.lunar*(1-U)*!!N;xe.uniforms.uInset.value=[Y[0],Y[1],J],xe.uniforms.uInsetAlpha.value=X;let Z=[C(b,E),-C(b,D)],Re=Math.hypot(Z[0],Z[1])||1,ze=Math.hypot(h,g)*.56;q.uSunGlow.value=[O[0]+Z[0]/Re*ze,O[1]+Z[1]/Re*ze];let Be=u.map(({kind:e})=>e===`leo`?f.leo:f.gnss),Ve=Math.min(1,Math.max(0,(A-12)/18));if(Se.uniforms.uAlpha.value=Be.map((e,t)=>e*(t<oe?1-Ve:1)*(t===0?.82:1)),Se.uniforms.uSizeScale.value=1+.25*Math.min(1,Math.max(0,(3.7-A)/2.2))-.2*Ve,Ce.uniforms.uAlpha.value=u.map(({kind:e},t)=>ce[t]===0?0:e===`gnss`?f.trails*f.gnss*.9:f.trails*f.leo*.75*(1-Ve)),y.render({scene:we}),P&&Ee&&De&&(t(P,v,F),Ee.geometry.attributes.position.needsUpdate=!0,f.trails>.01&&(L.forEach((e,t)=>{let n=i(P,e)*ce[P.group[e]],r=t*w*6;for(let t=0;t<w;t++)d(P,e,v-n*t/(w-1),I,r+t*6),I.copyWithin(r+t*6+3,r+t*6,r+t*6+3);for(let e=0;e<w;e++){let t=r+e*6,n=e<w-1?t+6:t-6,i=e<w-1?1:-1;for(let e=0;e<3;e++){let r=i>0?I[n+e]:2*I[t+e]-I[n+e];Oe[t+e]=r,Oe[t+3+e]=r}}}),De.geometry.attributes.position.needsUpdate=!0,De.geometry.attributes.next.needsUpdate=!0,y.render({scene:De,clear:!1})),y.render({scene:Ee,clear:!1})),X>.01&&y.render({scene:Te,clear:!1}),!R)return;R.setTransform(_,0,0,_,0,0),R.clearRect(0,0,h,g),R.lineCap=`round`;let Q=(e,t,n,r,i=`left`)=>{if(r<=.01)return;R.font=`500 10px ${Ae}`;let a=e.toUpperCase(),o=R.measureText(a).width,s=i===`left`?t:i===`right`?t-o:t-o/2,c=Math.min(0,h-10-(s+o))+Math.max(0,10-s);R.textAlign=i,R.fillStyle=`rgba(223, 218, 245, ${.78*r})`,R.fillText(a,t+c,Math.min(g-8,Math.max(14,n)))},He=M*j;if(P){let t=f.receiver*f.gnss*(1-Ve),n=p%2200/2200,i=[];R.lineWidth=.8;for(let a of le){let o=e(a.latitude,a.longitude,v),s=C(o,T),c=t*Math.min(1,Math.max(0,s*5));if(c<=.01)continue;let l=t*Math.max(0,s)**8,[u,d]=V(o),f=0;for(let e=0;e<P.count;e++){if(P.group[e]<oe||r(o,F,e*3)<ue)continue;f++;let t=[F[e*3],F[e*3+1],F[e*3+2]];if(l<=.01||je(t))continue;let[n,i]=V(t);if(!Number.isFinite(n+i+u+d))continue;let[a,s,c]=ae[P.group[e]],p=R.createLinearGradient(u,d,n,i);p.addColorStop(0,`rgba(${a*255}, ${s*255}, ${c*255}, ${.03*l})`),p.addColorStop(1,`rgba(${a*255}, ${s*255}, ${c*255}, ${.3*l})`),R.strokeStyle=p,R.beginPath(),R.moveTo(u,d),R.lineTo(n,i),R.stroke()}R.fillStyle=`rgba(143, 240, 210, ${c})`,R.beginPath(),R.arc(u,d,2.2,0,Math.PI*2),R.fill(),l>.05&&(R.strokeStyle=`rgba(143, 240, 210, ${l*(1-n)})`,R.beginPath(),R.arc(u,d,2.2+n*9,0,Math.PI*2),R.stroke());let p=m.zh?a.zh:a.en;i.push({text:l>.05?`${p} · ${f} SV`:p,x:u+8,y:d-6,opacity:c*(.45+.55*Math.min(1,l*3)),rank:l})}R.font=`500 10px ${Ae}`;let a=[];for(let e of i.sort((e,t)=>t.rank-e.rank)){let t=[e.x-2,e.y-11,e.x+R.measureText(e.text.toUpperCase()).width+2,e.y+3];a.some(([e,n,r,i])=>t[0]<r&&t[2]>e&&t[1]<i&&t[3]>n)||(a.push(t),Q(e.text,e.x,e.y,e.opacity))}}let Ue=f.moonPath*(1-U);if(Ue>.01){R.setLineDash([1.5,5]),R.strokeStyle=`rgba(200, 189, 255, ${.35*Ue})`,R.lineWidth=1,R.beginPath();for(let e=0;e<=96;e++){let[t,n]=V(l(v+(e/96-.5)*27.32*de));e?R.lineTo(t,n):R.moveTo(t,n)}R.stroke(),R.setLineDash([])}let{illuminated:We,waxing:Ge,distance:Ke}=o(v),qe=h<460,Je=m.phase(Math.round(We*100),Ge),Ye=U>.5||A>150?m.moon:qe?`${m.moon} · ${Je}`:`${m.moon} · ${Math.round(Ke*a).toLocaleString(`en-US`)} KM · ${Je}`,Xe=H[0]>h*(X>.01?.3:.62)?`right`:`left`;Q(Ye,H[0]+(Xe===`right`?-1:1)*(W+8),H[1]-W*.4-4,(.55+.45*(1-U))*(1-f.deep),Xe),Q(m.earth,O[0]+He+9,O[1]+He+12,Math.min(1,Math.max(0,(A-20)/20)));let Ze=q.uSunGlow.value,Qe=Ze[0]-O[0],$e=Ze[1]-O[1],et=1/Math.max(Math.abs(Qe)/(O[0]-44),Math.abs($e)/(O[1]-26));Q(`☉ ${m.sun}`,O[0]+Qe*et,O[1]+$e*et,.7,Qe<0?`left`:`right`);let $=(e,t)=>{let[n,r,i]=ie(e);return`rgba(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(i*255)}, ${t})`},tt=(e,t,n,r,i)=>{R.shadowColor=$(r,.9*i),R.shadowBlur=8,R.fillStyle=$(r,i),R.beginPath(),R.arc(e,t,n,0,Math.PI*2),R.fill(),R.shadowBlur=0};if(f.deep>.01){let e=f.deep,t=[Z[0]/Re,Z[1]/Re],n=Math.hypot(h,g);R.setLineDash([2,6]),R.strokeStyle=`rgba(255, 214, 160, ${.22*e})`,R.lineWidth=1,R.beginPath(),R.moveTo(O[0]-t[0]*n,O[1]-t[1]*n),R.lineTo(O[0]+t[0]*n,O[1]+t[1]*n),R.stroke(),R.setLineDash([]);for(let[t,n,r]of[[me,m.l1,1],[he,m.l2,-1]]){let[i,o]=V(b.map(e=>r*e*t/a));R.strokeStyle=`rgba(255, 224, 190, ${.7*e})`,R.beginPath(),R.moveTo(i-4,o),R.lineTo(i+4,o),R.moveTo(i,o-4),R.lineTo(i,o+4),R.stroke(),Q(n,i,o+16,.8*e,`center`)}if(N){let t=[0,0,0];for(let{key:n,en:r,zh:i,color:o}of ee){if(!ne(N,n,v,t))continue;R.lineWidth=1.2;let s=null;for(let t=0;t<=42;t++){let r=[0,0,0];if(!ne(N,n,v-t*12*36e5,r))break;let i=V(r.map(e=>e/a));s&&(R.strokeStyle=$(o,.55*e*(1-t/42)),R.beginPath(),R.moveTo(s[0],s[1]),R.lineTo(i[0],i[1]),R.stroke()),s=i}let[c,l]=V(t.map(e=>e/a));tt(c,l,2.6,o,e);let u=Math.round(Math.hypot(t[0],t[1],t[2])).toLocaleString(`en-US`);Q(qe?m.zh?i:r:`${m.zh?i:r} · ${u} KM`,c+8,l-6,e,`left`)}}}let nt=-1;if(P&&f.spill>.01){let e=f.spill*f.gnss,t=0;R.save(),R.beginPath(),R.rect(0,0,h,g),R.moveTo(O[0]+He+1,O[1]),R.arc(O[0],O[1],He+1,0,Math.PI*2),X>.01&&(R.moveTo(Y[0]+J+3,Y[1]),R.arc(Y[0],Y[1],J+3,0,Math.PI*2)),R.clip(`evenodd`),R.globalCompositeOperation=`lighter`,B?.setTransform(1,0,0,1,0,0),B?.clearRect(0,0,z.width,z.height),B?.setTransform(_,0,0,_,0,0),B&&(B.globalCompositeOperation=`lighter`);let n=Math.hypot(h,g),r=n/j*1.2,i=[];for(let a=0;a<P.count;a++){let o=P.group[a];if(o<oe)continue;let s=[F[a*3],F[a*3+1],F[a*3+2]],c=Math.hypot(s[0],s[1],s[2]),l=u[o].key,d=(l===`beidou`&&c>6?ge.beidouHigh:ge[l])*(Math.PI/180),f=Math.asin(1/c),p=[k[0]-s[0],k[1]-s[1],k[2]-s[2]],m=Math.acos(-C(p,s)/(Math.hypot(p[0],p[1],p[2])*c)),h=u[o].color,g=V(s);m>f&&m<d&&(t++,i.push({from:g,color:h}));let _=s.map(e=>-e/c),v=Math.abs(_[2])<.9?[0,0,1]:[1,0,0],y=[_[1]*v[2]-_[2]*v[1],_[2]*v[0]-_[0]*v[2],_[0]*v[1]-_[1]*v[0]],b=Math.hypot(y[0],y[1],y[2]);y.forEach((e,t)=>y[t]/=b);let x=[_[1]*y[2]-_[2]*y[1],_[2]*y[0]-_[0]*y[2],_[0]*y[1]-_[1]*y[0]],ee=r*Math.cos(d),te=r*Math.sin(d),ne=ye([g,...Array.from({length:24},(e,t)=>{let n=t/24*Math.PI*2,[r,i]=[Math.cos(n)*te,Math.sin(n)*te];return V([0,1,2].map(e=>s[e]+_[e]*ee+y[e]*r+x[e]*i))})]);if(!B)continue;B.beginPath(),ne.forEach(([e,t],n)=>n?B.lineTo(e,t):B.moveTo(e,t)),B.closePath();let S=B.createRadialGradient(g[0],g[1],0,g[0],g[1],n),re=Math.hypot(O[0]-g[0],O[1]-g[1]);S.addColorStop(0,$(h,0)),S.addColorStop(Math.min(.9,re/n+.02),$(h,.009*e)),S.addColorStop(1,$(h,0)),B.fillStyle=S,B.fill()}if(B){let e=1-(1-Math.min(1,f.spill))**3,t=Math.hypot(Math.max(O[0],h-O[0]),Math.max(O[1],g-O[1])),n=Math.max(1,t*1.15*e),r=B.createRadialGradient(O[0],O[1],0,O[0],O[1],n);r.addColorStop(0,`rgba(0, 0, 0, 1)`),r.addColorStop(.72,`rgba(0, 0, 0, 1)`),r.addColorStop(1,`rgba(0, 0, 0, 0)`),B.globalCompositeOperation=`destination-in`,B.fillStyle=r,B.fillRect(0,0,h,g),B.globalCompositeOperation=`source-over`,R.drawImage(z,0,0,h,g)}for(let{from:t,color:n}of i){let r=H[0]-t[0],i=H[1]-t[1],a=Math.hypot(r,i);if(a<1)continue;let[o,s]=[r/a,i/a],c=a*1.25,l=Math.max(3,c*.02),u=[t[0]+o*c,t[1]+s*c],d=R.createLinearGradient(t[0],t[1],u[0],u[1]);d.addColorStop(0,$(n,0)),d.addColorStop(.3,$(n,.1*e)),d.addColorStop(.8,$(n,.32*e)),d.addColorStop(1,$(n,0)),R.fillStyle=d,R.beginPath(),R.moveTo(t[0],t[1]),R.lineTo(u[0]-s*l,u[1]+o*l),R.lineTo(u[0]+s*l,u[1]-o*l),R.closePath(),R.fill()}R.restore(),nt=t}if(N&&X>.01){let e=J*fe/pe,t=[Y[0]-H[0],Y[1]-H[1]],n=Math.hypot(t[0],t[1]);if(n>J+W+12){let e=t[0]/n,r=t[1]/n;R.setLineDash([2,4]),R.strokeStyle=`rgba(200, 189, 255, ${.35*X})`,R.lineWidth=1,R.beginPath(),R.moveTo(H[0]+e*(W+4),H[1]+r*(W+4)),R.lineTo(Y[0]-e*(J+4),Y[1]-r*(J+4)),R.stroke(),R.setLineDash([])}R.strokeStyle=`rgba(200, 189, 255, ${.4*X})`,R.beginPath(),R.arc(Y[0],Y[1],J+.5,0,Math.PI*2),R.stroke();let r=t=>{let n=C(t,E),r=C(t,D);return{x:Y[0]+n*e,y:Y[1]-r*e,hidden:C(t,T)<0&&n*n+r*r<pe*pe}};for(let{key:e,en:t,zh:n,color:i}of te){let a=[0,0,0];if(!S(N,e,v,a))continue;let o=re(N,e,v)*.45,s=r(a);R.lineWidth=2;for(let t=1;t<=36;t++){let n=[0,0,0];if(!S(N,e,v-o*t/36,n))break;let a=r(n);!a.hidden&&!s.hidden&&(R.strokeStyle=$(i,.8*X*(1-t/36)),R.beginPath(),R.moveTo(s.x,s.y),R.lineTo(a.x,a.y),R.stroke()),s=a}let c=r(a);c.hidden||(tt(c.x,c.y,3,i,X),Q(m.zh?n:t,c.x+6,c.y-5,.9*X))}Q(m.closeUp,Y[0],Y[1]+J+15,.7*X,`center`)}if(nt>=0){let e=f.spill,t=g-40;Q(m.spill(nt),h-14,qe?t:t-14,e,`right`),qe||Q(m.lugre,h-14,t,.55*e,`right`)}let rt=a/j,it=rt*90,at=10**Math.floor(Math.log10(it)),ot=[1,2,5,10].find(e=>e*at>=it/1.6)*at,st=ot/rt,ct=h-18-st,lt=g-18;R.strokeStyle=`rgba(223, 218, 245, 0.55)`,R.lineWidth=1,R.beginPath(),R.moveTo(ct,lt-4),R.lineTo(ct,lt),R.lineTo(ct+st,lt),R.lineTo(ct+st,lt-4),R.stroke(),Q(`${ot.toLocaleString(`en-US`)} KM`,ct+st,lt-8,.8,`right`)},Pe=e=>e.preventDefault();return _.addEventListener(`webglcontextlost`,Pe),{setFleet:V,setLand:je,setSpacecraft(e){N=e},resize:Me,render:Ne,dispose(){_.removeEventListener(`webglcontextlost`,Pe),x.getExtension(`WEBGL_lose_context`)?.loseContext()}}}export{j as createOrbitScene};