import { useRef, useEffect } from 'react';
import {
  Clock as e,
  PerspectiveCamera as t,
  Scene as i,
  WebGLRenderer as s,
  SRGBColorSpace as n,
  MathUtils as o,
  Vector2 as r,
  Vector3 as a,
  MeshPhysicalMaterial as c,
  ShaderChunk as h,
  Color as l,
  Object3D as m,
  InstancedMesh as d,
  PMREMGenerator as p,
  SphereGeometry as g,
  AmbientLight as f,
  PointLight as u,
  ACESFilmicToneMapping as v,
  Raycaster as y,
  Plane as w
} from 'three';
import { RoomEnvironment as z } from 'three/examples/jsm/environments/RoomEnvironment.js';

class x {
  #e;
  canvas;
  camera;
  cameraMinAspect;
  cameraMaxAspect;
  cameraFov;
  maxPixelRatio;
  minPixelRatio;
  scene;
  renderer;
  #t;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this.#i;
  onBeforeRender = () => {};
  onAfterRender = () => {};
  onAfterResize = () => {};
  #s = false;
  #n = false;
  isDisposed = false;
  #o;
  #r;
  #a;
  #c = new e();
  #h = { elapsed: 0, delta: 0 };
  #l;
  constructor(e) {
    this.#e = { ...e };
    this.#m();
    this.#d();
    this.#p();
    this.resize();
    this.#g();
  }
  #m() {
    this.camera = new t();
    this.cameraFov = this.camera.fov;
  }
  #d() {
    this.scene = new i();
  }
  #p() {
    if (this.#e.canvas) {
      this.canvas = this.#e.canvas;
    } else if (this.#e.id) {
      this.canvas = document.getElementById(this.#e.id);
    } else {
      console.error('Three: Missing canvas or id parameter');
    }
    this.canvas.style.display = 'block';
    const e = {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      ...(this.#e.rendererOptions ?? {})
    };
    this.renderer = new s(e);
    this.renderer.outputColorSpace = n;
  }
  #g() {
    if (!(this.#e.size instanceof Object)) {
      window.addEventListener('resize', this.#f.bind(this));
      if (this.#e.size === 'parent' && this.canvas.parentNode) {
        this.#r = new ResizeObserver(this.#f.bind(this));
        this.#r.observe(this.canvas.parentNode);
      }
    }
    this.#o = new IntersectionObserver(this.#u.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });
    this.#o.observe(this.canvas);
    document.addEventListener('visibilitychange', this.#v.bind(this));
  }
  #y() {
    window.removeEventListener('resize', this.#f.bind(this));
    this.#r?.disconnect();
    this.#o?.disconnect();
    document.removeEventListener('visibilitychange', this.#v.bind(this));
  }
  #u(e) {
    this.#s = e[0].isIntersecting;
    this.#s ? this.#w() : this.#z();
  }
  #v() {
    if (this.#s) {
      document.hidden ? this.#z() : this.#w();
    }
  }
  #f() {
    if (this.#a) clearTimeout(this.#a);
    this.#a = setTimeout(this.resize.bind(this), 100);
  }
  resize() {
    let e, t;
    if (this.#e.size instanceof Object) {
      e = this.#e.size.width;
      t = this.#e.size.height;
    } else if (this.#e.size === 'parent' && this.canvas.parentNode) {
      e = this.canvas.parentNode.offsetWidth;
      t = this.canvas.parentNode.offsetHeight;
    } else {
      e = window.innerWidth;
      t = window.innerHeight;
    }
    this.size.width = e;
    this.size.height = t;
    this.size.ratio = e / t;
    this.#x();
    this.#b();
    this.onAfterResize(this.size);
  }
  #x() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.#A(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.#A(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }
  #A(e) {
    const t = Math.tan(o.degToRad(this.cameraFov / 2)) / (this.camera.aspect / e);
    this.camera.fov = 2 * o.radToDeg(Math.atan(t));
  }
  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const e = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(e / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    } else if (this.camera.isOrthographicCamera) {
      this.size.wHeight = this.camera.top - this.camera.bottom;
      this.size.wWidth = this.camera.right - this.camera.left;
    }
  }
  #b() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.#t?.setSize(this.size.width, this.size.height);
    let e = window.devicePixelRatio;
    if (this.maxPixelRatio && e > this.maxPixelRatio) {
      e = this.maxPixelRatio;
    } else if (this.minPixelRatio && e < this.minPixelRatio) {
      e = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(e);
    this.size.pixelRatio = e;
  }
  get postprocessing() {
    return this.#t;
  }
  set postprocessing(e) {
    this.#t = e;
    this.render = e.render.bind(e);
  }
  #w() {
    if (this.#n) return;
    const animate = () => {
      this.#l = requestAnimationFrame(animate);
      this.#h.delta = this.#c.getDelta();
      this.#h.elapsed += this.#h.delta;
      this.onBeforeRender(this.#h);
      this.render();
      this.onAfterRender(this.#h);
    };
    this.#n = true;
    this.#c.start();
    animate();
  }
  #z() {
    if (this.#n) {
      cancelAnimationFrame(this.#l);
      this.#n = false;
      this.#c.stop();
    }
  }
  #i() {
    this.renderer.render(this.scene, this.camera);
  }
  clear() {
    this.scene.traverse(e => {
      if (e.isMesh && typeof e.material === 'object' && e.material !== null) {
        Object.keys(e.material).forEach(t => {
          const i = e.material[t];
          if (i !== null && typeof i === 'object' && typeof i.dispose === 'function') {
            i.dispose();
          }
        });
        e.material.dispose();
        e.geometry.dispose();
      }
    });
    this.scene.clear();
  }
  dispose() {
    this.#y();
    this.#z();
    this.clear();
    this.#t?.dispose();
    this.renderer.dispose();
    this.isDisposed = true;
  }
}

