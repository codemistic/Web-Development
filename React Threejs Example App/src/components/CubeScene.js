import React, { Component } from "react";
import * as THREE from "three";
import "./CubeScene.css";

class CubeScene extends Component {
  constructor(props) {
    super(props);
    this.firstSideLength = props.sideLength;
  }

  wrapEl = null;

  camera = null;
  scene = null;
  renderer = null;
  mesh = null;

  componentDidMount() {
    if (this.isWebGlSupport) {
      this.init(this.props.sideLength);
      window.addEventListener("resize", this.onWindowResize, false);
      this.animate();
    }
  }

  isWebGlSupport = () => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return gl && gl instanceof WebGLRenderingContext;
  };

  init(length) {
    const width = this.wrapEl.offsetWidth;
    const height = this.wrapEl.offsetHeight;

    this.camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    this.camera.position.z = 400;

    this.scene = new THREE.Scene();

    const geometry = new THREE.BoxBufferGeometry(length, length, length);
    const material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);

    this.wrapEl.appendChild(this.renderer.domElement);
  }

  onWindowResize = () => {
    const width = this.wrapEl.offsetWidth;
    const height = this.wrapEl.offsetHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  animate = () => {
    requestAnimationFrame(this.animate);

    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  };

  updateSideLength = () => {
    const { sideLength } = this.props;

    if (this.mesh) {
      const scale = sideLength / this.firstSideLength;
      this.mesh.scale.set(scale, scale, scale);
    }
  };

  render() {
    this.updateSideLength();

    return <div className="cube-scene" ref={ref => (this.wrapEl = ref)} />;
  }
}

export default CubeScene;
