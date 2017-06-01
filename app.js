var app = angular.module('ransom', ['ngRoute',
                                    'ransom.one',
                                    'ransom.sec',
                                    'ransom.third',
                                    'ransom.fix',
                                    'ransom.detail'
                                   ]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller : 'oneCtrl',
        templateUrl : 'view/one.html'
    }).when('/second', {
        controller : 'secCtrl',
        templateUrl : 'view/sec.html'
    }).when('/third', {
        controller : 'thirdCtrl',
        templateUrl : 'view/third.html'
    }).when('/fix', {
        controller : 'fixCtrl',
        templateUrl : 'view/fix.html'
    }).when('/detail', {
        controller : 'detailCtrl',
        templateUrl : 'view/detail.html'
    }).otherwise({
        redirectTo: '/'
    });
});

app.controller('mainCtrl',['$scope',function($scope){
       
}]);
