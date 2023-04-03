// Runs the leetcode binary tree and binary search tree problems
import {
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    levelOrder, 
    maxDepth,
    isSymmetric,
    hasPathSum,
    isValidBST,
    searchBST,
    insertIntoBST,
    deleteNode
} from './binarytrees_202303';

import {TreeNode} from './BinaryTreeTools';

// Testing out preorder
function preorderTraversalTest(root: TreeNode | null): void {
    var preorderList: number[] = preorderTraversal(root);
    console.log(`The preorder list = [${preorderList}]`);
};

// Testing out inorder
function inorderTraversalTest(root: TreeNode | null): void {
    var inorderList: number[] = inorderTraversal(root);
    console.log(`The inorder list = [${inorderList}]`);
};

// Testing out postorder
function postorderTraversalTest(root: TreeNode | null): void {
    var postorderList: number[] = postorderTraversal(root);
    console.log(`The postorder list = [${postorderList}]`);
};

// Testing out levelOrder
function levelOrderTest(root: TreeNode | null): void {
    var levelOrderList: number[][] = levelOrder(root);
    console.log(`The level order list = [${levelOrderList}]`);
};

// Testing out maxDepth
function BTdepthTest(root: TreeNode | null): void {
    var depth: number = maxDepth(root);
    console.log(`The maximum depth of this list = ${depth}`);
};

// Testing out isSymmetric
function symmetricTest(root: TreeNode | null): void {
    var symmetric: boolean = isSymmetric(root);
    var message: string = `Is the given tree starting with`;
    if (root) {
        message += ` ${root.val}`;
    } else {
        message += ` null`;
    };
    message += ` is symmetrical? ${symmetric}`;
    console.log(message);
};

// Testing out hasPathSum
function pathSumTest(root: TreeNode | null, targetSum: number): void {
    var pathSumQ: boolean = hasPathSum(root, targetSum);
    console.log(`Does this tree have a path sum? ${pathSumQ}`);
};

// Testing isValidBST
function validBTtest(root: TreeNode | null): void {
    var valid: boolean = isValidBST(root);
    var message: string = `Is this binary tree starting with `
    if (root) {
        message += `${root.val}`
    } else {
        message += 'none'
    }
    message += ` a valid search tree? ${valid}`;
    console.log(message);
};

// Testing searchBST
function searchBSTtest(root: TreeNode | null, val: number): void {
    var answer: TreeNode | null = searchBST(root, val);
    var message: string = 'We have ';
    if (answer && root) {
        message += `found ${val} in (root) -> ${root.val} tree = ${answer.val}`;
    } else if (root) {
        message += `not found ${val} in (root) -> ${root.val} tree`;
    } else {
        message += `not been able to find ${val} in (root) -> null`;
    };
    console.log(message);
};

// Testing insertIntoBST
function insertBSTtest(root: TreeNode | null, val: number): void {
    var answer: TreeNode | null = insertIntoBST(root, val);
    var message: string = `Inserted ${val} into (root) -> `;
    if (root) {
        message += `${root.val}`;
    } else if (!root && answer) {
        message += `null => ${answer.val}`
    };
    message += ' tree'
    console.log(message);
};

// Testing deleteNode - need to fix this
function deleteBSTtest(root: TreeNode | null, key: number): void {
    var answer: TreeNode | null = deleteNode(root, key);
    var message: string = `Delete ${key} from (root) -> `;
    //
};

export {
    preorderTraversalTest,
    inorderTraversalTest,
    postorderTraversalTest,
    levelOrderTest,
    BTdepthTest,
    symmetricTest,
    pathSumTest,
    validBTtest,
    searchBSTtest,
    insertBSTtest
};