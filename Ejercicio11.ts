interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  
  function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
      return true;
    }
    return areMirrors(root.left, root.right);
  }
  
  function areMirrors(node1: TreeNode | null, node2: TreeNode | null): boolean {

    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    return areMirrors(node1.left, node2.right) && areMirrors(node1.right, node2.left);
  }

  const symmetricTree: TreeNode = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  };
 
  const result1 = isSymmetric(symmetricTree);
  console.log("¿El árbol 1 es simétrico?", result1); 
  
