var app = angular.module('BinGoApp', []);
// 防止session跨域丢失
app.config(['$httpProvider', config]);
function config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}  
app.controller('MovieCtrl',
    function () {

    }
);

app.controller('LoginCtrl',
    function ($scope, $http) {
        $scope.submit = function () {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/user/login.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials:true,
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
        $scope.ageOptions = ["10后", "00后", "90后", "80后", "70后", "60后", "50后"];
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
                    answer: $scope.answer,
                    //gender: ($scope.gender==="男")?0:1,
                    //age:$scope.age,
                    password: $scope.password
                })
            }).then(function successCallback(response) {
                alert(response.data.msg);
                if (response.data.status === 0) {
                    window.location.href = '/Login/Questionnaire';
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    });

app.controller('UserInfoCtrl', function ($scope, $http) {
    // 登录时在session中存储了登录状态
    if (sessionStorage.getItem('loginStatus') != null) {
        // 获取登陆用户信息
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/user/get_user_info.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({})
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                $scope.user = response.data.data;
                $scope.newuser = response.data.data;
            }
        },
            function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        // 获取用户浏览历史

        // 获取用户推荐列表

    };
    // 修改用户信息相关函数
    $scope.Modify = function () {
        $('#modify').modal('show');
    }
    $scope.ensure = function () {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/user/update_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                email: $scope.newuser.email,
                phone: $scope.newuser.phone,
                question: $scope.newuser.question,
                answer: $scope.newuser.answer
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                alert(response.data.msg);
            } else {
                alert("对不起，修改失败！");
            }
            },
            function(errorresponse) {
                alert(errorresponse.data.msg);
            });
    }
});

app.controller('UserManageCtrl', function ($scope, $http) {
    // 用户修改自己的信息
});

app.controller('QuestionniareCtrl', function($scope, $http) {
    $scope.MoveTo = function() {
        window.location.href = '/Login/Login';
    }
});