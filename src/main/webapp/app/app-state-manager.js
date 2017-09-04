"use strict";

(function () {

    angular.module('mov').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/movie");

        $stateProvider.state("movie", {
            url: "/movie",
            templateUrl: "app/movie/movie.html"
        }).state("other", {
                url: "/dashboard",
                templateUrl: "app/feature/dashboard/dashboard.html"
        })
    });
}());