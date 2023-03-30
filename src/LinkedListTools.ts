// Necessary classes needed to make my tests work with Linked Lists
// ********************
class ListNode {
    // Initializing class variables
    val: any;
    next: ListNode | null;
    prev: ListNode | null;

    // Setting class variables
    constructor(val?: any | null, next?: ListNode | null, prev? : ListNode | null) {
        this.val = (val===undefined ? null : val);
        this.next = (next===undefined ? null : next);
        this.prev = (prev===undefined ? null : prev);
    };
};


// Doubly linked list
class LL {
    // Initializing class variables
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    // Setting the class variables
    constructor(head?: ListNode | null, tail?: ListNode | null) {
        this.head = (head===undefined ? null : head);
        this.tail = (tail===undefined ? null : tail);
        this.size = 0;
        if (this.head && this.tail) {
            this.size = 2;
        } else if (this.head) {
            this.size = 1;
        };
    };

    get(index: number): ListNode | null {
        if (index == 0) {
            return this.head;
        } else if (index == this.size-1) {
            return this.tail;
        };
        var cur: ListNode | null = this.head;
        var i: number = 0;
        while (cur) {
            if (i == index) {
                return cur;
            };
            i++;
            cur = cur.next;
        };
        return null;
    };

    addAtHead(value: any): void {
        var node: ListNode = new ListNode(value);
        if (!this.tail && !this.head) {
            this.tail = node;
        } else if (this.head) {
            node.next = this.head;
            this.head.prev = node;
        };
        this.head = node;
        this.size++;
    };

    addAtTail(value: any): void {
        var node: ListNode = new ListNode(value);
        if (!this.tail && !this.head) {
            this.head = node;
        } else if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        };
        this.tail = node;
        this.size++;
    };

    addAtIndex(index: number, value: any): void {
        if (index == 0) {
            this.addAtHead(value);
        } else if (index == this.size-1) {
            this.addAtTail(value);
        } else if (index < this.size-1) {
            var node: ListNode = new ListNode(value);
            var prev: ListNode | null = this.get(index-1);
            var next: ListNode | null = this.get(index);
            if (prev && next) {
                prev.next = node;
                node.prev = prev;
                node.next = next;
                next.prev = node;
            };
            this.size++;
        };
        // Will not do anything if the index >= this.size
    };

    deleteAtHead(): void {
        if (this.head && this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (this.head && !this.head.next) {
            this.head = null;
            // Same as removing the tail because there's only 1 node in the list
            this.tail = null;
        };
        if (this.head) {
            this.size--;
        } else if (!this.head && this.size > 0) {
            this.size = 0;
        };
    };

    deleteAtTail(): void {
        if (this.tail == this.head) {
            // There's only 1 node left in the list
            this.head = null;
            this.tail = null;
        };
        var new_tail: ListNode | null = this.get(this.size-2);
        if (new_tail) {
            if (this.tail) {
                this.tail.prev = null;
            };
            new_tail.next = null;
            this.tail = new_tail;
        };
        if (this.tail) {
            this.size--;
        };
    };

    deleteAtIndex(index: number): void {
        if (index == 0) {
            this.deleteAtHead();
        } else if (index == this.size-1) {
            this.deleteAtTail();
        } else if (index < this.size-1) {
            var prev: ListNode | null = this.get(index-1);
            var next: ListNode | null = this.get(index+1);
            if (prev && next) {
                prev.next = next;
                next.prev = prev;
            }
        };
        if (index <= this.size-1) {
            this.size--;
        };
        // Will not do anything if the index >= this.size
    };
};


// Singly Linked List
class SLL extends LL {
    constructor(head?: ListNode | null, tail?: ListNode | null) {
        super(head, tail);
    };

    addAtHead(value: any): void {
        var node: ListNode = new ListNode(value);
        if (!this.tail && !this.head) {
            this.tail = node;
        } else if (this.head) {
            node.next = this.head;
            // We are skipping setting prev for singly linked lists
        };
        this.head = node;
        this.size++;
    };

    addAtTail(value: any): void {
        var node: ListNode = new ListNode(value);
        if (!this.tail && !this.head) {
            this.head = node;
        } else if (this.tail) {
            this.tail.next = node;
            // We are skipping setting prev for singly linked lists
        };
        this.tail = node;
        this.size++;
    };

    addAtIndex(index: number, value: any): void {
        if (index == 0) {
            this.addAtHead(value);
        } else if (index == this.size-1) {
            this.addAtTail(value);
        } else if (index < this.size-1) {
            var node: ListNode = new ListNode(value);
            var prev: ListNode | null = this.get(index-1);
            var next: ListNode | null = this.get(index);
            if (prev && next) {
                // We are skipping setting prev for singly linked lists
                prev.next = node;
                node.next = next;
            };
            this.size++;
        };
        // Will not do anything if the index >= this.size
    };

    deleteAtHead(): void {
        if (this.head && this.head.next) {
            this.head = this.head.next;
            // We are skipping setting prev for singly linked lists
        } else if (this.head && !this.head.next) {
            this.head = null;
            // Same as removing the tail because there's only 1 node in the list
            this.tail = null;
        };
        if (this.head) {
            this.size--;
        };
    };

    deleteAtTail(): void {
        if (this.tail == this.head) {
            // There's only 1 node left in the list
            this.head = null;
            this.tail = null;
        };
        var new_tail: ListNode | null = this.get(this.size-2);
        if (new_tail) {
            // We are skipping setting prev for singly linked lists
            new_tail.next = null;
            this.tail = new_tail;
        };
        if (this.tail) {
            this.size--;
        };
    };

    deleteAtIndex(index: number): void {
        if (index == 0) {
            this.deleteAtHead();
        } else if (index == this.size-1) {
            this.deleteAtTail();
        } else if (index < this.size-1) {
            var prev: ListNode | null = this.get(index-1);
            var next: ListNode | null = this.get(index+1);
            if (prev && next) {
                prev.next = next;
                // We are skipping setting prev for singly linked lists
            }
        };
        if (index <= this.size-1) {
            this.size--;
        };
        // Will not do anything if the index >= this.size
    };
};


// Returning a string from a given Linked list node
function printLL(head: ListNode | null): string {
    var cur: ListNode | null = head;
    var statement: string = '(head) -> ';
    if (cur) {
        while (cur) {
            statement += cur.val.toString();
            statement += ' -> ';
            cur = cur.next;
        };
    };
    statement += '(tail)';
    return statement;
};


export {ListNode, LL, SLL, printLL};