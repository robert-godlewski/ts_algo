// Runs the leetcode challenge problems
import {
    runningSum, 
    maximumWealth, 
    fizzBuzz, 
    numberOfSteps, 
    middleNode,
    canConstruct
} from './challenge_202211';

// Tools needed to runs some of these tests
import {
    ListNode,
    printLL
} from './LinkedListTools';

// Testing runningSum
function runningSumTest(nums: number[]): void {
    console.log('The running sum:');
    console.log(nums);
    var num_sums = runningSum(nums);
    console.log('is');
    console.log(num_sums);
};

// Testing maximumWealth
function maxWealthTest(accounts: number[][]): void {
    console.log('The maximum wealth:');
    console.log(accounts);
    var max_account = maximumWealth(accounts);
    console.log('is');
    console.log(max_account);
};

// Testing fizzBuzz
function fizzBuzzTest(n: number): void {
    console.log('The number = ' + n);
    var arr = fizzBuzz(n);
    console.log('The phrase is');
    console.log(arr);
};

// Testing numberOfSteps
function stepTest(num: number): void {
    console.log('Number of steps for ' + num + ' =');
    var steps = numberOfSteps(num);
    console.log(steps);
};

// Testing middleNode
function middleNodeTest(head: ListNode | null): void {
    console.log(`Finding the middle node in ${printLL(head)} is:`);
    var middle: ListNode | null = middleNode(head);
    if (middle) {
        console.log(middle.val);
    } else {
        console.log('null');
    };
};

// Testing canConstruct
function constructTest(ransomNote: string, magazine: string): void {
    console.log('Can you find ' + ransomNote + ' in ' + magazine + '?');
    var construct = canConstruct(ransomNote, magazine);
    console.log(construct);
};

export {
    runningSumTest,
    maxWealthTest,
    fizzBuzzTest,
    stepTest,
    middleNodeTest,
    constructTest
};