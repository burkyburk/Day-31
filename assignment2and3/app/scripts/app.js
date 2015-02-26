/* jshint devel:true */
angular.module('app', ['app.controllers', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
      })
      .state('play', {
        url: "/play",
        templateUrl: "templates/play.html",
        controller: "PlayCtrl"
      })
      .state('leaderboard', {
        url: "/leaderboard",
        templateUrl: "templates/leaderboard.html",
        controller: "LeaderboardCtrl"
      })
						.state('settings', {
							url: "/settings",
							templateUrl: "templates/settings.html",
							controller: "SettingsCtrl"
						})

    $urlRouterProvider.otherwise("/home");
  });
