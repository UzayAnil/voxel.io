var createGame = require('voxel-engine');
var game;
var player

init();

function init() {

  game = createGame({
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

  player = createPlayer('textures/player.png');
  player.possess();
  player.yaw.position.set(0, 16, 0);
  player.pov('third');

}

function generateTerrain(x, y, z) {
  if(y <= 4) {
    return 1;
  } else if(y > 4 && y < 8) {
    var rand = Math.random();
      if(rand >= .5) {
        return 1;
      } else {
        return 0;
      }
  }
  else {
    return 0;
  }
}

window.addEventListener('keydown', function(ev) {
  if(ev.keyCode === 'Y'.charCodeAt(0)) {
    player.toggle();
  };
})
