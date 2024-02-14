var validAnagram = function (firstWord, secondWord) {
    if (firstWord.length !== secondWord.length)
        return false;
    var lookup = {};
    for (var i = 0; i < firstWord.length; i++) {
        var letter = firstWord[i];
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    for (var i = 0; i < secondWord.length; i++) {
        var letter = secondWord[i];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
};
// Sample usage:
console.log(validAnagram("anagram", "anagram"));
