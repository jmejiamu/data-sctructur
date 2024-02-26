const commonValues = (nums1: number[], nums2: number[]): number[] => {
  const map1: { [key: number]: boolean } = {};
  const result: number[] = [];

  for (const num of nums1) {
    map1[num] = true;
  }

  for (const num of nums2) {
    if (map1[num]) {
      result.push(num);
      delete map1[num];
    }
  }
  return result;
};

//Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log("Common values : ", commonValues(nums1, nums2));
