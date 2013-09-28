#!/usr/bin/env node

var program = require('commander'),
    path = require('path'),
    fs = require('fs-extra'),
    exec = require("child_process").exec,
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
    console.log("Files coppied, installing modules");
    exec('npm --prefix ./scripts install', function(){
        console.log("Modules installed, browserifying app.js");
        exec('browserify ./scripts/app.js > ./scripts/app.browser.js', function(){
            console.log("success! open index.html in a browser.");
        }).stdout.pipe(process.stdout);
    }).stdout.pipe(process.stdout);;
  }
});