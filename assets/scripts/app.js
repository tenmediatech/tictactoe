'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Creating matrix board
  var matrix = [];
  for(var i=0; i<3; i++) {
    matrix[i] = [];
    for (var j=0; j<3; j++) {
        matrix[i][j] = undefined;
    }
}
})
