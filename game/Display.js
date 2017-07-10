var THREE = require('three-js/three.js');

var aspectRatio = window.innerWidth / window.innerHeight;;
var viewAngle = 65;
var zNear = 0.1;
var zFar = 1000;

var scene;
var camera;
var renderer;

var cube;

function start()
{
  init();
  addCube(0, 0, 5);
  render();
};

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( viewAngle, aspectRatio, zNear, zFar );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
};

function addCube(x, y, z) {
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.x = x;
  camera.position.y = y;
  camera.position.z = z;
};

function render() {
	requestAnimationFrame( render );
	cube.rotation.x += .01;
	cube.rotation.y += .01;
  cube.rotation.z += .01;
	renderer.render(scene, camera);
};

export default class Display {
  constructor() {
    start();
  }
}
