var THREE = require('three-js/three.js');

var scene;
var camera;
var renderer;
var cube;

export default class Render {
  constructor(s, c, r) {
    scene = s;
    camera = c;
    renderer = r;
  }
  addCube(x, y, z) {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
  }
  render() {
    render(); //a necesarry tautology because requestAnimationFrame does not work otherwise
  }
}

function render() {
  requestAnimationFrame( render );
  cube.rotation.x += .01;
  renderer.render(scene, camera);
}
