const validAnagram = (firstWord: string, secondWord: string): boolean => {
  if (firstWord.length !== secondWord.length) return false;

  const lookup: { [key: string]: number } = {};

  for (let i = 0; i < firstWord.length; i++) {
    const letter = firstWord[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < secondWord.length; i++) {
    const letter = secondWord[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

// Sample usage:

console.log(validAnagram("anagram", "anagram"));
