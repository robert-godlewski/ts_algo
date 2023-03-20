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
// Solved in attempt solution - doesn't work
function isSymmetric(root: TreeNode | null): boolean {
    // preorder traverse through the right side
    function preorderTraversalRight(root: TreeNode | null, list: number[]=[]): number[] {
        if (root) {
            list.push(root.val);
            if (root.right) {
                list = preorderTraversalRight(root.right, list);
            };
            if (root.left) {
                list = preorderTraversalRight(root.left, list);
            };
        };
        return list;
    };
    if (root) {
        if (root.left && root.right) {
            var l_list: number[] = preorderTraversal(root.left);
            var r_list: number[] = preorderTraversalRight(root.right);
            if (l_list == r_list) {
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


export {
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    levelOrder,
    maxDepth,
    isSymmetric
};