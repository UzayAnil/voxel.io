var createGame = require('voxel-engine');
var three = require('three-js');

var game = createGame({
  texturePath: 'textures/',
  generate: function(x, y, z) {
    return generateTerrain(x, y, z)
  },
  chunkDistance: 2,
  chunkSize: 8,
  fogDisabled: true
});

var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);

var player = createPlayer('player.png');
player.possess();
player.yaw.position.set(0, 30, 0);
player.pov('third')

var thr3 = three();

var newv = new thr3.Vector3(0, 0.00005, 0);
var oldv = new thr3.Vector3(0, -0.00009, 0);

window.addEventListener('keydown', function(ev) {
  if(ev.keyCode === 'Y'.charCodeAt(0)) {
    player.toggle();
  }
  if(ev.keyCode === 'G'.charCodeAt(0)) {
    player.subjectTo(newv)
  }
  if(ev.keyCode === 'F'.charCodeAt(0)) {
    player.subjectTo(oldv)
  }
})

function generateTerrain(x, y, z) {

  if(y <= 15) {
    return 2;
  }
  else {
    return 0;
  }
}
