var subarraySum = function (nums, k) {
    var count = 0;
    var sum = 0;
    var map = new Map();
    map.set(0, 1);
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};
// Example usage
var nums = [1, 1, 1];
var k = 2;
console.log(subarraySum(nums, k));
