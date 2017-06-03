var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
var textReplaced = text.replace('Velociraptor', dinosaur.toUpperCase());
console.log(textReplaced.substr(0, textReplaced.length/2));
