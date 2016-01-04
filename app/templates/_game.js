var Game = require('crtrdg-gameloop')
var createKeyboard = require('crtrdg-keyboard')
var createMouse = require('crtrdg-mouse')

var game = new Game({
  canvas: 'game',
  width: 800,
  height: 400,
  backgroundColor: '#ff1f1f'
})

var keyboard = createKeyboard(game)
var mouse = createMouse(game)

game.on('update', function (interval) {})

game.on('draw', function (context) {})

game.on('pause', function () {})

game.on('resume', function () {})
