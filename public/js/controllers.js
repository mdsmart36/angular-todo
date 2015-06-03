'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {


  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope, $http) {
    // write Ctrl here
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

  });
