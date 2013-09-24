#!/usr/bin/env node

var program = require('commander'),
    path = require('path'),
    fs = require('fs-extra'),
    fromPath = path.join(__dirname, 'boilerplate'),
    packageJson = require('./package.json');

program._name = packageJson.name;
program
    .version(packageJson.version)
    .option('-s, --scriptsOnly', 'Only boilerplate JS, not HTML')
    .parse(process.argv);

if(program.scriptsOnly){
    fromPath = path.join(fromPath, 'scripts');
}

fs.copy(fromPath, process.cwd(), function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
});