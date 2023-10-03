/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(color){
  if(color !== undefined){
    switch(color.toLowerCase()){
      case 'purple': return true
      case 'orange': return true
      case 'green': return true
      default: return false
    }
  }else{
    return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
