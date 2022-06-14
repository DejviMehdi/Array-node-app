const sumArray = require('./Concat')
let sum = 0;
sumArray.forEach(element => sum+= element)
console.log(sum);
module.exports = sum