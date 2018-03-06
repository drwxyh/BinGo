var app = angular.module('BinGoApp', []);
app.controller('MovieCtrl',
    function() {

    }
);

app.controller('LoginCtrl',
    function ($scope, $http) {
        $scope.submit = function() {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/user/login.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    username: $scope.username,
                    password: $scope.password
                })
            }).then(function successCallback(response) {
                alert(response.data.msg);
                if (response.data.status === 0) {
                    sessionStorage.setItem('loginStatus', 1);
                    sessionStorage.setItem('username', $scope.username);
                    window.location.href = '/Home/User';
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    });

app.controller('RegisterCtrl',
    function ($scope, $http) {
        $scope.gender = "男";
        $scope.ageOptions = ["男", "女"];
        $scope.age = "90后";
        $scope.ageOptions = ["10后","00后","90后","80后","70后","60后","50后"];
        $scope.Register = function () {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/user/regist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    username: $scope.username,
                    email: $scope.email,
                    phone: $scope.phone,
                    question: $scope.question,
                    answer:$scope.answer,
                    //gender: ($scope.gender==="男")?0:1,
                    //age:$scope.age,
                    password: $scope.password
                })
            }).then(function successCallback(response) {
                alert(response.data.msg);
                if (response.data.status === 0) {
                    window.location.href = '/Login/Login';
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    });

app.controller('UserInfoCtrl', function ($scope, $http) {
    // 获取用户浏览历史

    // 获取用户推荐列表
});

app.controller('UserManageCtrl', function($scope, $http) {
    // 用户修改自己的信息
});