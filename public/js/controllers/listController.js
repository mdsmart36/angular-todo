controllers.controller('ListCtrl', function ($scope, $http) {
    $scope.message = "This is my List";

    $http({
          method: 'GET',
          url: '/api/tasks',
        }).
        success(function (data, status, headers, config) {
          console.log(data);
          

        }).
        error(function (data, status, headers, config) {
          console.log('could not get the tasks');
        });

});