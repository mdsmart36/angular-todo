controllers.controller('TodoCtrl', function ($scope, $rootScope, $http) {
    $scope.message = "Todo!";
    $scope.task = {};

    $scope.submit = function(){  
      // api call POST to api/tasks
      $scope.task.user = $rootScope.rootUser;
      $http({
            method: 'POST',
            url: '/api/tasks',
            data: $scope.task
          }).
          success(function (data, status, headers, config) {
            console.log('task is successfully saved');
            $scope.task = {};
          }).
          error(function (data, status, headers, config) {
            console.log('task did not save');
          });
    }

  });
