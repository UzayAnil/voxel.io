var THREE = require('three-js/three.js');

var scene, camera, renderer, cube;
var keys = [];

var player = { height: 1.87, walkSpeed: .05, jumpHeight: .05, lookSpeed: .05 };

export default class Render {
  constructor(s, c, r) {
    if(s == null) {
      console.log('argh');
    } else {
        scene = s;
        camera = c;
        renderer = r;
    }
  }
  addCube(x, y, z) {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: {r: 255, g: 0, b: 255}, wireframe: true } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
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
  requestAnimationFrame( render )

  input();
  update();

  renderer.render(scene, camera);
}

function input() {
  if(keys[87]) {
    camera.position.z -= .1;
  }
  if(keys[83]) {
    camera.position.z += .1;
  }
  if(keys[65]) {
    camera.rotation.y += player.lookSpeed;
  }
  if(keys[68]) {
    camera.rotation.y -= player.lookSpeed;
  }
  if(keys[82]) {
    camera.position.y += player.walkSpeed;
  }
  if(keys[70]) {
    camera.position.y -= player.walkSpeed;
  }
};

function update() {

};
