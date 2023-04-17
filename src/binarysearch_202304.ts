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

// Find Peak Element
// Solved in 1:30
function testFindPeakElement(nums: number[]): void {
    var answer: number = findPeakElement(nums);
    console.log(`The index of the peak number in this list [${nums}] = ${answer}`);
};

// Iritive Solution
// Solved in 10 min
// O(n) time solution
// O(1) space solution
function findPeakElementIritive(nums: number[]): number {
    if (nums.length == 0) {
        return -1;
    };
    var maxIndex: number = 0;
    for (var i: number = 1; i < nums.length; i++) {
        if (nums[maxIndex] < nums[i]) {
            maxIndex = i;
        };
    };
    return maxIndex;
};

// Recursive Solution
// O(logn) time and space solution - Need to study
function findPeakElementRecursive(nums: number[]): number {
    function search(nums: number[], left: number, right: number): number {
        if (left == right) {
            return left;
        };
        var mid: number = (left+right)/2;
        mid = Math.trunc(mid);
        if (nums[mid] > nums[mid+1]) {
            return search(nums, left, mid);
        } else {
            return search(nums, mid+1, right);
        };
    };
    return search(nums, 0, nums.length-1);
};

// Iterative Binary Search Solution - Need to study
// O(logn) time solution
// O(1) space solution
function findPeakElement(nums: number[]): number {
    var left: number = 0;
    var right: number = nums.length-1;
    while (left < right) {
        var mid: number = (left+right)/2;
        mid = Math.trunc(mid);
        if (nums[mid] > nums[mid+1]) {
            right = mid;
        } else {
            left = mid+1;
        };
    };
    return left;
};

export {
    testSearch1,
    testFindPeakElement
};