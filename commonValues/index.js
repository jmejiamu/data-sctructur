var commonValues = function (nums1, nums2) {
    var map1 = {};
    var result = [];
    for (var _i = 0, nums1_1 = nums1; _i < nums1_1.length; _i++) {
        var num = nums1_1[_i];
        map1[num] = true;
    }
    for (var _a = 0, nums2_1 = nums2; _a < nums2_1.length; _a++) {
        var num = nums2_1[_a];
        if (map1[num]) {
            result.push(num);
            delete map1[num];
        }
    }
    return result;
};
//Example usage:
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log("Common values : ", commonValues(nums1, nums2));
