const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if adding the next element exceeds the sum
    if (currentSum + arr[i] > n) {
      // Push the current subarray to the result
      result.push(currentSubarray);
      // Start a new subarray with the current element
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    } else {
      // Add the current element to the subarray
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    }
  }

  // Push the last subarray to the result
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Test case examples
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = 5;

console.log(JSON.stringify(divide(arr, n)));  // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]
