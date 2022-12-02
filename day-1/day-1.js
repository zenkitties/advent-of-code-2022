const fs = require("fs");

const bigCals = []
let temp = 0;
const calories = fs
    .readFileSync('day1.txt')
    .toString()
    .split(`\r\n\r\n`)
    .map(cal => cal.split('\r\n'))

calories.map(cal => {
   const calorieGroup =  cal.reduce(function(acc, n){return parseInt(acc) + parseInt(n)})
   bigCals.push(parseInt(calorieGroup));
})

const highestCal = bigCals.map(cal => {
    temp < cal ? temp = cal : null;
    return temp;
}).pop()

console.log(`The highest caloried Elf has ${highestCal} calories on him. Get em!`)

// Save the extracted information to a json file
fs.writeFileSync("calories.json", JSON.stringify(bigCals));
