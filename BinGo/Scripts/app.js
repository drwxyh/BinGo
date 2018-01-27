var app = angular.module('myApp', []);
app.controller('myCtrl',
    function ($scope, $http) {
        $http.get("/Test/GetMovie")
            .then(function(response) {
                $scope.movies = response.data;
            });
    });