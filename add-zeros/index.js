/**
 * Given an array of integers, nums,
 * duplicate the occurrence of each zero in the array by
 * shifting other non-zero elements to the right.
Note: The modification to nums must be done in-place,
do not return anything from your function, and
elements beyond the length of the original array not not written.
 */
var duplicateZeros = function (nums) {
    var n = nums.length;
    var i = 0;
    while (i < n) {
        if (nums[i] === 0) {
            for (var j = n - 1; j > i; j--) {
                nums[j] = nums[j - 1];
            }
            i++;
        }
        i++;
    }
};
var nums = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(nums);
console.log(nums);
