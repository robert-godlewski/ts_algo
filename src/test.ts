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
    MyLinkedList,
    hasCycle,
    reverseList,
    removeElements,
    isPalindrome
} from './linkedlists_202302';
import {
    reverseString
} from './recursion1_202302';


// Tools needed to run these tests
import {
    ListNode,
    LL,
    SLL,
    printLL
} from './LinkedListTools';


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
// Nodes for the first list
var cl1n1 = new ListNode(3);
var cl1n2 = new ListNode(2);
var cl1n3 = new ListNode(0);
var cl1n4 = new ListNode(-4);
cl1n1.next = cl1n2;
//cl1n2.prev = cl1n1;
cl1n2.next = cl1n3;
//cl1n3.prev = cl1n2;
cl1n3.next = cl1n4;
//cl1n4.prev = cl1n3;
cl1n4.next = cl1n2;
var cycle1Test1 = hasCycle(cl1n1);
console.log('Checking if list [3,2,0,-4] is a cycled list? ' + cycle1Test1);
var cl2n1 = new ListNode(1);
var cl2n2 = new ListNode(2);
cl2n1.next = cl2n2;
cl2n2.next = cl2n1;
var cycle1Test2 = hasCycle(cl2n1);
console.log('Checking if list [1,2] is a cycled list? ' + cycle1Test2);
var cl3n = new ListNode(1);
var cycle1Test3 = hasCycle(cl3n);
console.log('Checking if list [1] is a cycled list? ' + cycle1Test3);
thinLine();


// Testing reverseList
function reverseSingleLLTest(head: ListNode | null): void {
    console.log(`Current List: ${printLL(head)}`);
    var reversed: ListNode | null = reverseList(head);
    console.log(`Reversed List: ${printLL(reversed)}`);
};

var revSLL1 = new SLL();
revSLL1.addAtHead(1);
revSLL1.addAtTail(2);
revSLL1.addAtTail(3);
revSLL1.addAtTail(4);
revSLL1.addAtTail(5);
reverseSingleLLTest(revSLL1.head);
var revSLL2 = new SLL();
revSLL2.addAtHead(1);
revSLL2.addAtTail(2);
reverseSingleLLTest(revSLL2.head);
reverseSingleLLTest(null);
thinLine();


// Testing removeElements
function removeElementsTest(head: ListNode | null, val: number): void {
    console.log(`Current list: ${printLL(head)}`);
    var new_head = removeElements(head, val);
    console.log(`New List: ${printLL(new_head)}`);
};

var remESLL1 = new SLL();
remESLL1.addAtHead(1);
remESLL1.addAtTail(2);
remESLL1.addAtTail(6);
remESLL1.addAtTail(3);
remESLL1.addAtTail(4);
remESLL1.addAtTail(5);
remESLL1.addAtTail(6);
removeElementsTest(remESLL1.head, 6);
removeElementsTest(null, 1);
var remESLL2 = new SLL();
remESLL2.addAtHead(7);
remESLL2.addAtTail(7);
remESLL2.addAtTail(7);
remESLL2.addAtTail(7);
removeElementsTest(remESLL2.head, 7);
thinLine();


// Testing isPalindrome
function isPalindromeTest(head: ListNode | null): void {
    console.log(`Original list: ${printLL(head)}`);
    var palindrome: boolean = isPalindrome(head);
    console.log(`Is Palindrome: ${palindrome}`);
}
var palSLL1 = new SLL();
palSLL1.addAtHead(1);
palSLL1.addAtTail(2);
palSLL1.addAtTail(2);
palSLL1.addAtTail(1);
isPalindromeTest(palSLL1.head);
var palSLL2 = new SLL();
palSLL2.addAtHead(1);
palSLL2.addAtTail(2);
isPalindromeTest(palSLL2.head);
thinLine();
