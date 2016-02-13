'use strict';
/*
 * Routes
 *
 * Define the application routes.
 *
 * See http://sammyjs.org/ for more details.
 *
 * Copyright 2015 Simon Hutchison
 */
function Routes() {

  var _ = this;
  var parent; _.parent = parent;

  _.uiHeader = new UIHeader(); _.uiHeader.parent = _;
  _.uiFooter = new UIFooter(); _.uiFooter.parent = _;
  _.uiItems = new UIItems(); _.uiItems.parent = _;
  _.uiItem = new UIItem(); _.uiItem.parent = _;

  // Function passed to Sammy constructor.
  _.definitions = function () {

    this.use('Template');
    this.use('Session');

    this.notFound = function () {
      this.swap('');
      $("<p>Oops, that couldn't be found</p>").appendTo(this.$element());
    }

    this.get('/', function (eventContext) { _.runRoute(eventContext, _.uiItems.render); });
    this.get('#/', function (eventContext) { _.runRoute(eventContext, _.uiItems.render); });
    this.get('/index.html', function (eventContext) { _.runRoute(eventContext, _.uiItems.render); });
    this.get('#/items', function (eventContext) { _.runRoute(eventContext, _.uiItems.render); });
    this.get('#/items/item/:id', function (eventContext) { _.runRoute(eventContext, _.uiItem.render); });

    this.bind('run', function (eventContext) {
      // initialize the app
      //this.trigger('update-cart');
    });

  }

  _.runRoute = function (eventContext, routeFunction) {
    debug("Running route: " + eventContext.path);
    //console.trace();
    _.preRouteActivity(eventContext);
    routeFunction(eventContext);
    _.postRouteActivity(eventContext);
  }

  _.preRouteActivity = function (eventContext) {
    eventContext.app.swap('');
  }

  _.postRouteActivity = function (eventContext) {
    _.uiHeader.render(eventContext);
    _.uiFooter.render(eventContext);


  }

  /**
   * Note that preferred way to set the location is by using href links.
   * E.g. Sign out link will trigger a route via HTML, see header.template
   * This is used by the authorisation system to trigger a redirect if the logout occurs externally, e.g. on another tab.
   */
  _.setLocation = function (route) {
    debug("Set Location: " + route);
    app.sammy.setLocation(route);
  }

}