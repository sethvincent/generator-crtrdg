'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var CrtrdgGenerator = module.exports = function CrtrdgGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CrtrdgGenerator, yeoman.generators.Base);

CrtrdgGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'gameName',
    message: 'What is your game called?'
  }];

  this.prompt(prompts, function (props) {
    this.gameName = props.gameName;

    cb();
  }.bind(this));
};

CrtrdgGenerator.prototype.app = function app() {
  this.template('_package.json', 'package.json');
  this.template('_game.js', 'game.js');
  this.template('_index.html', 'index.html');
  this.template('_readme.md', 'readme.md');
  this.copy('_style.css', 'style.css');
};

CrtrdgGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
