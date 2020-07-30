/*
JavaScript Algorithms and Data Structures Masterclass
Bubble Sort
*/

const bubbleSort = (arr) => {
  const swap = (array, ind1, ind2) => {
    [array[ind1], array[ind2]] = [array[ind2], array[ind1]];
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}