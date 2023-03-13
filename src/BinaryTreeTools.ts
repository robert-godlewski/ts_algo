// Necessary classes needed to make my tests work with Binary Trees
// **********************
class TreeNode {
    val: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: any | null, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? null : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    };
};


export {TreeNode};