controllers.controller('ListCtrl', function ($scope, $http, $route, $location, myService) {
    $scope.message = "This is my List";
    $scope.tasks = [];

    $http({
          method: 'GET',
          url: '/api/tasks'
        }).
        success(function (data, status, headers, config) {
          console.log(data);
          $scope.tasks = data;
        }).
        error(function (data, status, headers, config) {
          console.log('could not get the tasks');
        });

    $scope.edit = function(id) {

      $http({
            method: 'GET',
            url: '/api/tasks/' + id
          }).
          success(function (data, status, headers, config) {
            console.log('inside listController');
            console.log(data[0]);
            myService.editTask = data[0];
            $location.path('/edit');

          }).
          error(function (data, status, headers, config) {
            console.log('could not get the tasks');
          });
    }

    $scope.remove = function(id) {
      $http({
        method: 'DELETE',
        url: '/api/tasks/' + id
      }).
      success(function (data, status, headers, config){
        console.log('item deleted');
        $route.reload();

      }).
      error(function (data, status, headers, config){
        console.log('item not deleted');
      });
    }

});