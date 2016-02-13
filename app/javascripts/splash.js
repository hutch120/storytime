'use strict';
/*
 * Render Splash Screen
 *
 * Copyright 2015 Simon Hutchison
 */
function Splash() {

  var _ = this;

  var parent;
  _.parent = parent;

  // Global variable to hold loading screen reference.
  var loadingScreen;
  _.loadingScreen = loadingScreen;

  _.please_wait_options = {
    logo: "/static/worm-reading-400x299.png",
    backgroundColor: '#F4D0FB',
    loadingHtml: "<p class='loading-message'>Starting Application</p>"
  };

  /**
   * Show a loading screen while everything loads.
   */
  _.show = function () {
    debug("Show splash screen")
    _.loadingScreen = pleaseWait(_.please_wait_options);
  }

  _.update = function (loading_message) {
    debug("Update splash: " + loading_message);
    _.loadingScreen.updateOption('loadingHtml',"<p class='loading-message'>" + loading_message + "</p>");
  };

  /**
   * Hide the loading screen once everything is loaded.
   */
  _.hide = function () {
    debug("Hide splash screen")
    _.loadingScreen.finish();
  }
}