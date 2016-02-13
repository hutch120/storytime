'use strict';

function UIItem() {

  var _ = this;

  var parent;
  _.parent = parent;

  var context;
  _.context = context;

  /**
   * Load the items
   */
  _.render = function (context) {

    context.id = context.params['id'];
    _.context = context;

    context.load(Global.config.defaultTempatesList)
      .then(function (items) {
        $.each(items, function (i, item) {
          if (_.context.id == item.id) {
            _.context.item = item;
            _.context
              .render('templates/item_detail.template', _.context.item)
              .appendTo(_.context.$element())
              .then(_.addText(item));
          }
        });
      });
  }

  _.addText = function (item) {
    
    var words = item.text.split(" ");
    $.each(words, function (i, word) {
      var obj = {};
      obj.word = word;
      _.context
        .render('templates/item_detail_text.template', obj)
        .appendTo("#item-text");
    });

  }


}