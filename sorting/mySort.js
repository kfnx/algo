function mySort(array) {
  let arr = array.slice() // copy value
  arr.forEach(() => {
    arr.forEach(() => {
      arr.forEach((item, index) => {
        if (arr[index + 1] && item > arr[index + 1]) {
          arr.splice(index, 1);
          arr.push(item);
        }
      });
    });
  });
  return arr
}

module.exports = mySort;