var newspaper = angular.module("newspaper", ['ui.router']);


newspaper.config(function($stateProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "BeatsCtrl"
  });

  $stateProvider.state('beats', {
    url: "/beats/:beatId",
    templateUrl: "partials/beats.html",
    controller: "ReportersCtrl"
  });

  // $stateProvider.state('beats.reporters', {
  //   url:"",
  //   templateUrl: "partials/beats.reporters.html",
  //   controller: "ReportersCtrl"
  // });

});
