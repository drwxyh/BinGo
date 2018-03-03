var app = angular.module('BinGoApp', []);
app.controller('MovieCtrl',
    function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://localhost:1365/api/movies'
        })
            .then(function (response) {
                $scope.movies = response.data;
                $scope.pageSize = 5;
                $scope.pages = Math.ceil($scope.movies.length / $scope.pageSize); //分页数
                $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
                $scope.pageList = [];
                $scope.selPage = 1;
                //设置表格数据源(分页)
                $scope.setData = function () {
                    $scope.items = $scope.movies.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
                }
                $scope.items = $scope.movies.slice(0, $scope.pageSize);
                //分页要repeat的数组
                for (var i = 0; i < $scope.newPages; i++) {
                    $scope.pageList.push(i + 1);
                }
                //打印当前选中页索引
                $scope.selectPage = function (page) {
                    //不能小于1大于最大
                    if (page < 1 || page > $scope.pages) return;
                    //最多显示分页数5
                    if (page > 2) {
                        //因为只显示5个页数，大于2页开始分页转换
                        var newpageList = [];
                        for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                            newpageList.push(i + 1);
                        }
                        $scope.pageList = newpageList;
                    }
                    $scope.selPage = page;
                    $scope.setData();
                    $scope.isActivePage(page);
                    console.log("选择的页：" + page);
                };
                //设置当前选中页样式
                $scope.isActivePage = function (page) {
                    return ($scope.selPage === page);
                };
                //上一页
                $scope.Previous = function () {
                    $scope.selectPage($scope.selPage - 1);
                }
                //下一页
                $scope.Next = function () {
                    $scope.selectPage($scope.selPage + 1);
                };
            });
    });

app.controller('LoginCtrl',
    function ($scope, $http) {
        $scope.Submit = function () {
            $http.post("http://localhost:1365/token", $.param({
                username: $scope.username,
                password: $scope.password,
                grant_type: 'password'
            }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(
                function successCallback(response) {
                    sessionStorage.setItem('accessToken', response.access_Token);
                    sessionStorage.setItem('username', $scope.username);
                    window.location.href = '/Home/User';
                },
                function errorCallback(errorResponse) {
                    alert("登录失败！");
                }
                );
        }
    });

app.controller('RegisterCtrl',
    function ($scope, $http) {
        $scope.Register = function () {
            $http.post("http://localhost:1365/api/account/register", $.param({
                email: $scope.email,
                password: $scope.password,
                confirmPassword: $scope.cpassword
            }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(
                function successCallback(response) {
                },
                function errorCallback(errorResponse) {
                    alert('注册成功请登录！');
                }
                );
        }
    });

app.controller('UserCtrl', function ($scope, $http) {
    // 获取用户浏览历史

    // 获取用户推荐列表
});