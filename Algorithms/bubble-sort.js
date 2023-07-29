/**
 * Bubble sort algorithm to sort an array of numbers in ascending order.
 * @param {Array<number>} array - The array to be sorted.
 * @returns {object} An object containing the sorted array ('sortedArr') and the number of steps taken during the sorting process ('steps').
 */
function bubbleSort(array) {
  let isSorted = false; // Flag to indicate whether the array is sorted or not.
  let newArray = array; // Create a new reference to the original array (not a deep copy).
  let steps = 0; // Variable to count the number of steps taken during sorting.

  // Continue the sorting process until the array is sorted (isSorted becomes true).
  while (!isSorted) {
    let prevArray = [...newArray]; // Make a copy of the array before each iteration.

    // Iterate through the array to compare adjacent elements and swap them if needed.
    for (let i = 0; i < newArray.length; i++) {
      let currentItem = newArray[i];
      let nextItem = newArray[i + 1];
      if (currentItem > nextItem) {
        // Swap the elements using array destructuring if they are in the wrong order.
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
        steps++; // Increment the steps counter for each swap operation.
      }
    }

    // Check if the array has been sorted by comparing the previous and current arrays.
    if (JSON.stringify(prevArray) === JSON.stringify(newArray)) {
      isSorted = true; // The array is sorted; exit the loop.
    }
  }

  // Return an object containing the sorted array and the number of steps taken.
  return { sortedArr: newArray, steps };
}

// Example unsorted array.
const arr = [5, 2, 8, 1, 10, 4, 6, 3, 7, 9];

// Call the bubbleSort function to sort the array.
const result = bubbleSort(arr);

// Print the sorted array.
console.log(result.sortedArr);

// Print the number of steps taken during the sorting process.
console.log(result.steps);
