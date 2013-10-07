# Easily create the boilerplate for a gaffa app. #

# Usage #

## Instantiation ##

  npm install -g gaffa-boilerplate

## Usage ##

Go to a directory, and gaffa-boilerplate.

This will
 - create boilerplate files in that directory
 - install required modules
 - start a browserify watcher. (Auto-builds your app when you change files).

## Options ##

  -s (--scriptsOnly)

Only copys the scripts folder, usefull if you are adding gaffa to an application.


  -b (--browserify)

Only set up browserify watcher.


If you try and gaffa-boilerplate in a directory that already has the files included, gaffa-boilerplate will just start the watch-n-compile, rather than blowing your app away.

## Note ##

gaffa-boilerplate will use the latest version of gaffa, and the latest version of browserifyer, which are likely to be pretty bleading edge, and as such, could have issues. You can edit your apps package.json and change the version of gaffa you want to use, if you need to.