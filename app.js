(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
       $scope.name = "Please enter your dish wish list.";

       $scope.feedLunch = function () {
          if ($scope.dishList == undefined){
             return $scope.name = "Please check your input!";
          }

         var numOfDishes = countDishlist($scope.dishList);
         
         if (numOfDishes < 4){
            return $scope.name = "Enjoy!";
         }
         else {
            return $scope.name = "Too much!";
         }
      };

      function countDishlist(string){
         var dishValue;
         dishValue = string.split(",").length;
         return dishValue;
      };

   };
    
    })();
    