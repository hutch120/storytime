'use strict';
/*
 * App Entry
 *
 * Entry point for the application.
 *
 * Copyright 2015 Simon Hutchison
 */

window['version'] = 1;

// Global Configuration
var Global = {
  'config': {

    // Turn debug messages on/off
    'isDebug': true,
    
    // Default Templates List
    'defaultTempatesList': '/data/defaulttemplatelist.json'
  }
};

// Global base application object.
var app;

// Global debug function.
var debug;

// Create app as soon as DOM loaded.
$(function () {
  debug("Start App");
  app = new App();
  app.init();
  app.start();
});


// Define the debug function for console messages.
if (window && console) {
  Global.config.isDebug ? debug = console.log.bind(window.console) : debug = function () { };
} else {
  debug = function () { }
}
