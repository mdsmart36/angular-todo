controllers.controller('navController', function ($scope, $rootScope, $http, $location) {
    $scope.message = "NAV";
    $scope.logout = function(){
      $rootScope.rootUser = null;
      $http({
        method: 'GET',
        url: 'api/user/logout'
      }).
      success(function (data, status, headers, config) {
        console.log('logout succeeded');
        $location.path('/');
      }).
      error(function (data, status, headers, config) {
        console.log('logout failed');
      });
    }
  });