const sum = require('./sum')
const concat = require('./Concat')

const SortedArray = require('sorted-array-async');

const instance = new SortedArray(concat)

instance.getArray().then(arr => {
    let sortedArray = arr
    console.log(`The concat sorted is : ${sortedArray}`);
})

console.log(`The sum of the array is : ${sum}`);
console.log(`The concat array is : ${concat}`);

