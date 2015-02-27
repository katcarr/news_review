var newspaper = angular.module("newspaper", ['ui.router']);


newspaper.config(function($stateProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "BeatsCtrl"
  });

  $stateProvider.state('home.beats', {
    url: "/beats.html",
    templateUrl: "partials/home.beats.html",
    controller: "BeatsCtrl"
  });
});
