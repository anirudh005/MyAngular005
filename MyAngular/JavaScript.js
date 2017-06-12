/// <reference path="C:\Users\Anirudh\Source\Repos\MyAngular\MyAngular\MyAngular\angular.js" />
var app = angular.module("Mymodule", [])
.controller("Mycontroller", function ($scope) {
    $scope.message = "this is from ngulaar ontroler"
    $scope.employees =
        [
        {
            "name": "Max",
            "age": "32",
            "occ": "Dentist"
        },
        {
            "name": "Jim",
            "age": "12",
            "occ": "Student"
        }
        ]
});
