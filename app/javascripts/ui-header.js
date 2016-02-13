'use strict';
/*
 * Render Header
 *
 * bool context.includeHeader true/false
 *
 * Copyright 2015 Simon Hutchison
 */
function UIHeader() {

  var _ = this;

  var parent;
  _.parent = parent;

  var rendered;
  _.rendered = rendered = false;

  var signInButtonrendered;
  _.signInButtonrendered = signInButtonrendered = false;

  _.render = function (context) {

    if (!_.rendered) {
      debug('Render header');
      _.rendered = true; // Only render once per page load.

      context.load('templates/header.template')
          .then(function (content) {
            // the first argument to then is the content of the prev operation
            $('#header').html(content);
          });
    }

  }

}