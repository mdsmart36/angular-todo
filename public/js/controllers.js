'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
    $http({
          method: 'GET',
          url: '/api/user'
        }).
        success(function (data, status, headers, config) {
          $scope.name = data.username;
        }).
        error(function (data, status, headers, config) {
          $scope.name = 'Error!';
        });
  }).  
  controller('HomeCtrl', function ($scope) {
    $scope.message = "Home"

  }).
  controller('AuthCtrl', function ($scope) {
    $scope.message='NEWAuthenticateCtrl'
    $scope.showRegister = true;
    $scope.showLogin = false;

    $scope.showLoginBtn = function(){
      $scope.showRegister = false;
      $scope.showLogin = true;    
    }

    $scope.showRegisterBtn = function(){
      $scope.showRegister = true;
      $scope.showLogin = false;    
    }

  }).
  controller('TodoCtrl', function ($scope, $http) {
    $scope.message = "Todo!"
  });
