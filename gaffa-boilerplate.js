#!/usr/bin/env node

var program = require('commander'),
    path = require('path'),
    fs = require('fs-extra'),
    childProcess = require("child_process"),
    exec = childProcess.exec,
    spawn = childProcess.spawn,
    fromPath = path.join(__dirname, 'boilerplate'),
    packageJson = require('./package.json');

program._name = packageJson.name;
program
    .version(packageJson.version)
    .option('-s, --scriptsOnly', 'Only boilerplate JS, not HTML')
    .option('-b, --browserify', 'Only set up browserify watcher')
    .parse(process.argv);

if(program.scriptsOnly){
    fromPath = path.join(fromPath, 'scripts');
}

function browserifyer(){
    exec('browserifyer -w ./ -i ./app.js -o ./app.browser.js -v', {
        cwd: program.scriptsOnly ? './' : './scripts'
    }).stdout.pipe(process.stdout);
}

function install(){
    exec('npm --prefix ./scripts install', function(){
        console.log("Modules installed, browserifying app.js");
        browserifyer();
    }).stdout.pipe(process.stdout);
}

if(program.browserify){
    browserifyer();
}else{
    fs.exists(path.join(process.cwd(), program.scriptsOnly ? 'app.js' : 'index.html'), function(exists){
        if(exists){
            console.warn('Warning: this directory contains files that would have been overwritten! Just starting browserifyer instead.');
            browserifyer();
        }else{
            fs.copy(fromPath, process.cwd(), function (error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Files coppied, installing modules");
                    install();
                }
            });
        }
    });
}