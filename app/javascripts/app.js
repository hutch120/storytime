'use strict';
/*
 * App Entry
 *
 * Entry point for the application.
 *
 * Copyright 2015 Simon Hutchison
 */
function App() {

  var _ = this;
  var parent;

  var sammy;
  _.sammy = sammy;

  var routes;
  _.routes = routes = new Routes();
  _.routes.parent = _;

  var splash;
  _.splash = splash = new Splash();
  _.splash.parent = _;

  var voice;
  _.voice = voice = 'Australian Female';

  var msg;
  _.msg = new SpeechSynthesisUtterance();
  _.msg.lang = 'en-AU';

  // Init app
  _.init = function () {
    debug("Init App");
    _.splash.show();
    app.splash.update('Starting Application');
    _.eventHandler();
  }

  // Start app / sammy routes
  _.start = function () {
    debug("Starting app");
    app.splash.update('Loading Routes');
    _.sammy = $.sammy('#main', _.routes.definitions);
    _.sammy.run();
    _.splash.hide();
  }



  /**
   * Simple user notification.
   * 
   * @param {message} String message to display
   * @param {level} Typically success, info, error. See https://notifyjs.com/ for more options
   * @param {logToConsole} Always write this object/message to the console regardless of debug mode. Could be used by customer to provide detailed feedback.
   */
  _.notify = function (message, level, logToConsole) {
    $.notify(message, level);
    if (Global.config.isDebug) {
      console.log(message);
    }
    if (level == 'error') {
      console.trace(message); // Do not use debug here or it will be stripped by minifier.
      if (logToConsole) {
        if (logToConsole != '') {
          console.log(logToConsole);
        }
      }
    }
  }
  // Setup default location for message.
  $.notify.defaults({ "position": "right bottom" });

  // Text to Speech
  _.speak = function (text) {
    // Play Sound Handler.
    //debug(evt);
    //debug(responsiveVoice.getVoices());
    text = text.replace("`", "");
    text = text.replace("'", "");
    text = text.replace(/\W+/g, " ");

    if (text.length > 0) {
      debug("Play sound: " + text);
      _.msg.text = text;
      window.speechSynthesis.speak(_.msg);
    }


  }

  _.eventHandler = function (item) {
    debug("Init event handler");

    
    $("#main").on("click", function (event) {
      //debug(event);
      var text = "";

      if (event.target.className.indexOf('playsound') > -1) {
        if (event.target.alt) {
          if (event.target.alt.length > 0) {
            app.speak(event.target.alt);
            text = event.target.alt;
          }
        }
        else if (event.target.innerText) {
          if (event.target.innerText.length > 0) {
            text = event.target.innerText;
          }
        }
      }


      if (text.length > 0) {
        $(".playsound").css('color', 'black');
        $(event.target).css('color', 'red');
        app.speak(event.target.innerText);

        event.preventDefault();
        return false;
      }


    });
  }

}