// Solutions in November 2022

// For Running Sum of 1d Array
// Solved in 5 min
// O(n) time solution
// O(1) space solution
function runningSum(nums: number[]): number[] {
    for (var i: number = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    };
    return nums;
};


// For Richest Customer Wealth
// Solved in 5 min
// O(n**2) time solution
// O(1) space solution
function maximumWealth(accounts: number[][]): number {
    var maxnum: number = 0;
    for (var i: number = 0; i < accounts.length; i++) {
        var subtotal: number = 0;
        for (var j: number = 0; j < accounts[i].length; j++) {
            subtotal += accounts[i][j];
        };
        if (subtotal > maxnum) {
            maxnum = subtotal;
        };
    };
    return maxnum;
};


export {runningSum, maximumWealth};
