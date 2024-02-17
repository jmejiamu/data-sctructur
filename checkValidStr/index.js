var checkValidString = function (str) {
    var low = 0;
    var high = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char === "(") {
            low++;
            high++;
        }
        else if (char === ")") {
            low--;
            high--;
        }
        else {
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
