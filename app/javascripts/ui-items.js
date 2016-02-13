'use strict';
function UIItems() {

  var _ = this;

  var parent;
  _.parent = parent;

  var context;
  _.context = context;

  _.render = function (ctx) {

    debug("Loading Items");

    _.context = ctx;


    _.context.load(Global.config.defaultTempatesList)
        .then(function (items) {
          _.context.items = items;
        })
        .then(function () {
          _.context
            .render('templates/wrapper.template', { id: "items", "templateclass": "" })
            .appendTo(_.context.$element())
            .then(_.addItems)
            .then(_.context.swap(_.renderComplete));
        });
  }

  _.addItems = function () {
    debug("Adding Items");
    $.each(_.context.items, function (i, item) {
      item.modulous = ((i % 2) == 0) ? "odd" : "even";
      _.context
        .render('templates/item.template', { id: item.id, item: item })
        .appendTo('#items')
    });
    return false;
  }


}