import * as THREE from "three";
const scene = new THREE.Scene();
//场景天空盒

const textureCubeLoader = new THREE.CubeTextureLoader().setPath("./textures/");

const textCube = textureCubeLoader.load([
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
]);
scene.background = textCube;
scene.environment = textCube;
export default scene;
