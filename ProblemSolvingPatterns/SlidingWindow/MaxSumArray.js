/**
 * Function to find the maximum sum of a subarray (contiguous elements) in the given array using the Sliding Window pattern.
 * @param {number[]} arr - The input array.
 * @returns {number} The maximum sum of a subarray.
 */
function maxSumSubarray(arr) {
  // Initialize the start and end pointers to the beginning of the array.
  let start = 0;
  let end = 0;
  // Initialize a variable to store the maximum sum.
  let maxSum = 0;
  // Initialize a variable to store the current sum.
  let currSum = 0;

  // Iterate through the array.
  while (end < arr.length) {
    // Add the current element to the current sum.
    currSum += arr[end];
    // Update the maximum sum if necessary.
    maxSum = Math.max(maxSum, currSum);
    // If the current sum is negative, reset it to 0 and move the start pointer to the next element.
    if (currSum < 0) {
      currSum = 0;
      start = end + 1;
    }
    // Move the end pointer to the next element.
    end++;
  }

  // Return the maximum sum.
  return maxSum;
}

// Test the function with an example array.
console.log(maxSumSubarray([1, -3, -5, 2, 1, -1, 4, -2, 5, -2])); //9
// wrong for negative maxSum values 