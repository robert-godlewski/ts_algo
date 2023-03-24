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
    twoSum,
    isIsomorphic,
    findRestaurant,
    firstUniqChar,
    intersect
} from './hashtables_202303';
import {
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    levelOrder, 
    maxDepth,
    isSymmetric,
    hasPathSum,
    isValidBST,
    searchBST
} from './binarytrees_202303';
import {
    reverseString,
    //swapPairs,
    reverseListRecursive
} from './recursion1_202302';


// Tools needed to run these tests
import {
    ListNode,
    LL,
    SLL,
    printLL
} from './LinkedListTools';
import {
    CircularQueue,
    LinkedQueue,
    MinStack,
    ArrayStack,
    LinkedStack
} from './QueueStackTools';
import {
    TreeNode
} from './BinaryTreeTools';


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
function middleNodeTest(head: ListNode | null): void {
    console.log(`Finding the middle node in ${printLL(head)} is:`);
    var middle: ListNode | null = middleNode(head);
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
middleNodeTest(midNL.head);
midNL.addAtTail(6);
middleNodeTest(midNL.head);
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


// ***** Hashmap Problems ******
thickLine();
console.log('Solving Hashmap Problems:');
thickLine();

// Solving twoSum
function twoSumTest(nums: number[], target: number): void {
    console.log(`Trying to find 2 numbers in [${nums}] that = ${target} are:`);
    var answer: number[] = twoSum(nums, target);
    console.log(answer);
};

console.log("Finding the sum of 2 numbers:");
twoSumTest([2,7,11,15],9);
twoSumTest([3,2,4],6);
twoSumTest([3,3],6);
thinLine();

// Solving isIsomorphic
function isomorphicTest(s: string, t:string): void {
    var answer: boolean = isIsomorphic(s, t)
    console.log(`Is (${s}) isomorphic to (${t})? ${answer}`);
};

console.log("Finding if 2 strings are isomorphic to eachother:");
isomorphicTest('egg','add');
isomorphicTest('foo','bar');
isomorphicTest('paper','title');
thinLine();

// Solving findRestaurant
function findRestaurantTest(list1: string[], list2: string[]): void {
    console.log(`First list of Restaurants: [${list1}]`);
    console.log(`Second list of Restaurants: [${list2}]`);
    var common_rest_list: string[] = findRestaurant(list1, list2);
    console.log(`Found these Restaurants: [${common_rest_list}]`);
};

console.log("Finding common restaurants between 2 strings:");
findRestaurantTest([
    "Shogun","Tapioca Express","Burger King","KFC"
], [
    "Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"
]);
findRestaurantTest([
    "Shogun","Tapioca Express","Burger King","KFC"
], [
    "KFC","Shogun","Burger King"
]);
findRestaurantTest(["happy","sad","good"], ["sad","happy","good"]);
thinLine();

// Solving firstUniqChar
function firstUniqCharTest(s: string): void {
    var unique_index: number = firstUniqChar(s);
    console.log(`First unique charater index in ${s} = ${unique_index}`);
    if (unique_index >= 0) {
        console.log(`Letter is ${s[unique_index]}`);
    } else {
        console.log(`Did not find a unique letter in ${s}`);
    };
};

console.log("Finding unique characters in strings:");
firstUniqCharTest("leetcode");
firstUniqCharTest("loveleetcode");
firstUniqCharTest("aabb");
thinLine();

// Solving intersect
function intersectMapTest(nums1: number[], nums2: number[]): void {
    console.log(`Where does [${nums1}] intersect with [${nums2}]?`);
    var answer = intersect(nums1, nums2);
    console.log(`At [${answer}]`);
};

console.log("Finding the intersection of 2 arrays:");
intersectMapTest([1,2,2,1], [2,2]);
intersectMapTest([4,9,5], [9,4,9,8,4]);
thinLine();

// ***** Queue Problems *****
thickLine();
console.log('Solving Queue Problems:');
thickLine();

// Designing a Circular Queue
function enQueueTest(cq: CircularQueue, param: boolean): void {
    if (param) {
        console.log(`Sucessfully added in a new element: ${cq.queue}`);
    } else {
        console.log('Was not able to update the queue!');
    };
};

var circleQueue = new CircularQueue(3);
console.log(`Created a new circle queue: ${circleQueue.queue}`);
var param_1: boolean = circleQueue.enQueue(1);
enQueueTest(circleQueue, param_1);
var param_2: boolean = circleQueue.enQueue(2);
enQueueTest(circleQueue, param_2);
var param_3: boolean = circleQueue.enQueue(3);
enQueueTest(circleQueue, param_3);
var param_4: boolean = circleQueue.enQueue(4);
enQueueTest(circleQueue, param_4);
console.log(`The end of the queue = ${circleQueue.Rear()}`);
console.log(`The index of the rear of the queue = ${circleQueue.rear}`);
console.log(`Is this queue full? ${circleQueue.isFull()}`);
var param_5: boolean = circleQueue.deQueue();
if (param_5) {
    console.log(`Sucessfully removed an element: ${circleQueue.queue}`);
} else {
    console.log('Was not able to update the queue!');
};
var param_6: boolean = circleQueue.enQueue(4);
enQueueTest(circleQueue, param_6);
console.log(`The end of the queue = ${circleQueue.Rear()}`);
console.log(`The index of the rear of the queue = ${circleQueue.rear}`);
console.log(`The front of the queue = ${circleQueue.Front()}`);
console.log(`The index of the front of the queue = ${circleQueue.front}`);
thinLine();


// Testing out LinkedQueue
function checkFront(node: ListNode | null): void {
    var message: string = `The front of the queue = `;
    if (node) {
        message += node.val;
    } else {
        message += `null`;
    };
    console.log(message);
};

function checkBack(node: ListNode | null): void {
    var message: string = `The back of the queue = `;
    if (node) {
        message += node.val;
    } else {
        message += `null`;
    };
    console.log(message);
}

var linkedQueue = new LinkedQueue();
var emptyFront: ListNode | null = linkedQueue.front();
checkFront(emptyFront);
var emptyBack: ListNode | null = linkedQueue.back();
checkBack(emptyBack);
var badDeQueue: ListNode | null = linkedQueue.deQueue();
if (badDeQueue) {
    console.log(`The deQueue is unsuccessful because it returned ${badDeQueue.val}`);
} else {
    console.log(`The deQueue is a success because it returned ${badDeQueue}`);
};
linkedQueue.enQueue(1);
var updatedFront: ListNode | null = linkedQueue.front();
checkFront(updatedFront);
linkedQueue.enQueue(2);
linkedQueue.enQueue(3);
var updatedBack: ListNode | null = linkedQueue.back();
checkBack(updatedBack);
var removedNode: any = linkedQueue.deQueue();
console.log(`Removed (${removedNode})(${typeof(removedNode)}) from the queue.`);
var newFront: ListNode | null = linkedQueue.front();
checkFront(newFront);

// ***** Stack Problems *****
thickLine();
console.log('Solving Queue Problems:');
thickLine();

// Testing out MinStack
var minStack = new MinStack();
console.log(minStack.stack);
minStack.push(-2);
console.log(minStack.stack);
minStack.push(0);
console.log(minStack.stack);
minStack.push(-3);
console.log(minStack.stack);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.stack)
console.log(minStack.top());
console.log(minStack.getMin());
thinLine();

