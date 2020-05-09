function insertionSort(arr) {
  let array = arr.slice(); // copy value
  let i = 1;
  while (i < array.length) {
    let x = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > x) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = x;
    i = i + 1;
  }
  return array;
}

module.exports = insertionSort;
