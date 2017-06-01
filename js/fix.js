const remote = require('electron').remote;
angular.module('ransom.fix', []).controller('fixCtrl', ['$scope', function ($scope) {
    $scope.clientId = "";
    $scope.techId = "";
    $scope.error = false;
    $scope.value = "";
    $scope.prog = false;
    $scope.fixIt = function () {
        if ($scope.payment) {
            if ($scope.clientId == "" || $scope.techId !== "01-001-5965") {
                $scope.value = "Please input correct Information";
                $scope.error = true;
            } else {
                //  here we will write a message and close application code
                $scope.prog = true;
                var i = 0;
                var counterBack = setInterval(function () {
                    i++;
                    if (i <= 100) {
                        $('.progress-bar').css('width', i + '%');
                    } else {
                        clearInterval(counterBack);
                    }
                    if (i == 100) {
                        let w = remote.getCurrentWindow()
                        w.close()
                    }
                }, 300);
            }
        } else {
            $scope.value = "Please click payment done box";
            $scope.error = true;
        }
    };
}]);
