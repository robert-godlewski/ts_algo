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
// Bad solution it crashed in an infinate loop
function swapPairs(head: ListNode | null): ListNode | null {
    if (head && head.next) {
        var cur: ListNode | null = head;
        var prev: ListNode | null = null;
        var next: ListNode | null = cur.next;
        var swap: boolean = true;
        while (cur) {
            if (cur == head) {
                head = next;
            };
            if (swap && next) {
                cur.next = next.next;
                if (prev) {
                    prev.next = next;
                };
                next.next = cur;
                prev = next;
                next = cur.next;
            } else {
                if (next) {
                    next.next
                };
                cur = cur.next;
                if (prev) {
                    prev = prev.next;
                };
            };
            swap = !swap;
        };
        return head;
    } else if (head) {
        return head;
    } else {
        return null;
    };
};


export {reverseString, swapPairs};