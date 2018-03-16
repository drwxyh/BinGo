var app = angular.module('BinGoApp', []);
// 防止session跨域丢失
app.config(['$httpProvider', config]);
function config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}

app.controller('MovieCtrl', function ($scope, $http) {
    // 根据关键字，获取各个类别的电影列表
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: 'Action'
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.ActionList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: 'War'
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.WarList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: 'History'
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.HistoryList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: "Comedy"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.ComedyList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: "Mystery"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.MysteryList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: "Musical"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.MusicalList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: "Romance"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.RomanceList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            movie_keyword: "Sci-Fi"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.SciFiList = response.data.data.list;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
});

app.controller('LoginCtrl', function ($scope, $http) {
    $scope.submit = function () {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/user/login.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            withCredentials: true,
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

app.controller('RegisterCtrl', function ($scope, $http) {
    $scope.gender = "男";
    $scope.genderOptions = ["男", "女"];
    $scope.age = "90后";
    $scope.ageOptions = ["10后", "00后", "90后", "80后", "70后", "60后", "50后"];
    $scope.Register = function () {
        var sex = 1;
        if ($scope.gender === "女") {
            sex = 0;
        }
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
                sex: ($scope.gender === "男") ? 1 : 0,
                age: $scope.age,
                password: $scope.password
            })
        }).then(function successCallback(response) {
            alert(response.data.msg);
            if (response.data.status === 0) {
                // window.location.href = '/Register/Questionnaire';
                window.location.href = '/Login/Login';
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

        // 获取用户推荐列表
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/user/get_recommend.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({})
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                $scope.recommendMovies = response.data.data;
            }
        },
            function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
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
            function (errorresponse) {
                alert(errorresponse.data.msg);
            });
    }
});

app.controller('UserManageCtrl', function ($scope, $http) {
    $scope.gender = "男";
    $scope.genderOptions = ["男", "女"];
    $scope.age = "90后";
    $scope.ageOptions = ["10后", "00后", "90后", "80后", "70后", "60后", "50后"];
    // 存储用户信息
    $scope.users = [];
    $scope.selPage = 1;
    // 获取用户列表
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/user/list.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageSize: 20,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        alert(response.data.msg);
        if (response.data.status === 0) {
            $scope.users = response.data.list;
            $scope.pages = response.data.pages;
            $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
            $scope.pageList = [];
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    // 添加模态框
    $scope.add = function() {
        $('#add').modal('show');
    }
    $scope.upload = function() {
        // 将用户信息上传
    }
    // 详情模态框
    $scope.detail = function(id) {
        $('#info').modal('show');
    }
    // 修改模态框
    $scope.update = function(id) {
        $('#modify').modal('show');
        // 显示用户信息
    }
    $scope.ensure = function(id) {
        // 将用户信息传回数据库
    }
    // 删除
    $scope.delete = function(id) {

    }
    //分页要repeat的数组
    for (var i = 0; i < $scope.NewPages; i++) {
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
        return $scope.selPage == page;
    };
    //上一页
    $scope.Previous = function () {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/user/list.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                pageSize: 10,
                pageNum: $scope.selPage - 1
            })
        }).then(function successCallback(response) {
            alert(response.data.msg);
            if (response.data.status === 0) {
                $scope.movies = response.data.list;
                $scope.pages = response.data.pages;
                $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
                $scope.pageList = [];
                $scope.selPage = 1;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    //下一页
    $scope.Next = function () {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/user/list.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                pageSize: 10,
                pageNum: $scope.selPage + 1
            })
        }).then(function successCallback(response) {
            alert(response.data.msg);
            if (response.data.status === 0) {
                $scope.movies = response.data.list;
                $scope.pages = response.data.pages;
                $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
                $scope.pageList = [];
                $scope.selPage = 1;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    };
});

app.controller('QuestionniareCtrl', function ($scope, $http) {
    $scope.MoveTo = function () {
        window.location.href = '/Login/Login';
    }
});

app.controller('SearchCtrl', function ($scope, $http) {
    // 根据搜索关键字显示电影列表
    $scope.Search = function () {
        alert(2);
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088//movie/showlistByName.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                pageSize: 20,
                pageNum: 1,
                movie_name: $scope.searchText
            })
        }).then(function successCallback(response) {
            alert(response.data.msg);
            if (response.data.status === 0) {
                alert(JSON.stringify(response));
                //$scope.total = response.data.total;
                //$scope.pages = response.data.pages;
                //$scope.movieList = response.data.list;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
});

app.controller('MovieInfoCtrl', function ($scope, $http) {
    $scope.$watch("movieId", function () {
        // alert($scope.movieId);
        // 根据电影Id获取电影详情
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/manage/movie/get_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_id: $scope.movieId
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                // alert(JSON.stringify(response));
                $scope.movie = response.data.data;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
        // 获取电影类似的5部电影
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8088/movie/showSimMovies.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_id: $scope.movieId
            })
        }).then(function successCallback(response) {
            alert(response.data.msg);
            if (response.data.status === 0) {
                $scope.movieList = response.data;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    });
});