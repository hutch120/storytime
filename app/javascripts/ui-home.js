'use strict';
function UIHome() {

  var _ = this;

  var parent;
  _.parent = parent;

  _.render = function (context) {

    debug("Load home page content");

    var data = {};
    data.loggedin = app.login.bSignedIn;

    context.render('templates/home.template', data)
      .appendTo(context.$element())
      .then(function () {
        $("#opendetails").on("click", function () {
          $("#details").show();
          $("#opendetails").hide();
        });
      });

  }
}