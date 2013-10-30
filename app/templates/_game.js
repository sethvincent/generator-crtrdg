var Game = require('crtrdg-gameloop');
var Keyboard = require('crtrdg-keyboard');
var Mouse = require('crtrdg-mouse');

var game = new Game({
  canvas: 'game',
  width: 800,
  height: 400,
  backgroundColor: '#ff1f1f'
});

var keyboard = new Keyboard(game);
var mouse = new Mouse(game);

game.on('update', function(interval){});

game.on('draw', function(context){});

game.on('pause', function(){});

game.on('resume', function(){});
