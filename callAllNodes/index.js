var NodeTree = /** @class */ (function () {
    function NodeTree(val) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
    return NodeTree;
}());
var postorder = function (root) {
    if (!root)
        return [];
    var stack = [root];
    var result = [];
    while (stack.length > 0) {
        var node = stack.pop();
        result.unshift(node === null || node === void 0 ? void 0 : node.val);
        for (var _i = 0, _a = node === null || node === void 0 ? void 0 : node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            stack.push(child);
        }
    }
    return result;
};
// Example usage
var root = new NodeTree(1);
root.children = [new NodeTree(3), new NodeTree(2), new NodeTree(4)];
root.children[0].children = [new NodeTree(5), new NodeTree(6)];
console.log(postorder(root));
