// Binary Search algorithms solved in Apr 2023
// Searching a rotated sorted array
// Solved in over 30 min
// O(1) time solution
// O(n) space solution
function testSearch1(nums: number[], target: number): void {
    var answer: number = search1(nums, target);
    console.log(`What index is ${target} in [${nums}]? ${answer}`);
};

// The original name is just search without the 1
function search1(nums: number[], target: number, index: number=0): number {
    if (nums.length == 0 || index == nums.length) {
        return -1;
    } else if (nums[index] == target) {
        return index;
    } else {
        return search1(nums, target, index+1);
    };
};

export {testSearch1};