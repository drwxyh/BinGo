var app = angular.module('BinGoApp', ['jkAngularRatingStars']);
// 防止session跨域丢失
app.config(['$httpProvider', config]);
function config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}
// 星级评分


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
    if (sessionStorage.getItem('loginStatus') === null) {
        $scope.submit = function() {
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
                        sessionStorage.setItem('role', response.data.data.role);
                        sessionStorage.setItem('username', $scope.username);
                        window.location.href = '/Home/User';
                    }
                },
                function errorCallback(errorresponse) {
                    alert(errorresponse.data.msg);
                });
        }
    } else {
        alert("您已经登录，无法重复登录！");
        window.location.href = '/Home/Index';
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
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/user/get_user_info.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({})
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.user = response.data.data;
            if ($scope.user.sex === 1) {
                $scope.img = "http://localhost:6305/Images/Portrait/lebron-james.jpg";
            } else {
                $scope.img = "http://localhost:6305/Images/Portrait/girl.jpg";
            }
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
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.movies = response.data.data;
        }
    },
        function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });

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

app.controller('ManageCtrl', function ($scope, $http) {
    $scope.gender = "男";
    $scope.genderOptions = ["男", "女"];
    $scope.age = "90后";
    $scope.ageOptions = ["10后", "00后", "90后", "80后", "70后", "60后", "50后"];
    $scope.movietype = "动作";
    $scope.movietime = 120;
    $scope.typeOptions = ["动作", "战争", "历史", "喜剧", "悬疑", "音乐", "爱情", "科幻"];
    $scope.timeOptions = [90, 100, 110, 120, 130, 140, 150, 160];
    // 存储用户信息
    $scope.users = [];
    $scope.UPage = 1;
    $scope.UTotal = 0;
    // 存储电影信息
    $scope.movies = [];
    $scope.MPage = 1;
    $scope.MTotal = 0;
    // 获取用户列表
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088/manage/user/list.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageSize: 20,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            //alert(JSON.stringify(response));
            $scope.users = response.data.data.list;
            $scope.UTotal = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    // 获取电影列表
    $http({
        method: 'POST',
        url: 'http://127.0.0.1:8088//movie/showlist.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageSize: 10,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.movies = response.data.data.list;
            $scope.MTotal = response.data.data.pages;
            //alert($scope.MTotal);
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });

    // 详情模态框
    $scope.UDetail = function (id) {
        $('#uinfo').modal('show');

    }
    // 修改模态框
    $scope.UUpdate = function (id) {
        $('#umodify').modal('show');
        // 显示用户信息
    }
    $scope.UEnsure = function (id) {
        // 将用户信息传回数据库
    }
    // 删除
    $scope.UDelete = function (id, name) {
        alert("删除用户:" + name);
    }
    //上一页
    $scope.UPrevious = function () {
        if ($scope.UPage > 1) {
            $scope.UPage--;
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/manage/user/list.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 20,
                    pageNum: $scope.UPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.users = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    }
    //下一页
    $scope.Next = function () {
        if ($scope.UPage < $scope.UTotal) {
            $scope.UPage++;
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/manage/user/list.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 20,
                    pageNum: $scope.UPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.users = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    };

    // 添加模态框
    $scope.MAdd = function () {
        $('#madd').modal('show');
    }
    $scope.MUpload = function () {
        // 将用户信息上传
    }
    // 详情模态框
    $scope.MDetail = function (id) {
        $('#minfo').modal('show');

    }
    // 修改模态框
    $scope.MUpdate = function (id) {
        $('#mmodify').modal('show');
        // 显示用户信息
    }
    $scope.MEnsure = function (id) {
        // 将用户信息传回数据库
    }
    // 删除
    $scope.MDelete = function (id, name) {
        alert("删除用户:" + name);
    }
    //上一页
    $scope.MPrevious = function () {
        if ($scope.MPage > 1) {
            $scope.MPage--;
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088//movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 10,
                    pageNum: $scope.MPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.movies = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    }
    //下一页
    $scope.MNext = function () {
        if ($scope.MPage < $scope.MTotal) {
            $scope.MPage++;
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088//movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 10,
                    pageNum: $scope.MPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.movies = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
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
            if (response.data.status === 0) {
                // alert(JSON.stringify(response));
                $scope.total = response.data.data.total;
                $scope.pages = response.data.data.pages;
                $scope.movieList = response.data.data.list;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
});

app.controller('MovieInfoCtrl', function ($scope, $http) {
    $scope.$watch("movieId",
        function () {
            var id = parseInt($scope.movieId);
            // 根据电影Id获取电影详情
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/manage/movie/get_information.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    movie_id: id
                })
            }).then(function successCallback(response) {
                // alert(JSON.stringify(response));
                if (response.data.status === 0) {
                    $scope.movie = response.data.data;
                    //alert($scope.movie.movie_star);
                }
            },
                function errorCallback(errorresponse) {
                    alert(errorresponse.data.msg);
                });
            // 获取电影类似的5部电影
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8088/movie/showsimilarmovie.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    movieId: id
                })
            }).then(function successCallback(response) {
                // alert(JSON.stringify(response));
                if (response.data.status === 0) {
                    $scope.movieList = response.data.data;
                }
            },
                function errorCallback(errorresponse) {
                    alert(errorresponse.data.msg);
                });
        });

});