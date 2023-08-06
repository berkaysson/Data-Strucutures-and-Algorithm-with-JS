/**
 * Function to find the maximum average of a contiguous subarray of length k in the given array.
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The length of the contiguous subarray.
 * @return {number} - The maximum average of a contiguous subarray of length k.
 */
var findMaxAverage = function(nums, k) {
  // Initialize two pointers to represent the left and right ends of the subarray.
  let left = 0;
  let right = k - 1;

  // Initialize variables to keep track of the sum of the current subarray and the maximum sum found so far.
  let sum = 0;
  let maxSum = -Infinity;

  // Iterate until the right pointer goes beyond the end of the array.
  while (right < nums.length) {
      // Add the value at the left pointer to the sum.
      sum += nums[left];

      // If the left and right pointers are equal, it means we have completed a subarray of length k.
      // So, we move the right pointer one step ahead and reset the left pointer to include the next subarray.
      if (left === right) {
          right++;
          left = left - k + 2; // Move left pointer to the next position to start a new subarray.
          maxSum = Math.max(maxSum, sum); // Update the maximum sum found so far.
          sum = 0; // Reset the sum for the new subarray.
      } else {
          left++; // Move the left pointer to include the next element in the current subarray.
      }
  }

  // Return the maximum average by dividing the maximum sum by the length of the subarray (k).
  return maxSum / k;
};

// Example usage of the findMaxAverage function with an array.
const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
const maxAverage = findMaxAverage(nums, k);
console.log(maxAverage); // Output: 12.75
