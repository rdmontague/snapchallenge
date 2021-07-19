// Write a function in JavaScript that converts weights to grams. The function should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and return it.

const convertToGrams = (weight, units) => {
    let grams
    switch (units){
        case 'lbs':
            grams = weight * 454
            break
        case 'oz:':
            grams = weight * 454 * 16
            break
    }
    return grams
}

const coffeeWeight = convertToGrams(1, 'lbs')
console.log(coffeeWeight)

