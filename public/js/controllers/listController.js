controllers.controller('ListCtrl', function ($scope, $http) {
    $scope.message = "This is my List";
    $scope.tasks = [];

    $http({
          method: 'GET',
          url: '/api/tasks',
        }).
        success(function (data, status, headers, config) {
          console.log(data);
          $scope.tasks = data;
        }).
        error(function (data, status, headers, config) {
          console.log('could not get the tasks');
        });

});