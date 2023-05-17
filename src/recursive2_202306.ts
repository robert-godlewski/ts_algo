// Solutions for leetcode recursion 2 problems in May and June of 2023
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


export {
    sortArray
};