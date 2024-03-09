const minMoves = (nums: number[]): number => {
  const minNum = Math.min(...nums);
  let moves = 0;

  for (const num of nums) {
    moves += num - minNum;
  }

  return moves;
};

//Example usage
const nums = [1, 2, 3];
console.log(minMoves(nums));

/**
 * You are given an array of integers nums.
 * In each move, you can increment any number in the array by one.
 * Find the minimum number of moves required to make all elements in the array equal,
 * where a move consists of incrementing any element by one.
 */