// ─── FIXED Pointer/Touch Manager ─────────────────────────────────────────────
// Key fix: touch events are now attached to the CANVAS (not document.body)
// with passive:true so the browser can still scroll normally.
// Only when the canvas is explicitly interacted with do we update the physics.

const pointerMap = new Map();
const globalPointer = new r();
let globalListenersAdded = false;

function createPointerHandler(config) {
  const state = {
    position: new r(),
    nPosition: new r(),
    hover: false,
    touching: false,
    onEnter() {},
    onMove() {},
    onClick() {},
    onLeave() {},
    ...config
  };

  const elem = config.domElement;

  // ── helpers ──────────────────────────────────────────────────────────────
  function updateFromPoint(clientX, clientY) {
    const rect = elem.getBoundingClientRect();
    state.position.x = clientX - rect.left;
    state.position.y = clientY - rect.top;
    state.nPosition.x = (state.position.x / rect.width) * 2 - 1;
    state.nPosition.y = (-state.position.y / rect.height) * 2 + 1;
  }

  function isInsideRect(clientX, clientY) {
    const rect = elem.getBoundingClientRect();
    return (
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom
    );
  }

  // ── mouse events (attached to window so they work after pointer leaves) ──
  function onPointerMove(e) {
    const inside = isInsideRect(e.clientX, e.clientY);
    updateFromPoint(e.clientX, e.clientY);
    if (inside) {
      if (!state.hover) { state.hover = true; state.onEnter(state); }
      state.onMove(state);
    } else if (state.hover && !state.touching) {
      state.hover = false;
      state.onLeave(state);
    }
  }

  function onPointerLeave() {
    if (state.hover && !state.touching) {
      state.hover = false;
      state.onLeave(state);
    }
  }

  function onClick(e) {
    if (isInsideRect(e.clientX, e.clientY)) {
      updateFromPoint(e.clientX, e.clientY);
      state.onClick(state);
    }
  }

  // ── touch events (passive:true so page scrolls freely) ───────────────────
  // We track touches that START on the canvas. If the finger later moves
  // outside, we continue updating physics (feels natural) but do NOT block
  // the browser's native scroll gesture.
  let activeTouchId = null;

  function onTouchStart(e) {
    // Don't call preventDefault — let the browser decide about scrolling
    const touch = e.changedTouches[0];
    if (activeTouchId !== null) return;         // already tracking one finger
    if (!isInsideRect(touch.clientX, touch.clientY)) return;
    activeTouchId = touch.identifier;
    state.touching = true;
    updateFromPoint(touch.clientX, touch.clientY);
    if (!state.hover) { state.hover = true; state.onEnter(state); }
    state.onMove(state);
  }

  function onTouchMove(e) {
    if (activeTouchId === null) return;
    // find our tracked finger
    let touch = null;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId) {
        touch = e.changedTouches[i]; break;
      }
    }
    if (!touch) return;
    updateFromPoint(touch.clientX, touch.clientY);
    state.onMove(state);
  }

  function onTouchEnd(e) {
    if (activeTouchId === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId) {
        activeTouchId = null;
        state.touching = false;
        if (state.hover) { state.hover = false; state.onLeave(state); }
        break;
      }
    }
  }

  // Attach mouse/click listeners to window (so move after mousedown outside still works)
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerleave', onPointerLeave);
  window.addEventListener('click', onClick);

  // Attach touch listeners to the canvas element with passive:true
  // This means the browser is free to scroll — we just observe the position.
  elem.addEventListener('touchstart',  onTouchStart,  { passive: true });
  elem.addEventListener('touchmove',   onTouchMove,   { passive: true });
  elem.addEventListener('touchend',    onTouchEnd,    { passive: true });
  elem.addEventListener('touchcancel', onTouchEnd,    { passive: true });

  state.dispose = () => {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerleave', onPointerLeave);
    window.removeEventListener('click', onClick);
    elem.removeEventListener('touchstart',  onTouchStart);
    elem.removeEventListener('touchmove',   onTouchMove);
    elem.removeEventListener('touchend',    onTouchEnd);
    elem.removeEventListener('touchcancel', onTouchEnd);
  };

  return state;
}

