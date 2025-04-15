interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  
  function levelOrder(raiz: TreeNode | null): number[][] {
    if (!raiz) {
      return [];
    }
  
    const result: number[][] = [];
    const queue: TreeNode[] = [raiz];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel: number[] = [];
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift()!; 
        currentLevel.push(currentNode.val);
  
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
  
      result.push(currentLevel);
    }
  
    return result;
  }
  
  const raiz: TreeNode = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };
  
  const levels = levelOrder(raiz);
  console.log(levels); 