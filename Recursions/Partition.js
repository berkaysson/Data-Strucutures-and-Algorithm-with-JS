/**
 * Generates all possible partitions of 'n' objects using parts up to 'm'.
 * A partition represents dividing 'n' objects into smaller groups where each group's size is at most 'm'.
 * @param {number} n - The total number of objects to partition.
 * @param {number} m - The maximum size of each part in the partition.
 * @returns {Array<Array<number>>} An array containing all possible valid partitions.
 */

const Partition = (n, m) => {
  if (n === 0)
    return [[]]; // Return an array containing an empty partition as a base case
  else if (m === 0 || n < 0)
    return []; // Return an empty array for invalid cases
  else {
    const partitions = [];

    // Case 1: (m + (n-m, m))
    const partitionsWithM = Partition(n - m, m).map((subPartition) => [
      m,
      ...subPartition,
    ]);
    partitions.push(...partitionsWithM);

    // Case 2: (n, m-1)
    const partitionsWithoutM = Partition(n, m - 1);
    partitions.push(...partitionsWithoutM);

    return partitions;
  }
};

console.log(Partition(5, 3));
