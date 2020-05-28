(function () {
'use strict';
  angular.module('MyTest',[])
  .controller('MyTController',count);

  $count.$injector = [$scope];
  function count($scope) {
    $scope.items="";
    $scope.ans="";

    $scope.checkstatus = function () {
      var s = $scope.items;
      var z = s.length;
      if(z==0)
        $scope.ans = "Please enter data first";
      else{
      var y = s.split(",");
      var x = y.length;
      //if(x==0)
        //$scope.ans="enter data";
      if (x>=1 && x<=3) {
        $scope.ans = "Enjoy!";
      }
      else {
        $scope.ans = "Too much!";
      }
    }
    };
  }
})();
