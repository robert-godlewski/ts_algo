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

// Swap Nodes in Pairs - Bad solution
// Not returning the right data for some reason took over an hour to get to here
function swapPairs(head: ListNode | null, prev: ListNode | null = null): ListNode | null {
    if (head) {
        var cur: ListNode | null = head;
        var next: ListNode | null = cur.next;
        if (prev) {
            prev.next = next;
        };
        if (next) {
            cur.next = next.next;
            next.next = cur;
        };
        cur = swapPairs(head=cur.next, prev=cur);
        //head = next;
        if (prev) {
            return prev;
        } else {
            return next;
        };
    } else if (prev) {
        return prev;
    } else {
        return null;
    };
};

// Revrse Linked List
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


export {reverseString, swapPairs, reverseListRecursive};