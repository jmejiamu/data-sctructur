class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const lowestCommonAncestor = (
  root: TreeNode | null,
  a: TreeNode,
  b: TreeNode
): TreeNode | null => {
  if (!root) return null;

  if (a.val < root.val && b.val < root.val) {
    return lowestCommonAncestor(root.left, a, b);
  } else if (a.val > root.val && b.val > root.val) {
    return lowestCommonAncestor(root.right, a, b);
  } else {
    return root;
  }
};

// Example usage
const root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(15);

const a = root.left.left;
const b = root.left.right;

const lca = lowestCommonAncestor(root, a, b);

if (lca) {
  console.log("Lowest Common Ancestor: ", lca.val);
} else {
  console.log("Lowest Common Ancestor not found");
}
