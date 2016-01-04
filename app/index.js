var util = require('util')
var yeoman = require('yeoman-generator')
var slugify = require('underscore.string').slugify

var CrtrdgGenerator = module.exports = function CrtrdgGenerator (args, options, config) {
  yeoman.Base.apply(this, arguments)

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] })
  })

  this.pkg = require('../package.json')
}

util.inherits(CrtrdgGenerator, yeoman.Base)

CrtrdgGenerator.prototype.askFor = function askFor () {
  var cb = this.async()

  console.log(this.yeoman)

  var prompts = [{
    name: 'gameName',
    message: 'What is your game called?'
  }]

  this.prompt(prompts, function (props) {
    this.gameName = props.gameName
    this.slugName = slugify(this.gameName)
    cb()
  }.bind(this))
}

CrtrdgGenerator.prototype.app = function app () {
  this.template('_package.json', 'package.json')
  this.template('_game.js', 'game.js')
  this.template('_index.html', 'index.html')
  this.template('_readme.md', 'readme.md')
  this.copy('_style.css', 'style.css')
}
