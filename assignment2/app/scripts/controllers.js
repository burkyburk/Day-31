angular.module('app.controllers', [])
  .controller('HomeCtrl', function($scope) {
    $scope.test = 'hello';
  })
  .controller('PlayCtrl', function($scope, $state) {
    $scope.test = 'hello';
    $scope.goHome = function() {
      console.log('goHome');
      $state.go('home');
    }
  })
  .controller('SettingsCtrl', function($scope) {
    $scope.test = 'hello';
  })
  .controller('LeaderboardCtrl', function($scope) {
    $scope.test = 'hello';
  });
