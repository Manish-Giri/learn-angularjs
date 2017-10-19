/**
 * Created by manishgiri on 10/18/2017.
 */
// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$location', function($scope, $log, $location) {
    $scope.name = "Jane Doe";
    $log.info($location.path());

    console.info($location.path());
}]);