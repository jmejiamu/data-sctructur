var minMoves = function (nums) {
    var minNum = Math.min.apply(Math, nums);
    var moves = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        moves += num - minNum;
    }
    return moves;
};
//Example usage
var nums = [1, 2, 3];
console.log(minMoves(nums));
