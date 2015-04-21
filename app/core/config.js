(function () {
  'use strict';

  angular
      .module('app.core')
      .run(runApp)
      .config(configure);

  function configure ($urlRouterProvider, $ionicConfigProvider){
    // Add initial config stuff here such as view caching refinements.
    $ionicConfigProvider.views.maxCache(10); // Default is 10 anyway.
    $urlRouterProvider.otherwise('/feature1'); // Default route for ui-router
  }

  function runApp($ionicPlatform, $cordovaSplashscreen) {
    $ionicPlatform.ready( function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleLightContent();
        //StatusBar.styleDefault(); if you don't want white status bar...
      }
      if(window.cordova) {
        $cordovaSplashscreen.hide(); // Hide splashscreen...
        $ionicPlatform.on("resume", function() {
          // Do stuff you want to happen each time the app is opened (while in memory, i.e. not initial launch)
          // This is a good place to add analytics and usage tracking.
        }, false);
      }
    });

    // Initialize caching services if required (You need to add DSCacheFactory as an argument to runApp() to do this)
    // I sometimes have to initialize the cache within a factory/service as it is required immediately.
    // DSCacheFactory("codes", { storageMode: 'localStorage' });
  }

})();