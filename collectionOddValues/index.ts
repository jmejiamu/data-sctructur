const collectionOddValues = (arr: number[]): number[] => {
  let newArr: number[] = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectionOddValues(arr.slice(1)));
  return newArr;
};

// Example usage:
console.log(collectionOddValues([1, 2, 3, 5, 6, 7, 8, 9]));
