// An array to store previously calculated Fibonacci values for memoization.
const prevValues = [];

/**
 * Recursive function to calculate the nth Fibonacci number.
 * @param {number} value - The position of the Fibonacci number to calculate.
 * @param {Array<number>} prevValues - An array to store previously calculated Fibonacci values for memoization.
 * @returns {number} The nth Fibonacci number.
 */
const Fibonacci = (value, prevValues = []) => {
  let result;

  // If the Fibonacci value for the given position (value) is already calculated and stored in the prevValues array, use it.
  if (prevValues[value]) {
    result = prevValues[value];
  } else if (value <= 2) {
    // Base case: The first two Fibonacci numbers are both 1.
    result = 1;
  } else {
    // Recursive case: Calculate the Fibonacci value using recursion and memoization.
    result = Fibonacci(value - 1, prevValues) + Fibonacci(value - 2, prevValues);
  }

  // Memoize the calculated result by storing it in the prevValues array.
  prevValues[value] = result;

  return result;
};

// Example: Calculate the 1129th Fibonacci number.
console.log(Fibonacci(1129));
