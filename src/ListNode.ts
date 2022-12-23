// Singly linked list that I got from LeetCode
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    };
};


// For printing out the Linked List
function printLL(head: ListNode | null): void {
    var cur: ListNode | null = head;
    console.log('[');
    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    };
    console.log(']');
};


export {ListNode, printLL};