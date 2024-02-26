/**
 * Given an array digits that represents a non-negative integer,
 * add one to the number and return the result as an array.
 *
 *
 */
var plusOne = function (digits) {
    var n = digits.length;
    for (var i = n - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift();
    return digits;
};
// Example usage:
console.log(plusOne([1, 2, 3]));
