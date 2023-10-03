/******************
 * YOUR CODE HERE *
 ******************/


function colorDeconstructor(color){
  switch(color.toLowerCase()){
    case 'orange':
      return 'red and yellow'
    case 'purple':
      return 'red and blue'
    case 'green':
      return 'blue and yellow'
    default:
      return 'errorDeconstruct'
  }
}

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