// ─────────────────────────────────────────────────────────────────────────────

const { randFloat: k, randFloatSpread: E } = o;
const F = new a();
const I = new a();
const O = new a();
const V = new a();
const B = new a();
const N = new a();
const _ = new a();
const j = new a();
const H = new a();
const T = new a();

class W {
  constructor(e) {
    this.config = e;
    this.positionData = new Float32Array(3 * e.count).fill(0);
    this.velocityData = new Float32Array(3 * e.count).fill(0);
    this.sizeData = new Float32Array(e.count).fill(1);
    this.center = new a();
    this.#R();
    this.setSizes();
  }
  #R() {
    const { config: e, positionData: t } = this;
    this.center.toArray(t, 0);
    for (let i = 1; i < e.count; i++) {
      const s = 3 * i;
      t[s] = E(2 * e.maxX);
      t[s + 1] = E(2 * e.maxY);
      t[s + 2] = E(2 * e.maxZ);
    }
  }
  setSizes() {
    const { config: e, sizeData: t } = this;
    t[0] = e.size0;
    for (let i = 1; i < e.count; i++) {
      t[i] = k(e.minSize, e.maxSize);
    }
  }
  update(e) {
    const { config: t, center: i, positionData: s, sizeData: n, velocityData: o } = this;
    let r = 0;
    if (t.controlSphere0) {
      r = 1;
      F.fromArray(s, 0);
      F.lerp(i, 0.1).toArray(s, 0);
      V.set(0, 0, 0).toArray(o, 0);
    }
    for (let idx = r; idx < t.count; idx++) {
      const base = 3 * idx;
      I.fromArray(s, base);
      B.fromArray(o, base);
      B.y -= e.delta * t.gravity * n[idx];
      B.multiplyScalar(t.friction);
      B.clampLength(0, t.maxVelocity);
      I.add(B);
      I.toArray(s, base);
      B.toArray(o, base);
    }
    for (let idx = r; idx < t.count; idx++) {
      const base = 3 * idx;
      I.fromArray(s, base);
      B.fromArray(o, base);
      const radius = n[idx];
      for (let jdx = idx + 1; jdx < t.count; jdx++) {
        const otherBase = 3 * jdx;
        O.fromArray(s, otherBase);
        N.fromArray(o, otherBase);
        const otherRadius = n[jdx];
        _.copy(O).sub(I);
        const dist = _.length();
        const sumRadius = radius + otherRadius;
        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          j.copy(_).normalize().multiplyScalar(0.5 * overlap);
          H.copy(j).multiplyScalar(Math.max(B.length(), 1));
          T.copy(j).multiplyScalar(Math.max(N.length(), 1));
          I.sub(j);
          B.sub(H);
          I.toArray(s, base);
          B.toArray(o, base);
          O.add(j);
          N.add(T);
          O.toArray(s, otherBase);
          N.toArray(o, otherBase);
        }
      }
      if (t.controlSphere0) {
        _.copy(F).sub(I);
        const dist = _.length();
        const sumRadius0 = radius + n[0];
        if (dist < sumRadius0) {
          const diff = sumRadius0 - dist;
          j.copy(_.normalize()).multiplyScalar(diff);
          H.copy(j).multiplyScalar(Math.max(B.length(), 2));
          I.sub(j);
          B.sub(H);
        }
      }
      if (Math.abs(I.x) + radius > t.maxX) {
        I.x = Math.sign(I.x) * (t.maxX - radius);
        B.x = -B.x * t.wallBounce;
      }
      if (t.gravity === 0) {
        if (Math.abs(I.y) + radius > t.maxY) {
          I.y = Math.sign(I.y) * (t.maxY - radius);
          B.y = -B.y * t.wallBounce;
        }
      } else if (I.y - radius < -t.maxY) {
        I.y = -t.maxY + radius;
        B.y = -B.y * t.wallBounce;
      }
      const maxBoundary = Math.max(t.maxZ, t.maxSize);
      if (Math.abs(I.z) + radius > maxBoundary) {
        I.z = Math.sign(I.z) * (t.maxZ - radius);
        B.z = -B.z * t.wallBounce;
      }
      I.toArray(s, base);
      B.toArray(o, base);
    }
  }
}

