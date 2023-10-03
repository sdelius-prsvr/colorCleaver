/******************
 * YOUR CODE HERE *
 ******************/


function isValidPrimary(color){
  if(color !== undefined){
    switch(color.toLowerCase()){
      case 'blue': return true
      case 'red': return true
      case 'yellow': return true
      default: return false
    }
  }else{
    return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
