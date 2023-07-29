// Binary search algorithm to find if a value exists in a sorted array.
// @param {Array<number>} array - The sorted array to search in.
// @param {number} value - The value to search for in the array.
// @param {number} low - The starting index of the current search range. (Default: 0)
// @param {number} high - The ending index of the current search range. (Default: array.length - 1)
// @param {number} steps - The number of steps taken during the search process. (Default: 0)
// @returns {object} An object containing 'found' (true if the value is found, false otherwise) and 'steps' (number of steps taken during the search).
function binarySearch(
  array,
  value,
  low = 0,
  high = array.length - 1,
  steps = 0
) {
  if (array.length === 0 || low>high) {
    steps++; // Increment the steps for the base case.
    return { found: false, steps };
  } else {
    steps++; // Increment the steps for each iteration.

    let midIndex = Math.floor((low + high) / 2);
    let midValue = array[midIndex];

    if (value === midValue) {
      return { found: true, steps }; // Value found.
    } else if (value < midValue) {
      return binarySearch(array, value, low, midIndex - 1, steps); // Search the left half of the array.
    } else {
      return binarySearch(array, value, midIndex + 1, high, steps); // Search the right half of the array.
    }
  }
}

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return { found: true, steps: i + 1 };
  }
  return { found: false, steps: array.length + 1 };
}

// Define an array of sorted integers and value to find.
const arr = [
  1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41,
  43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79,
  81, 83, 85, 87, 89, 91, 93, 95, 97, 99,
];
const valueToFind = 67;

// Call the binarySearch function to find if the value exists in the array and count the steps taken.
const result = binarySearch(arr, valueToFind);
const linearResult = linearSearch(arr, valueToFind);

// Print the result of the binary search.
console.log("Value Found:", result.found);
console.log("Number of Steps with binary:", result.steps);
console.log("Number of Steps with linear:", linearResult.steps);