// ***** Binary Tree Problems ****
thickLine();
console.log('Solving Binary Tree Problems:');
thickLine();

// Testing out preorderTraversal, inorderTraversal, postorderTraversal
// For all
var oTR1 = new TreeNode(1);
oTR1.right = new TreeNode(2);
oTR1.right.left = new TreeNode(3);
var oTR2 = new TreeNode(1);

function preorderTraversalTest(root: TreeNode | null): void {
    var preorderList: number[] = preorderTraversal(root);
    console.log(`The preorder list = [${preorderList}]`);
};

function inorderTraversalTest(root: TreeNode | null): void {
    var inorderList: number[] = inorderTraversal(root);
    console.log(`The inorder list = [${inorderList}]`);
};

function postorderTraversalTest(root: TreeNode | null): void {
    var postorderList: number[] = postorderTraversal(root);
    console.log(`The postorder list = [${postorderList}]`);
};

// preorder
preorderTraversalTest(oTR1);
preorderTraversalTest(null);
preorderTraversalTest(oTR2);
thinLine();

// inorder
inorderTraversalTest(oTR1);
inorderTraversalTest(null);
inorderTraversalTest(oTR2);
thinLine();

// postorder
postorderTraversalTest(oTR1);
postorderTraversalTest(null);
postorderTraversalTest(oTR2);
thinLine();

// Testing out level Order
function levelOrderTest(root: TreeNode | null): void {
    var levelOrderList: number[][] = levelOrder(root);
    console.log(`The level order list = [${levelOrderList}]`);
};

var lo1 = new TreeNode(3);
lo1.left = new TreeNode(9);
lo1.right = new TreeNode(20);
lo1.right.left = new TreeNode(15);
lo1.right.right = new TreeNode(7);
levelOrderTest(lo1);
levelOrderTest(oTR2);
levelOrderTest(null);
thinLine();

// Testing maxDepth
function BTdepthTest(root: TreeNode | null): void {
    var depth: number = maxDepth(root);
    console.log(`The maximum depth of this list = ${depth}`);
};

BTdepthTest(lo1);
BTdepthTest(null);
thinLine();

