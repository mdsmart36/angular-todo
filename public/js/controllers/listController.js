controllers.controller('ListCtrl', function ($scope, $http) {
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

    $scope.edit = function() {

    }

    $scope.remove = function(id) {
      $http({
        method: 'DELETE',
        url: '/api/tasks/' + id
      }).
      success(function (data, status, headers, config){
        console.log('item deleted');
        // refresh the page?
      }).
      error(function (data, status, headers, config){
        console.log('item not deleted');
      });
    }

});