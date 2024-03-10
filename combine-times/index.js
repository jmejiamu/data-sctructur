/**
 * Given a list of interval object,
 * merge all overlapping intervals and return the result.
Note: an interval object is a simple object that contains
a start time and end time and can be constructed by passing
a starting and ending time to the constructor
 */
var merge = function (intervals) {
    if (intervals.length <= 1)
        return intervals;
    intervals.sort(function (a, b) { return a.start - b.start; });
    var mergedIntervals = [intervals[0]];
    for (var i = 1; i < intervals.length; i++) {
        var currentInterval = intervals[i];
        var previousInterval = mergedIntervals[mergedIntervals.length - 1];
        if (currentInterval.start <= previousInterval.end) {
            previousInterval.end = Math.max(previousInterval.end, currentInterval.end);
        }
        else {
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
};
var intervals = [
    { start: 1, end: 3 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
    { start: 15, end: 18 },
];
console.log(merge(intervals));
