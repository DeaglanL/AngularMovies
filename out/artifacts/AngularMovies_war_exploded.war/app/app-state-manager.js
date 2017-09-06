"use strict";

(function () {

    angular.module('mov').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/movie");

        $stateProvider.state("movie", {
            url: "/movie",
            templateUrl: "app/features/movie/movie.html"
        }).state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/features/dashboard/dashboard.html"
        })
    });
}());