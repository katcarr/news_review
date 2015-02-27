newspaper.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  var reporterForm = true;

  factory.beats = [];

  factory.addBeat = function(){
    var beat = {name: factory.beatName, id: factory.beats.length + 1};
    factory.beats.push(beat);
    factory.beatName = null;
  };

  return factory;
});
