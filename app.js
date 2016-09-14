(function(){
  "use strict"

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.text;
    $scope.message;
    $scope.button = function(){
      if ( $scope.text === undefined ||
            $scope.text.length === 0 ) {
        $scope.message =  "Please enter data first";
      } else {

        var input = $scope.text.split(",");
        var striped = [];
        for( var i=0, j= input.length; i < j; i++ ) {
          if ( input[i].trim() !== "" ) {
            striped.push(input[i]);
          }
        }

        if ( striped.length <= 3 ) {
          $scope.message =  "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }

    };
  }
})();
