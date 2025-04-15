function sumLeafNodes(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return root.val;
    }
    var sum = 0;
    if (root.left) {
        sum += sumLeafNodes(root.left);
    }
    if (root.right) {
        sum += sumLeafNodes(root.right);
    }
    return sum;
}
var root = {
    val: 5,
    left: {
        val: 3,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: null,
            right: null,
        },
    },
    right: {
        val: 8,
        left: null,
        right: {
            val: 10,
            left: null,
            right: null,
        },
    },
};
var leafSum = sumLeafNodes(root);
console.log("La suma de los valores de las hojas es:", leafSum);
