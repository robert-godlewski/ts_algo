// Runs the leetcode recursion 2 problems
// Solution files
import {
    sortArray,
    isValidBST,
    searchMatrix
} from './recursive2_202306';

// Needed tools
import {
    TreeNode
} from './BinaryTreeTools';


// Testing sortArray - Merge Sort
function mergeSortArrayTest(): void {
    function mergeSortRun(nums: number[]): void {
        console.log(`Merge sorting [${nums}] to:`);
        var sorted: number[] = sortArray(nums);
        console.log(`[${sorted}]`);
    };
    mergeSortRun([5,2,3,1]);
    mergeSortRun([5,1,1,2,0,0]);
};

// Testing isValidBST
function validBSTtests(): void {
    function validBSTtest(root: TreeNode | null): void {
        var message: string = 'Is this tree with a root value of ';
        if (root) {
            message += `${root.val}`
        } else {
            message += 'null'
        };
        message += ' a valid binary search tree? ';
        var answer: boolean = isValidBST(root);
        console.log(message + answer);
    };
    var bst1 = new TreeNode(2);
    bst1.left = new TreeNode(1);
    bst1.right = new TreeNode(3);
    validBSTtest(bst1);
    var bst2 = new TreeNode(5);
    bst2.left = new TreeNode(1);
    bst2.right = new TreeNode(4);
    bst2.right.left = new TreeNode(3);
    bst2.right.right = new TreeNode(6);
    validBSTtest(bst2);
    var bst3 = new TreeNode(5);
    bst3.left = new TreeNode(4);
    bst3.right = new TreeNode(6);
    bst3.right.left = new TreeNode(3);
    bst3.right.right = new TreeNode(7);
    validBSTtest(bst3);
};

// Testing searchMatrix
function matrixSearchTests(): void {
    function test(matrix: number[][], target: number) {
        var answer: boolean = searchMatrix(matrix, target);
        console.log(`Can we find ${target} in [${matrix}]? ${answer}`);
    };
    var matrix: number[][] = [
        [1,4,7,11,15],
        [2,5,8,12,19],
        [3,6,9,16,22],
        [10,13,14,17,24],
        [18,21,23,26,30]
    ];
    test(matrix, 5);
    test(matrix, 20);
};


export {
    mergeSortArrayTest,
    validBSTtests,
    matrixSearchTests
};