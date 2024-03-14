//Cutting String
var substringSizes = function (str) {
    var lastIndeces = {};
    var sizes = [];
    var start = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char in lastIndeces) {
            var prevIndex = lastIndeces[char];
            sizes.push(i - start);
            start = prevIndex + 1;
        }
        lastIndeces[char] = i;
    }
    sizes.push(str.length) - start;
    return sizes;
};
var s = "abacbc";
console.log(substringSizes(s));
