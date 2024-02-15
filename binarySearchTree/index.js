var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var lowestCommonAncestor = function (root, a, b) {
    if (!root)
        return null;
    if (a.val < root.val && b.val < root.val) {
        return lowestCommonAncestor(root.left, a, b);
    }
    else if (a.val > root.val && b.val > root.val) {
        return lowestCommonAncestor(root.right, a, b);
    }
    else {
        return root;
    }
};
// Example usage
var root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(15);
var a = root.left.left;
var b = root.left.right;
var lca = lowestCommonAncestor(root, a, b);
if (lca) {
    console.log("Lowest Common Ancestor: ", lca.val);
}
else {
    console.log("Lowest Common Ancestor not found");
}
