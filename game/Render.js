var THREE = require('three-js/three.js');

var scene, camera, renderer, cube;
var keys = [];

var player = { height: 1.87, walkSpeed: .05, jumpHeight: .05 };

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
  keyDown(event) {
    keys[event.keyCode] = true;
  }
  keyUp(event) {
    keys[event.keyCode] = false;
  }
}

function render() {
  requestAnimationFrame( render );
  cube.rotation.x += .01;

  if(keys[87]) {
    cube.rotation.x += .03;
  }
  if(keys[83]) {
    cube.rotation.x -= .009;
  }

  renderer.render(scene, camera);
}
