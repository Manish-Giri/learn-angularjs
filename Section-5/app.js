// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function($scope) {
    console.log($scope);

    $scope.name = "Jane Doe";
    $scope.getName = function() { return "Hi, " + this.name};

}]);
