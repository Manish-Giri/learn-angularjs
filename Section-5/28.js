/**
 * Created by manishgiri on 10/19/2017.
 */

// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$location', function($scope, $log, $location) {
    $scope.name = "Main";
    $log.info($location.path());

    console.info($location.path());
}]);


angularApp.controller('mainController', ['$scope', '$log', '$location', function($scope, $log, $location) {
    $scope.name = "Second";
    $log.info($location.path());
}]);