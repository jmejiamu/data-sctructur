/**
 * Given a list of words and an integer k,
 * return the top k most frequent words in the list.
 * If multiple words have the same frequency, sort them lexicographically.
 */

const topkFrequenWords = (words: string[], k: number): string[] => {
  const frequencyObj: { [key: string]: number } = {};

  for (const word of words) {
    if (frequencyObj[word]) {
      frequencyObj[word]++;
    } else {
      frequencyObj[word] = 1;
    }
  }

  const frequencyArray = Object.keys(frequencyObj).map((word) => ({
    word,
    freq: frequencyObj[word],
  }));

  frequencyArray.sort((a, b) => {
    if (a.freq === b.freq) {
      return a.word.localeCompare(b.word);
    }
    return a.freq - b.freq;
  });

  return frequencyArray.slice(0, k).map((entry) => entry.word);
};

const words = ["tez", "daily", "byte", "tez"];
const k = 1;
const result = topkFrequenWords(words, k);
console.log(result);
