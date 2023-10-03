const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!


const color1 = getInput(1)
const color2 = getInput(2)
const tooMuch = getInput(3)



if (tooMuch !== undefined || color1 === undefined){
    return console.log('To deconstruct, please enter one secondary color. To combine, please enter two primary colors.')
}else if(isValidSecondary(color1) && color2 === undefined){
    return console.log((color1.toLowerCase())[0].toUpperCase() + (color1.toLowerCase()).substring(1) + " is the combination of " + colorDeconstructor(color1) + ".")
}else if(isValidPrimary(color1) && isValidPrimary(color2)){
    return console.log('yes')
}

console.log(isValidPrimary(color1))
console.log(isValidSecondary(color1))
console.log(colorCombinator(color1, color2))
console.log(colorDeconstructor(color1))