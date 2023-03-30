// Binary Tree algorithms solved in Mar 2023
// Binary Search Tree algorithms solved in Mar 2023
import {TreeNode} from "./BinaryTreeTools";
import {LinkedQueue} from "./QueueStackTools";

// Group from Binary Tree

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


// Group from Binary Search Tree

// Validate Binary Search Tree
// Returns true if root.left.val < root.val and root.right.val > root.val
// Bad solution - doesn't work in leetcode for some reason
function isValidBST(root: TreeNode | null, valid: boolean=false): boolean {
    if (root) {
        if (root.left && root.val > root.left.val) {
            valid = isValidBST(root.left, true);
        } else if (root.left) {
            return false;
        };
        if (root.right && root.val < root.right.val) {
            valid = isValidBST(root.right, true);
        } else if (root.right) {
            return false;
        };
        return valid;
    };
    // Defaults to false
    return false;
};

// Search in a Binary Search Tree
// Solved in 20 min
// O(1) time solution
// O(n) space solution
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root) {
        var node: TreeNode | null = null;
        if (root.val == val) {
            return root;
        } else if (root.val > val) {
            node = searchBST(root.left, val);
        } else if (root.val < val) {
            node = searchBST(root.right, val);
        };
        return node;
    } else {
        return null;
    };
};

// Insert into a Binary Search Tree
// Solved in 20 min
// O(1) time solution
// O(n) space solution
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root) {
        if (val < root.val && root.left) {
            root.left = insertIntoBST(root.left, val);
        } else if (val > root.val && root.right) {
            root.right = insertIntoBST(root.right, val);
        } else if (val < root.val) {
            root.left = new TreeNode(val);
        } else if (val > root.val) {
            root.right = new TreeNode(val);
        };
    } else {
        root = new TreeNode(val);
    };
    return root;
};

// Delete Node in BST
// Bad solution - This doesn't actually do anything acording to leetcode
function deleteNodeOLD(root: TreeNode | null, key: number): TreeNode | null {
    if (root) {
        var switched: boolean = false;
        if (root.val == key) {
            if (root.left && root.right) {
                // 2 child case
                // Returns the bottom left most node of the given routing
                function findChildNode(root: TreeNode | null): TreeNode | null {
                    if (root) {
                        var node: TreeNode | null = null;
                        if (root.left) {
                            node = findChildNode(root.left);
                        };
                        if (root.right && !node) {
                            node = findChildNode(root.right);
                        };
                        return node;
                    };
                    return root;
                };
                // Checks the validity if the given node is ok to replace the cur node
                function validNode(node: TreeNode | null, cur: TreeNode | null): boolean {
                    if (node && cur) {
                        if (cur.left && cur.right) {
                            if (node.val > cur.left.val && node.val <= cur.right.val) {
                                return true;
                            };
                        };
                    };
                    return false;
                };
                // Actually swaps 2 nodes
                function swapNodes(nodein: TreeNode | null, nodeout: TreeNode | null): TreeNode | null {
                    if (nodein && nodeout) {
                        nodein.left = nodeout.left;
                        if (nodein != nodeout.right) {
                            nodein.right = nodeout.right;
                        };
                    };
                    return nodein;
                };
                var temp_node: TreeNode | null = findChildNode(root.right);
                var val_temp: boolean = validNode(temp_node, root);
                if (val_temp && temp_node) {
                    root = swapNodes(temp_node, root);
                    switched = true;
                } else {
                    temp_node = findChildNode(root.left.right);
                    val_temp = validNode(temp_node, root);
                    if (val_temp && temp_node) {
                        root = swapNodes(temp_node, root);
                        switched = true;
                    };
                };
            } else if (root.right) {
                // 1 child case on the right
                return root.right;
            } else if (root.left) {
                // 1 child case on the left
                return root.left;
            } else {
                // 0 child case
                return null;
            };
        };
        // Still finding the key
        if (root && root.left && !switched) {
            root.left = deleteNode(root.left, key);
        };
        if (root && root.right && !switched) {
            root.right = deleteNode(root.right, key);
        };
    };
    return root;
};

// Delete Node in BST
// O(1) best time solution
// O(nlogn) worst time solution
// O(nlogn) space solution
// This is still a bad solution in leetcode
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    function findLeaf(root: TreeNode): TreeNode {
        while (root && root.left) {
            root = root.left
        };
        return root;
    };
    if (root) {
        if (root.val == key) {
            if (!root.left && !root.right) {
                return null;
            } else if (root.left && !root.right) {
                return root.left;
            } else if (root.right && !root.left) {
                return root.right;
            } else {
                var leaf: TreeNode = root;
                if (root.right) {
                    // This will always be true
                    leaf = findLeaf(root.right);
                    root.right = deleteNode(root.right, leaf.val)
                    leaf.left = root.left;
                    leaf.right = root.right;
                    root = leaf;
                };
            };
        } else if (root.left && root.val < key) {
            root.left = deleteNode(root.left, key);
        } else if (root.right && root.val > key) {
            root.right = deleteNode(root.right, key);
        };
    };
    return root;
};


export {
    // Binary Tree Algorithms
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    levelOrder,
    maxDepth,
    isSymmetric,
    hasPathSum,
    // Binary Search Tree Algorithms
    isValidBST,
    searchBST,
    insertIntoBST,
    deleteNode
};