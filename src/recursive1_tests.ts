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
    printLL
} from './LinkedListTools';

// Testing reverseString
function reverseStringTest(s: string[]): void {
    console.log('Reversing this string array:');
    console.log(s);
    reverseString(s);
};

// Testing swapPairs
function swapPairsTest(head: ListNode | null): void {
    console.log('Swaping the nodes of this list:');
    console.log(printLL(head));
    var swapped: ListNode | null = swapPairs(head);
    console.log(printLL(swapped));
};

// Testing reverseListRecursive
function reverseListRecTest(head: ListNode | null): void {
    console.log(`Reversing this list recursively: ${printLL(head)}`);
    var reversedLL = reverseListRecursive(head);
    console.log(`The reversed list: ${printLL(reversedLL)}`);
};

// Testing getRow
function pascalRowTest(row: number): void {
    var list: number[] = getRow(row);
    console.log(`Getting the pascal triangle for row ${row} = [${list}]`);
}

// Testing fib
function fibonTest(n: number): void {
    var answer: number = fib(n);
    console.log(`The fibonacci number of ${n} = ${answer}`);
};

// Testing climbStairs
function climbStairTest(n: number): void {
    var answer: number = climbStairs(n);
    console.log(`There are ${answer} number of ways to climb ${n} stairs`);
};

// Testing myPow
function powersTest(x: number, n: number): void {
    var answer: number = myPow(x, n);
    console.log(`${x} to the ${n} power = ${answer}`);
};

// Testing mergeTwoLists
function mergeTwoListsTest(list1: ListNode | null, list2: ListNode | null): void {
    console.log(`The first list = ${printLL(list1)}`);
    console.log(`The second list = ${printLL(list2)}`);
    var answer: ListNode | null = mergeTwoLists(list1, list2);
    console.log(`The merged list of 1 and 2 = ${printLL(answer)}`);
}

export {
    reverseStringTest,
    swapPairsTest,
    reverseListRecTest,
    pascalRowTest,
    fibonTest,
    climbStairTest,
    powersTest,
    mergeTwoListsTest
};