const findErrorNums = (nums: number[]): [number, number] => {
  nums.sort((a, b) => a - b);

  let duplicates = -1;
  let missing = -1;

  for (let i = 0; i < nums.length; i++) {
    //Checking for duplicates
    if (nums[i] === nums[i + 1]) {
      duplicates = nums[i];
    }
    //Checking for missing values
    if (nums[i + 1] - nums[i] > 1) {
      missing = nums[i] + 1;
    }
  }

  //Edge case for missing values at the end
  if (nums[nums.length - 1] !== nums.length) {
    missing = nums.length;
  }

  return [duplicates, missing];
};
//Example usage
const num = [1, 2, 2, 4];
const [duplicate, missing] = findErrorNums(num);
console.log("Duplicates:", duplicate);
console.log("Missing:", missing);

//PROBLEM
/**
 * You are given a dataset represented as an integer array,
 * nums that contains values between one and n.
 * Inside the data set, an error has occurred such that one of the values between one and n has been duplicated to another number between one and n.
 * Because of this, one of the values between one and n appears twice and one value does not appear at all. Return the missing value and the values that appears twice.
 */
