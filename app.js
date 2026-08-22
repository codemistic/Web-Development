var app = angular.module('clock', []);

app.controller('MainCtrl', function($scope,$timeout,dateFilter) {

  $scope.updateTime = function(){
      $timeout(function(){
        $scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
        $scope.updateTime();
    },1000);
  };
  
  $scope.updateTime();
});