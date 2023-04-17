// Using code solutions - fix below to simplify the code
import {
    runningSumTest,
    maxWealthTest,
    fizzBuzzTest,
    stepTest,
    middleNodeTest,
    constructTest
} from './challenge_tests';
import {
    reverseSingleLLTest,
    removeElementsTest,
    isPalindromeTest
} from './linkedlist_tests';
import {
    twoSumTest,
    isomorphicTest,
    findRestaurantTest,
    firstUniqCharTest,
    intersectMapTest
} from './hashtable_tests';
import {
    enQueueTest,
    checkFront,
    checkBack
} from './queue_tests';
import {
    preorderTraversalTest,
    inorderTraversalTest,
    postorderTraversalTest,
    levelOrderTest,
    BTdepthTest,
    symmetricTest,
    pathSumTest,
    validBTtest,
    searchBSTtest,
    insertBSTtest
} from './binarytree_tests';
import {
    reverseStringTest,
    swapPairsTest,
    reverseListRecTest,
    pascalRowTest,
    fibonTest,
    climbStairTest,
    powersTest,
    mergeTwoListsTest
} from './recursive1_tests';
// This algorithm run is ok
import {
    search_template_1,
    find_peak_index
} from './binarysearch_tests';


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
runningSumTest([1,2,3,4]);
runningSumTest([1,1,1,1,1]);
runningSumTest([3,1,2,10,1]);
thinLine();
// Testing maximumWealth
maxWealthTest([[1,2,3],[3,2,1]]);
maxWealthTest([[1,5],[7,3],[3,5]]);
maxWealthTest([[2,8,7],[7,1,3],[1,9,5]]);
thinLine();
// Testing fizzBuzz
fizzBuzzTest(3);
fizzBuzzTest(5);
fizzBuzzTest(15);
thinLine();
// Testing numberOfSteps
stepTest(14);
stepTest(8);
stepTest(123);
thinLine();
// Testing middleNode
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
constructTest('a', 'b');
constructTest('aa', 'ab');
constructTest('aa', 'aab');
thinLine();


// **** Linked List Problems ****
thickLine();
console.log('Linked Lists:');
thickLine();
// Testing hasCycle - Need to figure out what has happend to hasCycle()
// Nodes for the first list
// var cl1n1 = new ListNode(3);
// var cl1n2 = new ListNode(2);
// var cl1n3 = new ListNode(0);
// var cl1n4 = new ListNode(-4);
// cl1n1.next = cl1n2;
// //cl1n2.prev = cl1n1;
// cl1n2.next = cl1n3;
// //cl1n3.prev = cl1n2;
// cl1n3.next = cl1n4;
// //cl1n4.prev = cl1n3;
// cl1n4.next = cl1n2;
// var cycle1Test1 = hasCycle(cl1n1);
// console.log('Checking if list [3,2,0,-4] is a cycled list? ' + cycle1Test1);
// var cl2n1 = new ListNode(1);
// var cl2n2 = new ListNode(2);
// cl2n1.next = cl2n2;
// cl2n2.next = cl2n1;
// var cycle1Test2 = hasCycle(cl2n1);
// console.log('Checking if list [1,2] is a cycled list? ' + cycle1Test2);
// var cl3n = new ListNode(1);
// var cycle1Test3 = hasCycle(cl3n);
// console.log('Checking if list [1] is a cycled list? ' + cycle1Test3);
// thinLine();
// Testing reverseList
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
console.log("Finding the sum of 2 numbers:");
twoSumTest([2,7,11,15],9);
twoSumTest([3,2,4],6);
twoSumTest([3,3],6);
thinLine();
// Solving isIsomorphic
console.log("Finding if 2 strings are isomorphic to eachother:");
isomorphicTest('egg','add');
isomorphicTest('foo','bar');
isomorphicTest('paper','title');
thinLine();
// Solving findRestaurant
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
console.log("Finding unique characters in strings:");
firstUniqCharTest("leetcode");
firstUniqCharTest("loveleetcode");
firstUniqCharTest("aabb");
thinLine();
// Solving intersect
console.log("Finding the intersection of 2 arrays:");
intersectMapTest([1,2,2,1], [2,2]);
intersectMapTest([4,9,5], [9,4,9,8,4]);
thinLine();


// ***** Queue Problems *****
thickLine();
console.log('Solving Queue Problems:');
thickLine();
// Designing a Circular Queue
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
// Testing out levelOrder
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
BTdepthTest(lo1);
BTdepthTest(null);
thinLine();
// Testing isSymmetric
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
var bst1 = new TreeNode(4);
bst1.left = new TreeNode(2);
bst1.left.left = new TreeNode(1);
bst1.left.right = new TreeNode(3);
bst1.right = new TreeNode(7);
searchBSTtest(bst1, 2);
searchBSTtest(bst1, 5);
thinLine();
// Testing insertIntoBST
var ibst1 = new TreeNode(4);
ibst1.left = new TreeNode(2);
ibst1.left.left = new TreeNode(1);
ibst1.left.right = new TreeNode(3);
ibst1.right = new TreeNode(7);
insertBSTtest(ibst1, 5);
thinLine();
// Testing deleteNode - Doesn't work in leetcode
// var dbst1 = new TreeNode(5);
// dbst1.left = new TreeNode(3);
// dbst1.left.left = new TreeNode(2);
// dbst1.left.right = new TreeNode(4);
// dbst1.right = new TreeNode(6);
// dbst1.right.right = new TreeNode(7);
// deleteBSTtest(dbst1, 3);
// deleteBSTtest(dbst1, 0);
// deleteBSTtest(null, 0);


// **** Recursion 1 Problems ****
thickLine();
console.log('Recursion Practice:')
thickLine();
// Testing reverseString
reverseStringTest(["h","e","l","l","o"]);
reverseStringTest(["H","a","n","n","a","h"]);
thinLine();
// Testing swapPairs - Bad solution
var swapList = new SLL();
swapList.addAtHead(1);
swapList.addAtTail(2);
swapList.addAtTail(3);
swapList.addAtTail(4);
swapPairsTest(swapList.head);
swapPairsTest(null);
var singleNode = new ListNode(1);
swapPairsTest(singleNode);
thinLine();
// Testing reverseListRecursive
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
// Testing getRow
pascalRowTest(3);
pascalRowTest(0);
pascalRowTest(1);
thinLine();
// Testing fib
fibonTest(0);
fibonTest(1);
fibonTest(2);
fibonTest(3);
fibonTest(4);
thinLine();
// Testing climbStairs
climbStairTest(2);
climbStairTest(3);
climbStairTest(4); //expecting 5
climbStairTest(10); //expecting 89
thinLine();
// Testing powersTest
powersTest(2, 10);
powersTest(2.1, 3);
powersTest(2, -2);
powersTest(8.95371, -1);
// Testing mergeTwoListsTest
var mergList1 = new ListNode(1);
mergList1.next = new ListNode(2);
mergList1.next.next = new ListNode(4);
var mergList2 = new ListNode(1);
mergList2.next = new ListNode(3);
mergList2.next.next = new ListNode(4);
mergeTwoListsTest(mergList1, mergList2);
mergeTwoListsTest(null, null);
var mergList3 = new ListNode(0)
mergeTwoListsTest(null, mergList3);


// *************Binary Search Tests**************
thickLine();
console.log('Binary Search Practice:')
thickLine();
search_template_1();
thinLine();
find_peak_index();
