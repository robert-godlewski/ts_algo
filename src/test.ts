// Using code solutions
import {
    runningSum, 
    maximumWealth, 
    fizzBuzz, 
    numberOfSteps, 
    middleNode,
    canConstruct
} from './challenge_202211';


// Tools needed to run these tests
import {ListNode, printLL} from './ListNode';


// Line functions needed to separate code in console.
function thickLine(): void {
    console.log('###################');
};

function thinLine(): void {
    console.log('----------');
};


// Challenge Problems
thickLine();

// Testing runningSum
function runningSumTest(nums: number[]): void {
    console.log('The running sum:');
    console.log(nums);
    var num_sums = runningSum(nums);
    console.log('is');
    console.log(num_sums);
};

runningSumTest([1,2,3,4]);
runningSumTest([1,1,1,1,1]);
runningSumTest([3,1,2,10,1]);
thinLine();

// Testing maximumWealth
function maxWealthTest(accounts: number[][]): void {
    console.log('The maximum wealth:');
    console.log(accounts);
    var max_account = maximumWealth(accounts);
    console.log('is');
    console.log(max_account);
};

maxWealthTest([[1,2,3],[3,2,1]]);
maxWealthTest([[1,5],[7,3],[3,5]]);
maxWealthTest([[2,8,7],[7,1,3],[1,9,5]]);
thinLine();

// Testing fizzBuzz
function fizzBuzzTest(n: number): void {
    console.log('The number = ' + n);
    var arr = fizzBuzz(n);
    console.log('The phrase is');
    console.log(arr);
};

fizzBuzzTest(3);
fizzBuzzTest(5);
fizzBuzzTest(15);
thinLine();

// Testing numberOfSteps
function stepTest(num: number): void {
    console.log('Number of steps for ' + num + ' =');
    var steps = numberOfSteps(num);
    console.log(steps);
};

stepTest(14);
stepTest(8);
stepTest(123);
thinLine();

// Testing middleNode
function middleNodeTest(head: ListNode | null): void {
    console.log('Finding the middle node in:');
    printLL(head);
    console.log('is');
    var middle = middleNode(head);
    if (middle) {
        console.log(middle.val);
    } else {
        console.log('null');
    };
};

var n5: ListNode = new ListNode(5);
var n4: ListNode = new ListNode(4, n5);
var n3: ListNode = new ListNode(3, n4);
var n2: ListNode = new ListNode(2, n3);
var n1: ListNode = new ListNode(1, n2);
middleNodeTest(n1);
var n6: ListNode = new ListNode(6);
n5.next = n6;
middleNodeTest(n1);
thinLine();

// Testing canConstruct
function constructTest(ransomNote: string, magazine: string): void {
    console.log('Can you find ' + ransomNote + ' in ' + magazine + '?');
    var construct = canConstruct(ransomNote, magazine);
    console.log(construct);
};

constructTest('a', 'b');
constructTest('aa', 'ab');
constructTest('aa', 'aab');
thinLine();
