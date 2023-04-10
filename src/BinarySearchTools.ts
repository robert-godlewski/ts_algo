// Group of Binary Search tool templates
// Runtime complexity of all is O(logn) due to the fact that we are jumping around the array to find the target
// Space complexity of all is O(1) due to only keeping track of 3 numbers
function binarySearch1(nums: number[], target: number): number {
    // Template 1 of a Binary Search, the most basic version
    if (nums.length == 0) {
        return -1;
    };
    var left: number = 0;
    var right: number = nums.length-1;
    while (left <= right) {
        var mid: number = (left+right)/2;
        // Make sure that mid is a whole number not a float type
        mid = Math.trunc(mid);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid+1;
        } else {
            // nums[mid] > target
            right = mid-1;
        };
    };
    // End condition if left > right and haven't found an appropriate answer
    return -1;
};

function binarySearch2(nums: number[], target: number): number {
    // Template 2 of a Binary Search, more advanced version
    if (nums.length == 0) {
        return -1;
    };
    var left: number = 0;
    var right: number = nums.length-1;
    while (left < right) {
        var mid: number = (left+right)/2;
        mid = Math.trunc(mid);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // nums[mid] > target
            right = mid;
        };
    };
    // Assessing if the remaining element meets this condition
    if (nums[left] == target) {
        return left;
    };
    return -1;
};

function binarySearch3(nums: number[], target: number): number {
    // Template 3 of a Binary Search, an alternative to template 3
    if (nums.length == 0) {
        return -1;
    };
    var left: number = 0;
    var right: number = nums.length-1;
    while (left + 1 < right) {
        var mid: number = (left+right)/2;
        mid = Math.trunc(mid);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid;
        } else {
            // nums[mid] > target
            right = mid;
        };
    };
    // Assessing if the remaining element meets either condition
    if (nums[left] == target) {
        return left;
    };
    if (nums[right] == target) {
        return right;
    };
    return -1;
}


export {binarySearch1, binarySearch2, binarySearch3};