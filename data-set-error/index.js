var findErrorNums = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    var duplicates = -1;
    var missing = -1;
    for (var i = 0; i < nums.length; i++) {
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
var num = [1, 2, 2, 4];
var _a = findErrorNums(num), duplicate = _a[0], missing = _a[1];
console.log("Duplicates:", duplicate);
console.log("Missing:", missing);
