const logPerf = require("./logPerf")
const mySort = require("./sorting/mySort");
const { numbers, sortedNumber } = require("./sorting/array.json");

logPerf(mySort(numbers), mySort.name)