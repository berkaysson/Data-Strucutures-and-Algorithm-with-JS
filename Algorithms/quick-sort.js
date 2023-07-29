/**
 * Quick sort algorithm to sort an array of numbers in ascending order.
 * @param {Array<number>} array - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function quickSort(array) {
  // Base case: If the array has 1 or 0 elements, it is already sorted.
  if (array.length <= 1) return array;

  // Choose the pivot element (in this implementation, the last element).
  const pivot = array[array.length - 1];

  // Initialize two arrays to hold elements less than the pivot (leftArr) and greater than or equal to the pivot (rightArr).
  let leftArr = [];
  let rightArr = [];

  // Iterate through the array, excluding the pivot element (last element).
  for (let i = 0; i < array.length - 1; i++) {
    // If the current element is less than the pivot, add it to the leftArr.
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      // If the current element is greater than or equal to the pivot, add it to the rightArr.
      rightArr.push(array[i]);
    }
  }

  // Recursively apply quickSort to both the leftArr and rightArr, and concatenate them with the pivot element in the middle.
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example unsorted array.
const arr = [5, 2, 8, 1, 10, 4, 6, 3, 7, 9];

// Call the quickSort function to sort the array.
const sortedArr = quickSort(arr);

// Print the sorted array.
console.log(sortedArr);
