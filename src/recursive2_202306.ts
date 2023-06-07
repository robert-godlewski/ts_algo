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

// Search 2D Matrix 2 - Need to check with leet code if this solution is good
// Brute solution took less than 5 min to solve
// Time complexity = O(n**2)
// Space complexity = O(1)
function searchMatrixBrute(matrix: number[][], target: number): boolean {
    for (var i: number = 0; i < matrix.length; i++) {
        for (var j: number = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == target) {
                return true;
            };
        };
    };
    return false;
};

// Time Complexity = O(nlogn)
// Space Complexity = O(n)
function searchMatrix(matrix: number[][], target: number): boolean {
    function search(matrix: number[][], target: number, pivh: number, pivw: number, going_lower: boolean=true, going_higher: boolean=true): boolean {
        if (matrix[pivh][pivw] == target) {
            return true;
        };
        if (searchRow(matrix, target, pivh)) {
            return true;
        };
        if (matrix[pivh][pivw] > target && going_lower && pivh-1 >= 0 && pivw-1 >= 0) {
            return search(matrix, target, pivh-1, pivw-1, true, false);
        } else if (matrix[pivh][pivw] < target && going_higher && pivh+1 < matrix.length && pivw+1 < matrix[pivh].length) {
            return search(matrix, target, pivh+1, pivw+1, false, true);
        } else if (matrix[pivh][pivw] > target && going_lower && pivh-1 >= 0) {
            return search(matrix, target, pivh-1, pivw, true, false);
        } else if (matrix[pivh][pivw] < target && going_higher && pivh+1 < matrix.length) {
            return search(matrix, target, pivh+1, pivw, false, true);
        };
        return false;
    };
    function searchRow(matrix: number[][], target: number, row: number): boolean {
        for (var i: number = 0; i < matrix[row].length; i++) {
            if (matrix[row][i] == target) {
                return true;
            };
        };
        return false;
    };
    return search(matrix, target, Math.round((matrix.length-1)/2), Math.round((matrix[0].length-1)/2));
};

export {
    sortArray,
    isValidBST,
    searchMatrix
};