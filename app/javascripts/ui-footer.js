'use strict';
/*
 * Render Header
 *
 * bool context.includeHeader true/false
 *
 * Copyright 2015 Simon Hutchison
 */
function UIFooter() {

  var _ = this;

  var parent;
  _.parent = parent;

  var rendered;
  _.rendered = rendered = false;

  _.render = function (context) {

    if (!_.rendered) {
      debug('Render footer');
      context.render('templates/footer.template').appendTo('#footer');
      _.rendered = true;
    }
  }
}