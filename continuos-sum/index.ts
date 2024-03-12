const subarraySum = (nums: number[], k: number): number => {
  let count = 0;
  let sum = 0;

  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};

// Example usage
const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k));