class Y extends c {
  constructor(e) {
    super(e);
    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 }
    };
    this.defines.USE_UV = '';
    this.onBeforeCompile = e => {
      Object.assign(e.uniforms, this.uniforms);
      e.fragmentShader =
        '\n        uniform float thicknessPower;\n        uniform float thicknessScale;\n        uniform float thicknessDistortion;\n        uniform float thicknessAmbient;\n        uniform float thicknessAttenuation;\n      ' +
        e.fragmentShader;
      e.fragmentShader = e.fragmentShader.replace(
        'void main() {',
        '\n        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {\n          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));\n          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;\n          #ifdef USE_COLOR\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;\n          #else\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;\n          #endif\n          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;\n        }\n\n        void main() {\n      '
      );
      const t = h.lights_fragment_begin.replaceAll(
        'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );',
        '\n          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);\n        '
      );
      e.fragmentShader = e.fragmentShader.replace('#include <lights_fragment_begin>', t);
      if (this.onBeforeCompile2) this.onBeforeCompile2(e);
    };
  }
}

const defaultConfig = {
  count: 200,
  colors: [0, 0, 0],
  ambientColor: 16777215,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true
};

const dummyObj = new m();

class BallpitMesh extends d {
  constructor(renderer, opts = {}) {
    const cfg = { ...defaultConfig, ...opts };
    const env = new z();
    const envTexture = new p(renderer, 0.04).fromScene(env).texture;
    const geo = new g();
    const mat = new Y({ envMap: envTexture, ...cfg.materialParams });
    mat.envMapRotation.x = -Math.PI / 2;
    super(geo, mat, cfg.count);
    this.config = cfg;
    this.physics = new W(cfg);
    this._setupLights();
    this.setColors(cfg.colors);
  }
  _setupLights() {
    this.ambientLight = new f(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new u(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }
  setColors(colors) {
    if (Array.isArray(colors) && colors.length > 1) {
      const palette = (() => {
        let stops, colorObjs;
        function set(arr) {
          stops = arr;
          colorObjs = arr.map(c => new l(c));
        }
        set(colors);
        return {
          set,
          getAt(ratio, out = new l()) {
            const scaled = Math.max(0, Math.min(1, ratio)) * (stops.length - 1);
            const idx = Math.floor(scaled);
            const start = colorObjs[idx];
            if (idx >= stops.length - 1) return start.clone();
            const alpha = scaled - idx;
            const end = colorObjs[idx + 1];
            out.r = start.r + alpha * (end.r - start.r);
            out.g = start.g + alpha * (end.g - start.g);
            out.b = start.b + alpha * (end.b - start.b);
            return out;
          }
        };
      })();
      for (let i = 0; i < this.count; i++) {
        this.setColorAt(i, palette.getAt(i / this.count));
        if (i === 0) this.light.color.copy(palette.getAt(0));
      }
      this.instanceColor.needsUpdate = true;
    }
  }
  update(frame) {
    this.physics.update(frame);
    for (let i = 0; i < this.count; i++) {
      dummyObj.position.fromArray(this.physics.positionData, 3 * i);
      if (i === 0 && !this.config.followCursor) {
        dummyObj.scale.setScalar(0);
      } else {
        dummyObj.scale.setScalar(this.physics.sizeData[i]);
      }
      dummyObj.updateMatrix();
      this.setMatrixAt(i, dummyObj.matrix);
      if (i === 0) this.light.position.copy(dummyObj.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

function createBallpit(canvas, opts = {}) {
  const three = new x({
    canvas,
    size: 'parent',
    rendererOptions: { antialias: true, alpha: true }
  });

  let spheres;
  let paused = false;

  three.renderer.toneMapping = v;
  three.camera.position.set(0, 0, 20);
  three.camera.lookAt(0, 0, 0);
  three.cameraMaxAspect = 1.5;
  three.resize();

  function initialize(config) {
    if (spheres) {
      three.clear();
      three.scene.remove(spheres);
    }
    spheres = new BallpitMesh(three.renderer, config);
    three.scene.add(spheres);
  }

  initialize(opts);

  const raycaster = new y();
  const plane = new w(new a(0, 0, 1), 0);
  const intersection = new a();

  // ── FIXED: use our new pointer handler (passive touch, no scroll blocking) ──
  // Also remove `touchAction: 'none'` — this was the main culprit on mobile.
  canvas.style.userSelect = 'none';
  canvas.style.webkitUserSelect = 'none';
  // DO NOT set touchAction:'none' here — that blocks browser scroll!

  const pointer = createPointerHandler({
    domElement: canvas,
    onMove() {
      raycaster.setFromCamera(pointer.nPosition, three.camera);
      three.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersection);
      spheres.physics.center.copy(intersection);
      spheres.config.controlSphere0 = true;
    },
    onLeave() {
      spheres.config.controlSphere0 = false;
    }
  });

  three.onBeforeRender = frame => {
    if (!paused) spheres.update(frame);
  };

  three.onAfterResize = size => {
    spheres.config.maxX = size.wWidth / 2;
    spheres.config.maxY = size.wHeight / 2;
  };

  return {
    three,
    get spheres() { return spheres; },
    setCount(n) { initialize({ ...spheres.config, count: n }); },
    togglePause() { paused = !paused; },
    dispose() {
      pointer.dispose();
      three.dispose();
    }
  };
}

// ─── React Component ──────────────────────────────────────────────────────────
/**
 * Ballpit — fully responsive, mobile-friendly Three.js balls simulation.
 *
 * Usage:
 *   <Ballpit count={100} gravity={0.5} colors={["#5227FF","#7cff67"]} followCursor />
 *
 * The wrapper div controls the size — just set width/height on it.
 * On mobile, page scrolling is NOT blocked. Touch drag still moves the
 * attractor sphere, giving a nice interactive feel without breaking UX.
 */
const Ballpit = ({ className = '', followCursor = true, ...props }) => {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    instanceRef.current = createBallpit(canvas, { followCursor, ...props });
    return () => {
      instanceRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        // touchAction must NOT be 'none' — let the browser handle scrolling
        touchAction: 'auto',
      }}
    />
  );
};

export default Ballpit;