const logPerf = require("./logPerf")
const mySort = require("./sorting/mySort");
const insertionSort = require("./sorting/insertionSort");
const { numbers, sortedNumber } = require("./sorting/array.json");

console.log(numbers);
logPerf(insertionSort(numbers), insertionSort.name)
console.log(numbers)
logPerf(mySort(numbers), mySort.name)