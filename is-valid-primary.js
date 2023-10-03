/******************
 * YOUR CODE HERE *
 ******************/


function isValidPrimary(color){
  switch(color.toLowerCase()){
    case 'blue': return true
    case 'red': return true
    case 'yellow': return true
    default: return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