// Testing isSymmetric
function symmetricTest(root: TreeNode | null): void {
    var symmetric: boolean = isSymmetric(root);
    var message: string = `Is the given tree starting with`;
    if (root) {
        message += ` ${root.val}`;
    } else {
        message += ` null`;
    };
    message += ` is symmetrical? ${symmetric}`;
    console.log(message);
}

var symBT1 = new TreeNode(1);
symBT1.left = new TreeNode(2);
symBT1.left.left = new TreeNode(3);
symBT1.left.right = new TreeNode(4);
symBT1.right = new TreeNode(2);
symBT1.right.left = new TreeNode(4);
symBT1.right.right = new TreeNode(3);
symmetricTest(symBT1);
var symBT2 = new TreeNode(1);
symBT2.left = new TreeNode(2);
symBT2.left.right = new TreeNode(3);
symBT2.right = new TreeNode(2);
symBT2.right.right = new TreeNode(3);
symmetricTest(symBT2);
thinLine();

// Testing hasPathSum
function pathSumTest(root: TreeNode | null, targetSum: number): void {
    var pathSumQ: boolean = hasPathSum(root, targetSum);
    console.log(`Does this tree have a path sum? ${pathSumQ}`);
};

var compBT1 = new TreeNode(5);
compBT1.left = new TreeNode(4);
compBT1.left.left = new TreeNode(11);
compBT1.left.left.left = new TreeNode(7);
compBT1.left.left.right = new TreeNode(2);
compBT1.right = new TreeNode(8);
compBT1.right.left = new TreeNode(13);
compBT1.right.right = new TreeNode(4);
compBT1.right.right.right = new TreeNode(1);
pathSumTest(compBT1, 22);
var compBT2 = new TreeNode(1);
compBT2.left = new TreeNode(2);
compBT2.right = new TreeNode(3);
pathSumTest(compBT2, 5);
pathSumTest(null, 0);


// **** Binary Search Tree Problems ****
// Uses the same solutions from the binary trees for march
thickLine();
console.log('Binary Search Trees');
thickLine();

// Testing isValidBST
function validBTtest(root: TreeNode | null): void {
    var valid: boolean = isValidBST(root);
    var message: string = `Is this binary tree starting with `
    if (root) {
        message += `${root.val}`
    } else {
        message += 'none'
    }
    message += ` a valid search tree? ${valid}`;
    console.log(message);
};

var validBT1 = new TreeNode(2);
validBT1.left = new TreeNode(1);
validBT1.right = new TreeNode(3);
validBTtest(validBT1);
var validBT2 = new TreeNode(5);
validBT2.left = new TreeNode(1);
validBT2.right = new TreeNode(4);
validBT2.right.left = new TreeNode(3);
validBT2.right.right = new TreeNode(6);
validBTtest(validBT2);
thinLine();

// Testing searchBST
function searchBSTtest(root: TreeNode | null, val: number): void {
    var answer: TreeNode | null = searchBST(root, val);
    var message: string = 'We have ';
    if (answer && root) {
        message += `found ${val} in (root) -> ${root.val} tree = ${answer.val}`;
    } else if (root) {
        message += `not found ${val} in (root) -> ${root.val}] tree`;
    } else {
        message += `not been able to find ${val} in (root) -> null`;
    };
    console.log(message);
};

var bst1 = new TreeNode(4);
bst1.left = new TreeNode(2);
bst1.left.left = new TreeNode(1);
bst1.left.right = new TreeNode(3);
bst1.right = new TreeNode(7);
searchBSTtest(bst1, 2);
searchBSTtest(bst1, 5);


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
thinLine();

// Testing swapPairs - Bad solution
// function swapPairsTest(head: ListNode | null): void {
//     console.log('Swaping the nodes of this list:');
//     printLL(head);
//     var swapped: ListNode | null = swapPairs(head);
//     printLL(swapped);
// };
// var swapList = new SLL();
// swapList.addAtHead(1);
// swapList.addAtTail(2);
// swapList.addAtTail(3);
// swapList.addAtTail(4);
// swapPairsTest(swapList.head);
// swapPairsTest(null);
// var singleNode = new ListNode(1);
// swapPairsTest(singleNode);

// Testing reverseListRecursive
function reverseListRecTest(head: ListNode | null): void {
    console.log(`Reversing this list recursively: ${printLL(head)}`);
    var reversedLL = reverseListRecursive(head);
    console.log(`The reversed list: ${printLL(reversedLL)}`);
};

var revSLLRec1 = new SLL();
revSLLRec1.addAtHead(1);
revSLLRec1.addAtTail(2);
revSLLRec1.addAtTail(3);
revSLLRec1.addAtTail(4);
revSLLRec1.addAtTail(5);
reverseListRecTest(revSLLRec1.head);
var revSLLRec2 = new SLL();
revSLLRec2.addAtHead(1);
revSLLRec2.addAtTail(2);
reverseListRecTest(revSLLRec2.head);
reverseListRecTest(null);
thinLine();
