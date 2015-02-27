newspaper.controller( 'ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory) {
  $scope.BeatsFactory = BeatsFactory;
  $scope.beat = BeatsFactory.beats[parseInt($stateParams.beatId) - 1];

});
