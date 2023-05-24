// Solutions for leetcode recursion 2 problems in May and June of 2023
// Needed tools
import {
    TreeNode
} from './BinaryTreeTools';


// Sort an Arr - Basically a Merge Sort
function sortArray(nums: number[]): number[] {
    if (nums.length > 1) {
        // Divide the array to several sublists
        var mid = Math.ceil(nums.length/2);
        var left: number[] = nums.slice(0, mid);
        var right: number[] = nums.slice(mid);
        // Sort the arrays recursively
        left = sortArray(left);
        right = sortArray(right);
        // Merge the arrays
        var l: number = 0;
        var r: number = 0;
        var i: number = 0;
        while (i < nums.length) {
            if (l < left.length && r < right.length) {
                if (left[l] <= right[r]) {
                    nums[i] = left[l];
                    l++;
                } else {
                    // left[l] > right[r]
                    nums[i] = right[r];
                    r++;
                };
            } else if (l < left.length) {
                nums[i] = left[l];
                l++;
            } else if (r < right.length) {
                nums[i] = right[r];
                r++;
            };
            i++;
        };
    };
    return nums;
};

// Validate Binary Search Tree - Need to study
// Time complexity = O(n) = we visit each node once
// Space complexity = O(n) = we look through the entire tree and keep track
function isValidBST(root: TreeNode | null): boolean {
    function validate(root: TreeNode | null, low: number| null=null, high: number | null=null): boolean {
        // Empty trees are valid
        var answer: boolean = true;
        if (root) {
            // Values must be between low and high values inorder to be a valid tree
            if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
                return false;
            };
            // Figuring out the left and right subtrees
            answer = validate(root.left, low, root.val) && validate(root.right, root.val, high);
        };
        return answer;
    };
    return validate(root);
};

// Search 2D Matrix 2
// Bad solution - took over 1 hr
function searchMatrix(matrix: number[][], target: number): boolean {
    function search(matrix: number[][], target: number, pivot_h: number, pivot_w: number): boolean {
        var is_found: boolean = false;
        if (pivot_h < 0 || pivot_w < 0 || pivot_h >= matrix.length || pivot_w >= matrix[0].length) {
            is_found = false;
        };
        is_found = checkAround(matrix, target, pivot_h, pivot_w);
        if (is_found == false) {
            if (target < matrix[pivot_h][pivot_w]) {
                // search top left
                is_found = search(matrix, target, Math.ceil(pivot_h/2), Math.ceil(pivot_w/2));
            } else if (target > matrix[pivot_h][pivot_w]) {
                // search bottom right
                is_found = search(matrix, target, matrix.length-Math.ceil(pivot_h/2), matrix[0].length-Math.ceil(pivot_w/2));
            };
        };
        return is_found;
    };
    function checkAround(matrix: number[][], target: number, pivot_h: number, pivot_w: number): boolean {
        if (matrix[pivot_h][pivot_w] == target) {
            return true;
        };
        if (pivot_h-1 >= 0 && target == matrix[pivot_h-1][pivot_w]) {
            return true;
        };
        if (pivot_h+1 < matrix.length && target == matrix[pivot_h+1][pivot_w]) {
            return true;
        };
        if (pivot_w-1 >= 0 && target == matrix[pivot_h][pivot_w-1]) {
            return true;
        };
        if (pivot_w+1 < matrix[0].length && target == matrix[pivot_h][pivot_w+1]) {
            return true;
        };
        return false;
    };
    return search(matrix, target, matrix.length-1, matrix[0].length-1);
};

export {
    sortArray,
    isValidBST,
    searchMatrix
};