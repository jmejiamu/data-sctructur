class NodeTree {
  val: number;
  children: NodeTree[];
  constructor(val?: number, children?: NodeTree[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children || [];
  }
}

const postorder = (root: NodeTree | null): number[] => {
  if (!root) return [];

  const stack: NodeTree[] = [root];
  const result: number[] = [];

  while (stack.length > 0) {
    const node = stack.pop();

    result.unshift(node?.val!);

    for (const child of node?.children!) {
      stack.push(child);
    }
  }
  return result;
};

// Example usage
const root = new NodeTree(1);
root.children = [new NodeTree(3), new NodeTree(2), new NodeTree(4)];
root.children[0].children = [new NodeTree(5), new NodeTree(6)];

console.log(postorder(root));
