#!/usr/bin/env node

var argparse = require('argparse');

var parser = argparse.ArgumentParser({
  addHelp: true,
  description: "Scaffolder for starter projects.",
  version: '3.0'
});
var subs= parser.addSubparsers({
  dest: 'sub',
  title: 'subcommand'
});

var newProject = subs.addParser('new', {
  addHelp: true
});
newProject.addArgument('templateName', {
  addHelp: true,
  help: "Name of the template",
  options: ['node-server', 'static-site']
});
newProject.addArgument('projectName', {
  addHelp: true,
  help: "Name of the project to create"
});

var args = parser.parseArgs();
if (args.sub=='new') {
  require('./new')(args);
}
