// Necessary classes needed to make my tests work with Linked Lists
// ********************
class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(val?: number, next?: ListNode | null, prev? : ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
        this.prev = (prev===undefined ? null : prev);
    };
};


// Doubly linked list
class LL {
    head: ListNode | null;
    tail: ListNode | null;
    constructor(head?: ListNode | null, tail?: ListNode | null) {
        this.head = (head===undefined ? null : head);
        this.tail = (tail===undefined ? null : tail);
    };

    addAtHead(val: number): void {
        var node: ListNode = new ListNode(val);
        if (!this.tail && !this.head) {
            this.tail = node;
            this.head = node;
        } else if (this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        };
    };

    addAtTail(val: number): void {
        var node: ListNode = new ListNode(val);
        if (!this.tail && !this.head) {
            this.tail = node;
            this.head = node;
        } else if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        };
    };

    // Returning the list as a string
    printLL(): string {
        var cur: ListNode | null = this.head;
        if (cur) {
            var statement: string = '[';
            while (cur) {
                statement += cur.val.toString();
                if (cur.next) {
                    statement += ', ';
                } else {
                    statement += ']';
                };
                cur = cur.next;
            };
            return statement;
        } else {
            return '[]';
        };
    };
};


// Singly Linked List
class SLL {
    head: ListNode | null;
    tail: ListNode | null;
    constructor(head?: ListNode | null, tail?: ListNode | null) {
        this.head = (head===undefined ? null : head);
        this.tail = (tail===undefined ? null : tail);
    };

    addAtHead(val: number): void {
        var node: ListNode = new ListNode(val);
        if (!this.tail && !this.head) {
            this.tail = node;
            this.head = node;
        } else if (this.head) {
            node.next = this.head;
            this.head = node;
        };
    };

    addAtTail(val: number): void {
        var node: ListNode = new ListNode(val);
        if (!this.tail && !this.head) {
            this.tail = node;
            this.head = node;
        } else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        };
    };

    // Returning the list as a string
    printLL(): string {
        var cur: ListNode | null = this.head;
        if (cur) {
            var statement: string = '[';
            while (cur) {
                statement += cur.val.toString();
                if (cur.next) {
                    statement += ', ';
                } else {
                    statement += ']';
                };
                cur = cur.next;
            };
            return statement;
        } else {
            return '[]';
        };
    };
};


export {ListNode, LL, SLL};