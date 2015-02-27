newspaper.controller( 'ReportersCtrl', function ReportersCtrl($scope, $stateParams, $state, BeatsFactory) {
  $scope.BeatsFactory = BeatsFactory;
  $scope.beat = BeatsFactory.beats[parseInt($stateParams.beatId) - 1];

  $scope.addReporterandGoBack = function(){

    BeatsFactory.addReporter();
    $state.go("home");

  }

});
