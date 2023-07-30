/**
 * Merge sort algorithm to sort an array of numbers in ascending order.
 * @param {Array<number>} array - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
const mergeSort = (array) => {
  // Base case: If the array has 1 or 0 elements, it is already sorted.
  if (array.length < 2) return array;

  // Find the middle index of the array.
  const mid = Math.floor(array.length / 2);

  // Split the array into two halves (left and right).
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively apply mergeSort to both halves, and then merge the sorted halves.
  return merge(mergeSort(left), mergeSort(right));
};

/**
 * Merge two sorted arrays into a single sorted array.
 * @param {Array<number>} left - The left half of the array to be merged.
 * @param {Array<number>} right - The right half of the array to be merged.
 * @returns {Array<number>} The merged and sorted array.
 */
const merge = (left, right) => {
  const sortedArr = []; // Initialize an empty array to store the merged and sorted elements.

  // Compare elements from both arrays and merge them in ascending order.
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift()); // Remove the first element from left and push it to the sorted array.
    } else {
      sortedArr.push(right.shift()); // Remove the first element from right and push it to the sorted array.
    }
  }

  // After the loop, one of the arrays may still have elements left.
  // Append the remaining elements from both arrays to the sorted array.
  return [...sortedArr, ...left, ...right];
};

// Example unsorted array.
const arr = [5, 2, 8, 1, 10, 4, 6, 3, 7, 9];

// Call the mergeSort function to sort the array.
const result = mergeSort(arr);

// Print the sorted array.
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
