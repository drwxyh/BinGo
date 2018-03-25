var app = angular.module('BinGoApp', ['jkAngularRatingStars']);
// 防止session跨域丢失
app.config(['$httpProvider', config]);
function config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}

app.controller('MovieCtrl', function ($scope, $http) {
    $scope.ActionCurOrderType = "";
    $scope.ActionCurPage = 1;
    $scope.WarCurOrderType = "";
    $scope.WarCurPage = 1;
    $scope.HistoryCurOrderType = "";
    $scope.HistoryCurPage = 1;
    $scope.ComedyCurOrderType = "";
    $scope.ComedyCurPage = 1;
    $scope.MysteryCurOrderType = "";
    $scope.MysteryCurPage = 1;
    $scope.MusicalCurOrderType = "";
    $scope.MusicalCurPage = 1;
    $scope.RomanceCurOrderType = "";
    $scope.RomanceCurPage = 1;
    $scope.SciFiCurOrderType = "";
    $scope.SciFiCurPage = 1;
    $scope.AllCurOrderType = "";
    $scope.AllCurPage = 1;
    $scope.Next = function (page, category) {
        switch (category) {
            case "Action":
                if (page < $scope.ActionTotalPages) $scope.ActionCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.ActionCurPage,
                            orderBy: $scope.ActionCurOrderType,
                            movie_keyword: 'Action'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.ActionList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "War":
                if (page < $scope.WarTotalPages) $scope.WarCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.WarCurPage,
                            orderBy: $scope.WarCurOrderType,
                            movie_keyword: 'War'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.WarList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "History":
                if (page < $scope.HistoryTotalPages) $scope.HistoryCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.HistoryCurPage,
                            orderBy: $scope.HistoryCurOrderType,
                            movie_keyword: 'History'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.HistoryList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Comedy":
                if (page < $scope.ComedyTotalPages) $scope.ComedyCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.ComedyCurPage,
                            orderBy: $scope.ComedyCurOrderType,
                            movie_keyword: 'Comedy'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.ComedyList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Mystery":
                if (page < $scope.MysteryTotalPages) $scope.MysteryCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.MysteryCurPage,
                            orderBy: $scope.MysteryCurOrderType,
                            movie_keyword: 'Mystery'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.MysteryList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Musical":
                if (page < $scope.MusicalTotalPages) $scope.MusicalCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.MusicalCurPage,
                            orderBy: $scope.MusicalCurOrderType,
                            movie_keyword: 'Musical'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.MusicalList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Romance":
                if (page < $scope.RomanceTotalPages) $scope.RomanceCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.RomanceCurPage,
                            orderBy: $scope.RomanceCurOrderType,
                            movie_keyword: 'Romance'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.RomanceList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Sci-Fi":
                if (page < $scope.SciFiTotalPages) $scope.SciFiCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.SciFiCurPage,
                            orderBy: $scope.SciFiCurOrderType,
                            movie_keyword: 'Sci-Fi'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.SciFiList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "All":
                if (page < $scope.AllTotalPages) $scope.AllCurPage++ ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.AllCurPage,
                            orderBy: $scope.AllCurOrderType
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.AllList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
        }
    }
    $scope.Previous = function (page, category) {
        switch (category) {
            case "Action":
                if (page > 1) $scope.ActionCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.ActionCurPage,
                            orderBy: $scope.ActionCurOrderType,
                            movie_keyword: 'Action'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.ActionList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "War":
                if (page > 1) $scope.WarCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.WarCurPage,
                            orderBy: $scope.WarCurOrderType,
                            movie_keyword: 'War'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.WarList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "History":
                if (page > 1) $scope.HistoryCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.HistoryCurPage,
                            orderBy: $scope.HistoryCurOrderType,
                            movie_keyword: 'History'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.HistoryList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Comedy":
                if (page > 1) $scope.ComedyCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.ComedyCurPage,
                            orderBy: $scope.ComedyCurOrderType,
                            movie_keyword: 'Comedy'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.ComedyList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Mystery":
                if (page > 1) $scope.MysteryCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.MysteryCurPage,
                            orderBy: $scope.MysteryCurOrderType,
                            movie_keyword: 'Mystery'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.MysteryList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Musical":
                if (page > 1) $scope.MusicalCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.MusicalCurPage,
                            orderBy: $scope.MusicalCurOrderType,
                            movie_keyword: 'Musical'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.MusicalList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Romance":
                if (page > 1) $scope.RomanceCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.RomanceCurPage,
                            orderBy: $scope.RomanceCurOrderType,
                            movie_keyword: 'Romance'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.RomanceList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "Sci-Fi":
                if (page > 1) $scope.SciFiCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.SciFiCurPage,
                            orderBy: $scope.SciFiCurOrderType,
                            movie_keyword: 'Sci-Fi'
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.SciFiList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
            case "All":
                if (page > 1) $scope.AllCurPage-- ,
                    $http({
                        method: 'POST',
                        url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true,
                        data: $.param({
                            pageSize: 12,
                            pageNum: $scope.AllCurPage,
                            orderBy: $scope.AllCurOrderType
                        })
                    }).then(function successCallback(response) {
                        if (response.data.status === 0) {
                            $scope.AllList = response.data.data.list;
                        }
                    }, function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
                break;
        }
    }
    //更改页码时，刷新
    $scope.Reload = function (page, category) {
        switch (category) {
            case "Action": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.ActionCurOrderType,
                    movie_keyword: 'Action'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.ActionList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "War": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.WarCurOrderType,
                    movie_keyword: 'War'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.WarList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "History": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.HistoryCurOrderType,
                    movie_keyword: 'History'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.HistoryList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Comedy": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.ComedyCurOrderType,
                    movie_keyword: 'Comedy'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.ComedyList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Mystery": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.MysteryCurOrderType,
                    movie_keyword: 'Mystery'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.MysteryList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Musical": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.MusicalCurOrderType,
                    movie_keyword: 'Musical'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.MusicalList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Romance": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.RomanceCurOrderType,
                    movie_keyword: 'Romance'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.RomanceList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Sci-Fi": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.SciFiCurOrderType,
                    movie_keyword: 'Sci-Fi'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.SciFiList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "All": $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: page,
                    orderBy: $scope.AllCurOrderType
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.AllList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
        }
    }
    //更改排序方式时，触发
    $scope.Resort = function (orderType, category) {
        switch (category) {
            case "Action": $scope.ActionCurOrderType = orderType, $scope.ActionCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'Action'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.ActionList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "War": $scope.WarCurOrderType = orderType, $scope.WarCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'War'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.WarList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "History": $scope.HistoryCurOrderType = orderType, $scope.HistoryCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'History'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.HistoryList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Comedy": $scope.ComedyCurOrderType = orderType, $scope.ComedyCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'Comedy'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.ComedyList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Mystery": $scope.MysteryCurOrderType = orderType, $scope.MysteryCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'Mystery'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.MysteryList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Musical": $scope.MusicalCurOrderType = orderType, $scope.MusicalCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'Musical'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.MusicalList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Romance": $scope.RomanceCurOrderType = orderType, $scope.RomanceCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'Romance'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.RomanceList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Sci-Fi": $scope.SciFiCurOrderType = orderType, $scope.SciFiCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    pageNum: 1,
                    orderBy: orderType,
                    movie_keyword: 'Sci-Fi'
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.SciFiList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "All": $scope.AllCurOrderType = orderType, $scope.AllCurPage = 1, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                data: $.param({
                    pageSize: 12,
                    orderBy: orderType,
                    pageNum: 1
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.AllList = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
        }
    }
    // 根据关键字，获取各个类别的电影列表
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: 'Action'
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.ActionList = response.data.data.list;
            $scope.ActionTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: 'War'
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.WarList = response.data.data.list;
            $scope.WarTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: 'History'
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.HistoryList = response.data.data.list;
            $scope.HistoryTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: "Comedy"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.ComedyList = response.data.data.list;
            $scope.ComedyTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: "Mystery"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.MysteryList = response.data.data.list;
            $scope.MysteryTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: "Musical"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.MusicalList = response.data.data.list;
            $scope.MusicalTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: "Romance"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.RomanceList = response.data.data.list;
            $scope.RomanceTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlistByCategory.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1,
            movie_keyword: "Sci-Fi"
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.SciFiList = response.data.data.list;
            $scope.SciFiTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true,
        data: $.param({
            pageSize: 12,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.AllList = response.data.data.list;
            $scope.AllTotalPages = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
});

app.controller('LoginCtrl', function ($scope, $http) {
    if (sessionStorage.getItem('loginStatus') === null) {
        $scope.submit = function () {
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/user/login.do',
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
                    sessionStorage.setItem('userId', response.data.data.id);
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
            url: 'http://wangj1106.imwork.net:26943/user/regist.do',
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

app.controller('UserInfoCtrl', function ($scope, $http, $filter) {
    $scope.genderOptions = ["男", "女"];
    $scope.ageOptions = ["10后", "00后", "90后", "80后", "70后", "60后", "50后"];
    // 登录时在session中存储了登录状态
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/user/get_user_info.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({})
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.user = response.data.data;
            if ($scope.user.sex === 1) {
                $scope.gender = '男';
                $scope.img = "http://10.6.12.98:6305/Images/Portrait/lebron-james.jpg";
            } else {
                $scope.gender = '女';
                $scope.img = "http://10.6.12.98:6305/Images/Portrait/girl.jpg";
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
        url: 'http://wangj1106.imwork.net:26943/user/get_recommend.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.movies = response.data.data;
        }
    },
        function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    // 获取用户最近评论电影
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/rating/userRatingList.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageNum: 1,
            pageSize: 5
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.rating_movies = response.data.data.list;
            angular.forEach($scope.rating_movies,
                function (obj) {
                    obj.creating_time = new Date();
                    $filter("date")(obj.creating_time.valueOf(), "yyyy-MM-dd HH:mm:ss");
                });
        }
    },
        function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    // 修改用户密码相关函数
    $scope.PasswordModify = function () {
        $('#pmodify').modal('show');
    }
    $scope.PasswordModifyCommit = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/user/reset_password.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                passwordOld: $scope.passwordOld,
                passwordNew: $scope.passwordNew
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                alert(response.data.msg);
                $('#pmodify').modal('hide');
            } else {
                alert("对不起，密码修改失败！");
            }
        },
            function (errorresponse) {
                alert(errorresponse.data.msg);
            });
    }
    // 修改用户信息相关函数
    $scope.InfoModify = function () {
        $('#imodify').modal('show');
    }
    $scope.InfoModifyCommit = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/user/update_information.do',
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
                $('#imodify').modal('hide');
            } else {
                alert("对不起，信息修改失败！");
            }
        },
            function (errorresponse) {
                alert(errorresponse.data.msg);
            });
    }
});

