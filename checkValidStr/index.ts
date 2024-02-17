const checkValidString = (str: string): boolean => {
  let low = 0;
  let high = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      low++;
      high++;
    } else if (char === ")") {
      low--;
      high--;
    } else {
      low--;
      high++;
    }
    if (high < 0) {
      return false;
    }
    low = Math.max(low, 0);
  }

  return low === 0;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
console.log(checkValidString(")("));
