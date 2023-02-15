// Solutions in Feburary 2023
import { ListNode } from "./LinkedListTools";


// Designing a Linked List - still not a good solution
// Solved in over 30 min
// O(n) time solution
class MyLinkedList {
    linkedlist: number[];
    head: number;
    tail: number;
    constructor() {
        this.linkedlist = [];
        this.head = -1;
        this.tail = -1;
    };

    get(index: number): number {
        if (this.linkedlist.length < 0) {
            return -1;
        } else {
            return this.linkedlist[index];
        };
    };

    addAtHead(val: number): void {
        if (this.head == -1 && this.tail == -1) {
            this.tail++;
        };
        this.linkedlist.push(val);
        this.head = this.linkedlist.length-1;
    };

    addAtTail(val: number): void {
        if (this.head == -1 && this.tail == -1) {
            this.head++;
        };
        this.linkedlist.push(val);
        this.tail = this.linkedlist.length-1;
    };

    addAtIndex(index: number, val: number): void {
        if (index == this.linkedlist.length-1) {
            this.addAtTail(val);
        } else if (index < this.linkedlist.length) {
            this.addAtTail(0);
            for (var i: number = this.linkedlist.length-1; i > index-1; i--) {
                this.linkedlist[i] = this.linkedlist[i-1];
            };
        };
    };

    deleteAtIndex(index: number): void {
        if (index < this.linkedlist.length) {
            for (var i: number = index; i < this.linkedlist.length-2; i++) {
                this.linkedlist[index] = this.linkedlist[index+1];
            };
            this.linkedlist.pop();
            this.tail--;
        };
        if (this.tail == -1) {
            this.head = -1;
        };
    };
};


// Linked list cycle - This is a bad question
// Solved in 1 hr
// O(n**2) Time solution
// O(n) Space solution
function hasCycle(head: ListNode | null): boolean {
    var cur: ListNode | null = head;
    var vals: number[] = [];
    while (cur) {
        if (vals.length > 0) {
            for (var i: number = 0; i < vals.length; i++) {
                if (vals[i] == cur.val) {
                    return true;
                };
            };
        };
        vals.push(cur.val);
        cur = cur.next;
    };
    return false;
};


// Reversed Linked List - This is the correct solution
// Solved in 1 hr
// O(n) time solution, O(1) time solution as a best case
// O(1) space solution
function reverseList(head: ListNode | null): ListNode | null {
    if (head && head.next) {
        // Utilize 3 pointers
        var cur: ListNode | null = head;
        var prev: ListNode | null = null;
        var next: ListNode | null = null;
        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        };
        return prev;
    } else {
        return head;
    };
};


// Remove Linked List Elements
// Solved in 30 min
// O(n) time solution, best case = O(1)
// O(1) space solution
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head) {
        var cur: ListNode | null = head;
        var prev: ListNode | null = null;
        while (cur) {
            if (cur.val == val) {
                if (cur == head) {
                    head = cur.next;
                };
                if (prev) {
                    prev.next = cur.next;
                };
            } else {
                prev = cur;
            };
            cur = cur.next;
        };
        return head;
    } else {
        return null;
    };
};


export {MyLinkedList, hasCycle, reverseList, removeElements};
