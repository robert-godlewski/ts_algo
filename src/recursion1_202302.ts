// Recursion algorithms solved in Feb and Mar 2023
import {ListNode} from './LinkedListTools';


// Reverse String
// Solved in 10 min
// O(n) time solution
// O(1) space solution
// Does not return anything, modify s in-place instead.
function reverseString(s: string[]): void {
    var start: number = 0;
    var end: number = s.length - 1;
    while (start <= end) {
        var start_let: string = s[start];
        s[start] = s[end];
        s[end] = start_let;
        start++;
        end--;
    };
    console.log(`Reversed String = [${s}]`);
};

// Swap Nodes in Pairs
// Solved in 20 min
// O(1) time solution
// O(n) space solution
function swapPairs(head: ListNode | null, prev: ListNode | null=null): ListNode | null {
    if (head && head.next) {
        var cur: ListNode | null = head;
        var next: ListNode | null = cur.next;
        if (prev) {
            prev.next = next;
        };
        if (cur && next) {
            cur.next = next.next;
            next.next = cur;
        };
        if (cur.next) {
            cur.next = swapPairs(cur.next, cur);
        };
        head = next;
    };
    return head;
};

// Reverse Linked List
// Took about 45 min to solve
// O(1) time solution
// O(n) space solution
function reverseListRecursive(head: ListNode | null, prev: ListNode | null = null): ListNode | null {
    if (head && head.next) {
        var cur: ListNode | null = head;
        var next: ListNode | null = cur.next;
        cur.next = prev;
        next = reverseListRecursive(next, cur);
        if (next && !next.next) {
            next.next = cur;
        };
        head = next;
    };
    return head;
};

// Pascal's Triangle II
// Solved in 20 min
// O(nlogn) solution
// Works but excedes the time limit
function pascalCal(row: number, col: number): number {
    if (col < 0 || row < 0) {
        // Don't want to do anything if it gets to this
        return 0;
    } else if (col == 0 || col == row+1) {
        // This is the edge of the triangle
        return 1;
    } else {
        // pascal formula
        return pascalCal(row-1, col-1) + pascalCal(row-1, col);
    };
};

function getRow(rowIndex: number): number[] {
    var list: number[] = [];
    for (var i: number = 0; i < rowIndex+1; i++) {
        var num: number = pascalCal(rowIndex, i);
        list.push(num);
    };
    return list;
};

// Fibonacci Number
// Solved in 5 min
// O(1) time solution
// O(n) space solution
function fib(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    };
};

// Climbing Stairs
// Similar to the fibonacci number
// Solved in 20 min - Bad solution according to leetcode, not sure why though
function climbStairs(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n <= 3) {
        return n;
    } else {
        return climbStairs(n-1) + climbStairs(n-2);
    };
};


export {
    reverseString, 
    swapPairs, 
    reverseListRecursive, 
    getRow, 
    fib,
    climbStairs
};