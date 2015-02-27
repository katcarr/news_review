newspaper.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};

  factory.beats = [];

  factory.addBeat = function(){
    var beat = {name: factory.beatName};
    factory.beats.push(beat);
    factory.beatName = null;

  };

  return factory;
});
