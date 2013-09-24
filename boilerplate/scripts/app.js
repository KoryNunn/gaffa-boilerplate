var Gaffa = require('gaffa'),
    myApp = {},
    gaffa = new Gaffa(),
    views = gaffa.views.constructors = require('./views'),
    actions = gaffa.actions.constructors = require('./actions'),
    behaviours = gaffa.behaviours.constructors = require('./behaviours');

myApp.gaffa = gaffa;

// Make the apps UI
function createAppView(){
    var appWrapper = new views.container(),
        heading = new views.heading();
        notice = new views.text();

    heading.text.value = 'Gaffa Boilerplate App';

    notice.text.value = 'Edit app.js to get started.';

    appWrapper.views.content.add([
        heading,
        notice
    ]);

    return appWrapper;
}


// You can create views before window.load as long as they are not added to gaffa.
var appView = createAppView();



// Add the views on load.
// This inserts them into the DOM.
window.addEventListener('load', function(){
    gaffa.views.add(appView);
});