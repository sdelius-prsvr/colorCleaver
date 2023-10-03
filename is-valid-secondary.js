/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(color){
  switch(color.toLowerCase()){
    case 'purple': return true
    case 'orange': return true
    case 'green': return true
    default: return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
