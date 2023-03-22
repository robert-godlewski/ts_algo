// Binary Tree algorithms solved in Mar 2023
import {TreeNode} from "./BinaryTreeTools";
import {ListNode} from "./LinkedListTools";
import {LinkedQueue} from "./QueueStackTools";


// Binary Tree Preorder Traversal
// Solved in 15 min
// O(1) time solution
// O(n) space solution
function preorderTraversal(root: TreeNode | null, list: number[]=[]): number[] {
    if (root) {
        list.push(root.val);
        if (root.left) {
            list = preorderTraversal(root.left, list);
        };
        if (root.right) {
            list = preorderTraversal(root.right, list);
        };
    };
    return list;
};

// Binary Tree Inorder Traversal
// Solved in 10 min
// O(1) time solution
// O(n) space solution
function inorderTraversal(root: TreeNode | null, list: number[]=[]): number[] {
    if (root) {
        if (root.left) {
            list = inorderTraversal(root.left, list);
        };
        list.push(root.val);
        if (root.right) {
            list = inorderTraversal(root.right, list);
        };
    };
    return list;
};

// Binary Tree Postorder Traversal
// Solved in 10 min
// O(1) time solution
// O(n) space solution
function postorderTraversal(root: TreeNode | null, list: number[]=[]): number[] {
    if (root) {
        if (root.left) {
            list = postorderTraversal(root.left, list);
        };
        if (root.right) {
            list = postorderTraversal(root.right, list);
        };
        list.push(root.val);
    };
    return list;
};

// Binary Tree Level Order Traversal
// Solution - Need to review
// O(n**2) Time and space solution
function levelOrder(root: TreeNode | null): number[][] {
    var list: number[][] = [];
    if (root) {
        var queue = new LinkedQueue();
        queue.enQueue(root);
        while (queue.front()) {
            var levelLen: number = queue.size;
            var level: number[] = [];
            for (var i: number = 0; i < levelLen; i++) {
                var node: TreeNode | null = queue.deQueue();
                if (node) {
                    level.push(node.val);
                    if (node.left) {
                        queue.enQueue(node.left);
                    };
                    if (node.right) {
                        queue.enQueue(node.right);
                    };
                };
            };
            if (level.length > 0) {
                list.push(level);
            };
        };
    };
    return list;
};

// Maximum Depth of a Binary Tree
// Solved in 15 min
// O(1) Time solution
// O(n) Space solution
function maxDepth(root: TreeNode | null, depth: number=1, cur_depth: number=1): number {
    if (root) {
        if (cur_depth > depth) {
            depth++;
        };
        if (root.left) {
            depth = maxDepth(root.left, depth, cur_depth+1);
        };
        if (root.right) {
            depth = maxDepth(root.right, depth, cur_depth+1);
        };
        return depth;
    } else {
        return 0;
    };
};

// Symmetric Tree
// Solved over 1hr
// O(n) time and space solution
function isSymmetric(root: TreeNode | null): boolean {
    // preorder traverse through the left side
    function preorderTraversalLeft(root: TreeNode | null, list: number[]=[]): number[] {
        if (root) {
            list.push(root.val);
            if (root.left) {
                list = preorderTraversalLeft(root.left, list);
            } else {
                // Need to push in anything as a null val
                list.push(0);
            };
            if (root.right) {
                list = preorderTraversalLeft(root.right, list);
            } else {
                // Need to push in anything as a null val
                list.push(0);
            };
        };
        return list;
    };

    // preorder traverse through the right side
    function preorderTraversalRight(root: TreeNode | null, list: number[]=[]): number[] {
        if (root) {
            list.push(root.val);
            if (root.right) {
                list = preorderTraversalRight(root.right, list);
            } else {
                // Need to push in anything as a null val
                list.push(0);
            };
            if (root.left) {
                list = preorderTraversalRight(root.left, list);
            } else {
                // Need to push in anything as a null val
                list.push(0);
            };
        };
        return list;
    };

    // Where the actual checking of the 2 lists starts
    if (root) {
        if (root.left && root.right) {
            var l_list: number[] = preorderTraversalLeft(root.left);
            var r_list: number[] = preorderTraversalRight(root.right);
            if (l_list.length == r_list.length) {
                for (var i: number = 0; i < l_list.length; i++) {
                    if (l_list[i] != r_list[i]) {
                        return false;
                    };
                };
                return true;
            } else {
                return false;
            };
        } else if (root.left || root.right) {
            return false;
        } else {
            return true;
        };
    } else {
        return false;
    };
};

// Path Sum
// Solved in 20 min
// O(1) time solution
// O(n) space solution
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    var hasPath: boolean = false;
    if (root) {
        if (root.left) {
            hasPath = hasPathSum(root.left, targetSum-root.val);
        };
        if (root.right && hasPath == false) {
            hasPath = hasPathSum(root.right, targetSum-root.val);
        };
        if (root.val == targetSum && !root.left && !root.right) {
            return true;
        };
    };
    return hasPath;
};


export {
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    levelOrder,
    maxDepth,
    isSymmetric,
    hasPathSum
};