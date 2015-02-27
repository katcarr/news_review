newspaper.factory('BeatsFactory', function BeatsFactory($stateParams) {
  var factory = {};
  var reporterForm = true;

  factory.beats = [];

  factory.addBeat = function(){
    var beat = {name: factory.beatName, id: factory.beats.length + 1, reporters: []};
    factory.beats.push(beat);
    factory.beatName = null;
  };

  factory.addReporter = function(){
    var reporter = {name: factory.reporterName, employmentYears: factory.employmentYears, birthdate: factory.birthdate}
    factory.beats[parseInt($stateParams.beatId) -1].reporters.push(reporter);
    factory.reporterName = null;
    factory.employmentYears = null;
    factory.birthdate = null;
  };

  return factory;
});
