angular.module('ransom.third',[]).controller('thirdCtrl',['$scope',function($scope){
    $.getJSON("resource.json",function(data){
       console.log(data);
        $scope.ransom = data.ransom;
        if($scope.ransom){
            $scope.value = "7";
            $scope.image = "wrong.png";
        }else{
            $scope.value = "0";
            $scope.image = "correct.png";
        }
    });
}]);