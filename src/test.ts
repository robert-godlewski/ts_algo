// Using code solutions
import {
    runningSum, 
    maximumWealth, 
    fizzBuzz, 
    numberOfSteps, 
    middleNode,
    canConstruct
} from './challenge_202211';
import {
    reverseString
} from './recursion1.202302';


// Tools needed to run these tests
import {ListNode, LL} from './LinkedListTools';


// Line functions needed to separate code in console.
function thickLine(): void {
    console.log('###################');
};

function thinLine(): void {
    console.log('----------');
};


// ****Challenge Problems****
thickLine();
console.log('Challenge Problems:');
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
function middleNodeTest(list: LL): void {
    console.log('Finding the middle node in ' + list.printLL() + ' is:');
    var middle = middleNode(list.head);
    if (middle) {
        console.log(middle.val);
    } else {
        console.log('null');
    };
};

var midNL: LL = new LL();
midNL.addAtTail(1);
midNL.addAtTail(2);
midNL.addAtTail(3);
midNL.addAtTail(4);
midNL.addAtTail(5);
middleNodeTest(midNL);
midNL.addAtTail(6);
middleNodeTest(midNL);
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


// **** Recursion 1 Problems ****
thickLine();
console.log('Recursion Practice:')
thickLine();

// Testing reverseString
function reverseStringTest(s: string[]): void {
    console.log('Reversing this string array:');
    console.log(s);
    reverseString(s);
};

reverseStringTest(["h","e","l","l","o"]);
reverseStringTest(["H","a","n","n","a","h"]);

// **** Linked List Problems ****
thickLine();
console.log('Linked Lists:');
thickLine();

// Testing hasCycle
/*function cycle1Test(head: ListNode | null): void {
    console.log('Finding if this list has a cylcle:');
};*/
