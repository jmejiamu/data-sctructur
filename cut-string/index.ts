//Cutting String

const substringSizes = (str: string): number[] => {
  const lastIndeces: { [char: string]: number } = {};
  const sizes: number[] = [];
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in lastIndeces) {
      const prevIndex = lastIndeces[char];
      sizes.push(i - start);
      start = prevIndex + 1;
    }

    lastIndeces[char] = i;
  }
  sizes.push(str.length) - start;
  return sizes;
};

const s = "abacbc";
console.log(substringSizes(s));
