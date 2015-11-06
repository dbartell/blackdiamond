angular.module('blackApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/views/home.html"
    })

    // _______BUILD________
    .state('hotOilTrucks', {
      url: "/build/hotOilTrucks",
      templateUrl: "app/views/build/hotOilTrucks.html",
      controller: "hotOilTruckCtrl"
    })
    .state('fracWaterHeatersTractor', {
      url: "/build/fracWaterHeatersTractor",
      templateUrl: "app/views/build/fracWaterHeatersTractor.html",
      controller: "fracWaterHeatersTractorCtrl"
    })
    .state('fracWaterHeatersTrailer', {
      url: "/build/fracWaterHeatersTrailer",
      templateUrl: "app/views/build/fracWaterHeatersTrailer.html",
      controller: "fracWaterHeatersTrailerCtrl"
    })
    .state('highPressureSkidPump', {
      url: "/build/highPressureSkidPump",
      templateUrl: "app/views/build/highPressureSkidPump.html",
      controller: "highPressureSkidPumpCtrl"
    })

    // ______INFORMATION______
    .state('contact', {
      url: "/contact",
      templateUrl: "app/views/contact.html"
    })
    .state('diesel', {
      url: "/diesel",
      templateUrl: "app/views/diesel.html"
    })
    .state('fabrication', {
      url: "/fabrication",
      templateUrl: "app/views/fabrication.html"
    })
    .state('forsale', {
      url: "/forsale",
      templateUrl: "app/views/forsale.html"
    })
  });
