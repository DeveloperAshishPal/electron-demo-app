angular.module('ransom.sec', []).controller('secCtrl', ['$scope', '$interval', function ($scope, $interval) {
    var i = 0;
    $('#nextBtn').hide();
    var counterBack = setInterval(function () {
        i++;
        if (i <= 100) {
            $('.progress-bar').css('width', i + '%');
        } else {
            clearInterval(counterBack);
        }
        console.log(i);
        if (i == 100) {
            document.getElementById("showIt").innerHTML = " >> Scan Complete";
            $('#nextBtn').show();
        }
    }, 1000);
}]);