app.controller('ManageCtrl', function ($scope, $http) {
    $scope.genderOptions = ["男", "女"];
    $scope.ageOptions = ["10后", "00后", "90后", "80后", "70后", "60后", "50后"];
    // 存储用户信息
    $scope.users = [];
    $scope.UPage = 1;
    $scope.UTotal = 0;
    // 存储电影信息
    $scope.movies = [];
    $scope.MPage = 1;
    $scope.MTotal = 0;
    // 存储评论信息
    $scope.comments = [];
    $scope.CPage = 1;
    $scope.CTotal = 0;
    // 获取用户列表
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/manage/user/list.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageSize: 15,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        //alert(JSON.stringify(response));
        if (response.data.status === 0) {
            $scope.users = response.data.data.list;
            $scope.UTotal = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    // 获取电影列表
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageSize: 8,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.movies = response.data.data.list;
            $scope.MTotal = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    // 获取评论列表
    $http({
        method: 'POST',
        url: 'http://wangj1106.imwork.net:26943//manage/rating/ratingList.do',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
            pageSize: 10,
            pageNum: 1
        })
    }).then(function successCallback(response) {
        if (response.data.status === 0) {
            $scope.comments = response.data.data.list;
            $scope.CTotal = response.data.data.pages;
        }
    }, function errorCallback(errorresponse) {
        alert(errorresponse.data.msg);
    });
    // 详情模态框
    $scope.UDetail = function (id) {
        $('#uinfo').modal('show');
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/user/get_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                userId: id
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                $scope.cur = response.data.data;
                if ($scope.cur.sex === 1) {
                    $scope.gender = '男';
                } else {
                    $scope.gender = '女';
                }
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    // 修改模态框
    $scope.UUpdate = function (id) {
        $('#umodify').modal('show');
        // 显示用户信息
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/user/get_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                userId: id
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                $scope.cur = response.data.data;
                if ($scope.cur.sex === 1) {
                    $scope.gender = '男';
                } else {
                    $scope.gender = '女';
                }
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    $scope.UUpdateCommit = function () {
        // 将用户信息传回数据库
        var sex;
        if ($scope.gender === '男') {
            sex = 1;
        } else {
            sex = 0;
        }
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/user/update_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                id: $scope.cur.id,
                email: $scope.cur.email,
                phone: $scope.cur.phone,
                question: $scope.cur.question,
                answer: $scope.cur.answer,
                age: $scope.cur.age,
                sex: sex
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                alert("修改成功！");
                $('#umodify').modal('hide');
                $scope.Reload($scope.UPage, 'User');
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    // 删除
    $scope.UDelete = function (id, name) {
        $('#udelete').modal('show');
        $scope.uname = name;
        $scope.udeleteId = id;
    }
    $scope.UDeleteCommit = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/user/delete.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                userId: $scope.udeleteId
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                alert("删除用户成功！");
                $('#udelete').modal('hide');
                $scope.Reload($scope.UPage, 'User');
            } else {
                alert(JSON.stringify(response.data.msg));
                $('#udelete').modal('hide');
                $scope.Reload($scope.UPage, 'User');
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    // 更新页码
    $scope.Reload = function (page, type) {
        switch (type) {
            case "User": $scope.UPage = page, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/manage/user/list.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 15,
                    pageNum: $scope.UPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.users = response.data.data.list;
                    $scope.UTotal = response.data.data.pages;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
            case "Movie": $scope.MPage = page, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 8,
                    pageNum: $scope.MPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.movies = response.data.data.list;
                    $scope.MTotal = response.data.data.pages;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;

            case "Comment": $scope.MPage = page, $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/manage/rating/ratingList.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 10,
                    pageNum: $scope.CPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.comments = response.data.data.list;
                    $scope.CTotal = response.data.data.pages;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
                break;
        }
    }
    //上一页
    $scope.UPrevious = function () {
        if ($scope.UPage > 1) {
            $scope.UPage--;
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/manage/user/list.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 15,
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
                url: 'http://wangj1106.imwork.net:26943/manage/user/list.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 15,
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
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/movie/add.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_name: $scope.moviename,
                movie_director: $scope.moviedirector,
                movie_actor: $scope.movieactor,
                movie_language: $scope.movielanguage,
                type_id: 1,
                movie_district: $scope.moviedistrict,
                movie_date: $scope.moviedate,
                movie_keyword: $scope.moviekeyword,
                pic_url: $scope.moviepicture,
                movie_imdblid: $scope.movieimdblid,
                movie_time: $scope.movietime,
                movie_rating: 0,
                movie_numVotes: 0
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                alert("电影添加成功！");
                $('#madd').modal('hide');
                $scope.Reload($scope.MPage, 'Movie');
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    // 详情模态框
    $scope.MDetail = function (id) {
        $('#minfo').modal('show');
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/movie/get_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_id: id
            })
        }).then(function successCallback(response) {
            //alert(JSON.stringify(response));
            if (response.data.status === 0) {
                $scope.movie = response.data.data;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    // 修改模态框
    $scope.MUpdate = function (id) {
        $('#mmodify').modal('show');
        // 显示用户信息
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/movie/get_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_id: id
            })
        }).then(function successCallback(response) {
            //alert(JSON.stringify(response));
            if (response.data.status === 0) {
                $scope.movie = response.data.data;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    $scope.MUpdateCommit = function () {
        // 将用户信息传回数据库
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/movie/update_information.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_id: $scope.movie.movie_id,
                movie_name: $scope.movie.movie_name,
                movie_director: $scope.movie.movie_director,
                movie_actor: $scope.movie.movie_actor,
                movie_language: $scope.movie.movie_language,
                type_id: 1,
                movie_district: $scope.movie.movie_district,
                movie_date: $scope.movie.movie_date,
                movie_keyword: $scope.movie.movie_keyword,
                pic_id: $scope.movie.pic_id,
                movie_imdblid: $scope.movie.movie_imdblid,
                movie_time: $scope.movie.movie_time
            })
        }).then(function successCallback(response) {
            if (response.data.status === 0) {
                alert("电影信息修改成功！");
                $('#mmodify').modal('hide');
                $scope.Reload($scope.MPage, 'Movie');
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    // 删除电影
    $scope.MDelete = function (id, name) {
        $('#mdelete').modal('show');
        $scope.mname = name;
        $scope.mdeleteId = id;
    }
    $scope.MDeleteCommit = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/movie/delete.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                movie_id: $scope.mdeleteId
            })
        }).then(function successCallback(response) {
            if (response.data.status === 1) {
                alert("删除电影成功！");
                $('#mdelete').modal('hide');
                $scope.Reload($scope.MPage, 'Movie');
            } else {
                alert(JSON.stringify(response.data.msg));
                $('#mdelete').modal('hide');
                $scope.Reload($scope.MPage, 'Movie');
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    //上一页
    $scope.MPrevious = function () {
        if ($scope.MPage > 1) {
            $scope.MPage--;
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 8,
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
    // 删除评论
    $scope.CDelete = function (id) {
        $('#cdelete').modal('show');
        $scope.cdeleteId = id;
    }
    $scope.CDeleteCommit = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/manage/rating/deleteRating.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                ratingId: $scope.cdeleteId
            })
        }).then(function successCallback(response) {
            if (response.data.status === 1) {
                alert("删除评论成功！");
                $('#cdelete').modal('hide');
                $scope.Reload($scope.CPage, 'Comment');
            } else {
                alert(JSON.stringify(response.data.msg));
                $('#cdelete').modal('hide');
                $scope.Reload($scope.CPage, 'Comment');
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    //下一页
    $scope.MNext = function () {
        if ($scope.MPage < $scope.MTotal) {
            $scope.MPage++;
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/movie/showlist.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 8,
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

    //上一页
    $scope.CPrevious = function () {
        if ($scope.CPage > 1) {
            $scope.CPage--;
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/manage/rating/ratingList.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 10,
                    pageNum: $scope.MPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.comments = response.data.data.list;
                }
            }, function errorCallback(errorresponse) {
                alert(errorresponse.data.msg);
            });
        }
    }
    //下一页
    $scope.CNext = function () {
        if ($scope.CPage < $scope.CTotal) {
            $scope.CPage++;
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/manage/rating/ratingList.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    pageSize: 10,
                    pageNum: $scope.CPage
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.comments = response.data.data.list;
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
            url: 'http://wangj1106.imwork.net:26943//movie/showlistByName.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                pageSize: 36,
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

app.controller('MovieInfoCtrl', function ($scope, $http, $filter) {
    $scope.$watch("movieId",
        function () {
            var id = parseInt($scope.movieId);
            // 根据电影Id获取电影详情
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/manage/movie/get_information.do',
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
                url: 'http://wangj1106.imwork.net:26943/movie/showsimilarmovie.do',
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
            // 获取用户历史评价
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/rating/userRating.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    movieId: id
                })
            }).then(function successCallback(response) {
                if (response.data.status === 0) {
                    $scope.rate = response.data.data.rating;
                    $scope.comment = response.data.data.comment;
                }
            },
                function errorCallback(errorresponse) {
                    alert(errorresponse.data.msg);
                });
            // 用户评价
            $scope.Comment = function () {
                $http({
                    method: 'POST',
                    url: 'http://wangj1106.imwork.net:26943/rating/add.do',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: $.param({
                        movieId: id,
                        rating: $scope.rate,
                        comment: $scope.comment
                    })
                }).then(function successCallback(response) {
                    alert(JSON.stringify(response.data.msg));
                },
                    function errorCallback(errorresponse) {
                        alert(errorresponse.data.msg);
                    });
            }

            // 获取所有历史评价
            $http({
                method: 'POST',
                url: 'http://wangj1106.imwork.net:26943/rating/movieRatingList.do',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: $.param({
                    movieId: id,
                    pageNum: 1,
                    pageSize:10
                })
            }).then(function successCallback(response) {
                    if (response.data.status === 0) {
                        $scope.comments = response.data.data.list;
                        angular.forEach($scope.comments,
                            function (obj) {
                                obj.creating_time = new Date();
                                $filter("date")(obj.creating_time.valueOf(), "yyyy-MM-dd HH:mm:ss");
                            });
                    }
                },
                function errorCallback(errorresponse) {
                    alert(errorresponse.data.msg);
                });
        });

});

app.controller('ForgetCtrl', function ($scope, $http) {
    $scope.SearchName = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/user/forget_get_question.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                username: $scope.username
            })
        }).then(function successCallback(response) {
            if (response.data.status === 1) {
                alert(JSON.stringify(response.data.msg));
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    $scope.SearchAnswer = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/user/forget_check_answer.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                username: $scope.username,
                question: $scope.question,
                answer: $scope.answer
            })
        }).then(function successCallback(response) {
            if (response.data.status === 1) {
                alert(JSON.stringify(response.data.msg));
            }
            if (response.data.status === 0) {
                $scope.token = response.data.data;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    $scope.SearchAnswer = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/user/forget_check_answer.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                username: $scope.username,
                question: $scope.question,
                answer: $scope.answer
            })
        }).then(function successCallback(response) {
            if (response.data.status === 1) {
                alert(JSON.stringify(response.data.msg));
            }
            if (response.data.status === 0) {
                $scope.forgetToken = response.data.data;
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
    $scope.ResetPassword = function () {
        $http({
            method: 'POST',
            url: 'http://wangj1106.imwork.net:26943/user/forget_reset_password.do',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({
                username: $scope.username,
                passwordNew: $scope.password,
                forgetToken: $scope.forgetToken
            })
        }).then(function successCallback(response) {
            alert(JSON.stringify(response.data.msg));
            if (response.data.status === 0) {
                window.location.href = '/Login/Login';
            }
        }, function errorCallback(errorresponse) {
            alert(errorresponse.data.msg);
        });
    }
});
