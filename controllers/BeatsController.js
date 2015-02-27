newspaper.controller("BeatsCtrl", function BeatsCtrl($scope, $stateParams, BeatsFactory){

  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;


});
