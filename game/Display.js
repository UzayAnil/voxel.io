import Render from './Render.js';
import Terrain from './Terrain.js';
var THREE = require('three-js/three.js');

export default class Display {
  constructor() {
    init();
  }
  start() {
    graphics.render(scene, camera, renderer)
  }
  configure(va, zN, zF) {
    camera = new THREE.PerspectiveCamera( va, aspectRatio, zN, zF);
  }
}

var aspectRatio = window.innerWidth / window.innerHeight;;
var viewAngle = 65;
var zNear = 0.1;
var zFar = 1000;

var scene;
var camera;
var renderer;
var graphics;

var world = new Terrain();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( viewAngle, aspectRatio, zNear, zFar );
  renderer = new THREE.WebGLRenderer();
  graphics = new Render(scene, camera, renderer);
  world.generate(-2, 0, -2, 2, 0, 2);
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  document.addEventListener('keydown', graphics.keyDown);
  document.addEventListener('keyup', graphics.keyUp);
};
