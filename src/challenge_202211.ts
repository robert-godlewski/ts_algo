// Solutions in November 2022 and December 2022

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

// Solved in 10 min
// O(n) time solution
// O(n) space solution
function fizzBuzz(n: number): string[] {
    var phrase: string[] = [];
    for (var i: number = 1; i <= n; i++) {
        var word: string = "";
        if (i % 3 == 0) {
            word += "Fizz";
        };
        if (i % 5 == 0) {
            word += "Buzz";
        };
        if (word === "") {
            phrase.push(i.toString());
        } else {
            phrase.push(word);
        };
    };
    return phrase;
};

// Solved in 15 min
// O(1) time solution
// O(n) space solution
function numberOfSteps(num: number, steps=0): number {
    //console.log('num = ' + num);
    //console.log('steps = ' + steps);
    if (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num--;
        }
        steps = numberOfSteps(num, steps+1);
    };
    return steps;
};


export {runningSum, maximumWealth, fizzBuzz, numberOfSteps};
