function levelOrder(raiz) {
    if (!raiz) {
        return [];
    }
    var result = [];
    var queue = [raiz];
    while (queue.length > 0) {
        var levelSize = queue.length;
        var currentLevel = [];
        for (var i = 0; i < levelSize; i++) {
            var currentNode = queue.shift();
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
var raiz = {
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
var levels = levelOrder(raiz);
console.log(levels);
