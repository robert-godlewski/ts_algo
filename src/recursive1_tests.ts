// Runs the leetcode recursion problems
import {
    reverseString,
    swapPairs,
    reverseListRecursive,
    getRow,
    fib,
    climbStairs,
    myPow,
    mergeTwoLists
} from './recursion1_202302';

// Needed classes to run these
import {
    ListNode,
    SLL,
    printLL
} from './LinkedListTools';

// Testing reverseString
function reverseStringTest(): void {
    function reverseRuns(s: string[]): void {
        console.log(`Reversing ${s} to ${reverseString(s)}`);
    };
    reverseRuns(["h","e","l","l","o"]);
    reverseRuns(["H","a","n","n","a","h"]);
};

// Testing swapPairs - Bad solution
function swapPairsTest(): void {
    function swapPairsRuns(head: ListNode | null): void {
        console.log('Swaping the nodes of this list:');
        console.log(printLL(head));
        var swapped: ListNode | null = swapPairs(head);
        console.log(printLL(swapped));
    };
    var swapList = new SLL();
    swapList.addAtHead(1);
    swapList.addAtTail(2);
    swapList.addAtTail(3);
    swapList.addAtTail(4);
    swapPairsRuns(swapList.head);
    swapPairsRuns(null);
    var singleNode = new ListNode(1);
    swapPairsRuns(singleNode);
};

// Testing reverseListRecursive
function reverseListRecTest(): void {
    function reverseListRecRuns(head: ListNode | null): void {
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
    reverseListRecRuns(revSLLRec1.head);
    var revSLLRec2 = new SLL();
    revSLLRec2.addAtHead(1);
    revSLLRec2.addAtTail(2);
    reverseListRecRuns(revSLLRec2.head);
    reverseListRecRuns(null);
};

// Testing getRow
function pascalRowTests(): void {
    function pascalRowTest(row: number): void {
        var list: number[] = getRow(row);
        console.log(`Getting the pascal triangle for row ${row} = [${list}]`);
    };
    pascalRowTest(3);
    pascalRowTest(0);
    pascalRowTest(1);
};

// Testing fib
function fibonTests(): void {
    function fibonTest(n: number): void {
        var answer: number = fib(n);
        console.log(`The fibonacci number of ${n} = ${answer}`);
    };
    fibonTest(0);
    fibonTest(1);
    fibonTest(2);
    fibonTest(3);
    fibonTest(4);
};

// Testing climbStairs
function climbStairTests(): void {
    function climbStairTest(n: number): void {
        var answer: number = climbStairs(n);
        console.log(`There are ${answer} number of ways to climb ${n} stairs`);
    };
    climbStairTest(2);
    climbStairTest(3);
    climbStairTest(4);
    climbStairTest(10);
};

// Testing myPow
function powersTests(): void {
    function powersTest(x: number, n: number): void {
        var answer: number = myPow(x, n);
        console.log(`${x} to the ${n} power = ${answer}`);
    };
    powersTest(2, 10);
    powersTest(2.1, 3);
    powersTest(2, -2);
    powersTest(8.95371, -1);
};

// Testing mergeTwoLists
function mergeTwoListsTest(): void {
    function merge2ListRuns(list1: ListNode | null, list2: ListNode | null): void {
        console.log(`The first list = ${printLL(list1)}`);
        console.log(`The second list = ${printLL(list2)}`);
        var answer: ListNode | null = mergeTwoLists(list1, list2);
        console.log(`The merged list of 1 and 2 = ${printLL(answer)}`);
    };
    var mergList1 = new ListNode(1);
    mergList1.next = new ListNode(2);
    mergList1.next.next = new ListNode(4);
        var mergList2 = new ListNode(1);
    mergList2.next = new ListNode(3);
    mergList2.next.next = new ListNode(4);
    merge2ListRuns(mergList1, mergList2);
    merge2ListRuns(null, null);
    var mergList3 = new ListNode(0);
    merge2ListRuns(null, mergList3);
}

export {
    reverseStringTest,
    swapPairsTest,
    reverseListRecTest,
    pascalRowTests,
    fibonTests,
    climbStairTests,
    powersTests,
    mergeTwoListsTest
};