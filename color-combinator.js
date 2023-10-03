/******************
 * YOUR CODE HERE *
 ******************/


function colorCombinator(color1, color2){
  if(color1.toLowerCase() === 'red'){
    switch(color2.toLowerCase()){
      case 'blue':
        return 'purple'
      case 'yellow':
        return 'orange'
      default:
        return 'errorCombine'
    }
  }else if(color1.toLowerCase() === 'yellow'){
    switch(color2.toLowerCase()){
      case 'red':
        return 'orange'
      case 'blue':
        return 'green'
      default:
        return 'errorCombine'
    }
  }else if(color1.toLowerCase() === 'blue'){
    switch(color2.toLowerCase()){
      case 'red':
        return 'purple'
      case 'yellow':
        return 'green'
      default:
        return 'errorCombine'
    }
  }else{
    return 'errorCombine'
  }
}



// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;

