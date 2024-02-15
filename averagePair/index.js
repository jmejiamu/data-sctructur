var averagePair = function (arr, num) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var avg = (arr[start] + arr[end]) / 2;
        if (avg === num)
            return true;
        else if (avg < num)
            start++;
        else
            end--;
    }
    return false;
};
console.log("Average: ", averagePair([1, 2, 3, 4, 5], 3.5));
