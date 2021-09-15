(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
       $scope.name = "Brani";
       $scope.placeText = "Banana, apple, orange";
    
   
       $scope.feedLunch = function () {
         $scope.name = "Cevap";
       };
     }
    
    })();
    