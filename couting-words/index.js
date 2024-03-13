/**
 * Given a list of words and an integer k,
 * return the top k most frequent words in the list.
 * If multiple words have the same frequency, sort them lexicographically.
 */
var topkFrequenWords = function (words, k) {
    var frequencyObj = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (frequencyObj[word]) {
            frequencyObj[word]++;
        }
        else {
            frequencyObj[word] = 1;
        }
    }
    var frequencyArray = Object.keys(frequencyObj).map(function (word) { return ({
        word: word,
        freq: frequencyObj[word]
    }); });
    frequencyArray.sort(function (a, b) {
        if (a.freq === b.freq) {
            return a.word.localeCompare(b.word);
        }
        return a.freq - b.freq;
    });
    return frequencyArray.slice(0, k).map(function (entry) { return entry.word; });
};
var words = ["tez", "daily", "byte", "tez"];
var k = 1;
var result = topkFrequenWords(words, k);
console.log(result);
