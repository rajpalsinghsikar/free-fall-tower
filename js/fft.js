angular.module("fft", ["experimentsData"])
.controller("massController", function($scope){
    $scope.lMass=10;
    $scope.rMass=10;
});


.controller("getTD", function ($scope) {
    $scope.data = [];
    data.push("{\"Object Name\", \"Mass\", \"Environment\", \"Time taken for the free fall\"}");
    data.push("foot-ball","$scope.lMass","Air", "20sec");
});