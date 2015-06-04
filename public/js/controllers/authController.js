controllers.controller('AuthCtrl', function ($scope, $http, $location, $rootScope) {
    $scope.message='NEWAuthenticateCtrl'
    $scope.showRegister = false;
    $scope.showLogin = true;
    $scope.user = {};

    $scope.showLoginBtn = function(){
      $scope.showRegister = false;
      $scope.showLogin = true;    
    }

    $scope.showRegisterBtn = function(){
      $scope.showRegister = true;
      $scope.showLogin = false;    
    }

    $scope.register = function(){
      console.log('you clicked the register button');
      $http({
            method: 'POST',
            url: '/api/user/register',
            data: $scope.user
          }).
          success(function (data, status, headers, config) {
            console.log('you registered');
            $scope.user = {};
            $scope.showRegister = false;
            $scope.showLogin = true;
          }).
          error(function (data, status, headers, config) {
            console.log('registration failed');
          });
    }

    $scope.login = function(){
      console.log('you clicked the login button');
      $http({
        method: 'POST',
        url: 'api/user/login',
        data: $scope.user
      }).
      success(function (data, status, headers, config) {
        console.log('login succeeded', data);
        // go to tasks page
        $rootScope.rootUser = data.username;
        $location.path('/todo');
      }).
      error(function (data, status, headers, config) {
        console.log('login failed');
      });
    }

  });
