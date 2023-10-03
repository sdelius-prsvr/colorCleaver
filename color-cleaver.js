const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!


const color1 = getInput(1)
const color2 = getInput(2)
const tooMuch = getInput(3)



if (isValidPrimary(color1) && isValidPrimary(color2) && tooMuch === undefined && color1 !== color2){
        return console.log("Combining " + color1.toLowerCase() + " and " + color2.toLowerCase() + " produces " + colorCombinator(color1, color2) + ". Go ahead and picture your favorite shade of " + colorCombinator(color1, color2) + " with just the right amounts of " + color1.toLowerCase() + " and " + color2.toLowerCase() + " to be just the way you want it. Isn't it lovely? Remember, it's your painting, so it can be any shade of " + colorCombinator(color1, color2) + " you want. Whatever makes you feel best.")
    }else if(isValidSecondary(color1) && color2 === undefined){
        return console.log((color1.toLowerCase())[0].toUpperCase() + (color1.toLowerCase()).substring(1) + " is the combination of " + colorDeconstructor(color1) + ". Now imagine your favorite shades of " + color1.toLowerCase() + ", " + colorDeconstructor(color1) + " on your canvas together like part of a rainbow going whichever way you want. Aren't they pretty there together like a happy family? Imagine how proud " + colorDeconstructor(color1) + " must be standing there with their child, " + color1.toLowerCase() + ".")
    }else{
        return console.log("To deconstruct a color, just enter one secondary color. To combine two colors, go ahead and input any two primary colors. Or, you don't have to. Remember, it's your canvas, your painting. Maybe you'd like to take some #0a3410, mix in some #102e3c or #c79b00, and some #4e1500, and go paint some happy little trees. I know I'd like to. Then we can pretend there's a family of squirrels living in them. Wouldn't that be nice?")
    }

