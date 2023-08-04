/**
 * House Robber Problem:
 * Given an array of non-negative integers representing the amount of money in each house, determine the maximum
 * amount of money you can rob without alerting the police. You cannot rob adjacent houses.
 *
 * @param {number[]} nums - An array of non-negative integers representing the amount of money in each house.
 * @return {number} - The maximum amount of money you can rob without alerting the police.
 */

var rob = function (nums, i = nums.length - 1, memo = []) {
  // Base case: If there are no more houses to rob, return 0.
  if (i < 0) return 0;

  // If the result for the current house 'i' has already been calculated and stored in the memo array,
  // return the stored value to avoid redundant calculations.
  if (memo[i] !== undefined) {
    return memo[i];
  }

  // The maximum amount of money you can rob at the current house 'i' is either:
  // 1. Robbing the current house and the maximum amount from the house two steps back (i - 2), or
  // 2. Skipping the current house and robbing the maximum amount from the previous house (i - 1).
  let result = Math.max(
    rob(nums, i - 2, memo) + nums[i],
    rob(nums, i - 1, memo)
  );

  // Store the result in the memo array to avoid redundant calculations for the same 'i'.
  memo[i] = result;

  // Return the maximum amount of money that can be robbed from the current house 'i'.
  return result;
};

// Sample array of house values
const houseValues = [2, 7, 9, 3, 1];

console.log("House values:", houseValues);
const maxAmount = rob(houseValues);
console.log("Maximum amount you can rob:", maxAmount);
