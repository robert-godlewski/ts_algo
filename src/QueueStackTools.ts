// My creation of both Queues and Stacks
import {ListNode, LL} from './LinkedListTools';

// Queue with an array implementation
// There can be no values less than 0, if there are it means the value is empty.
class CircularQueue {
    // This is the actual queue
    queue: number[];
    // This is actually the index of the front not the value
    front: number;
    // This is actually the index of the rear not the value
    rear: number;
    size: number;
    constructor(k: number) {
        this.front = -1;
        this.rear = -1;
        this.size = k;
        this.queue = [];
        for (var i: number = 0; i < k; i++) {
            this.queue.push(-1);
        };
    };

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        };
        if (this.isEmpty()) {
            this.front = 0;
        };
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        return true;
    };

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        };
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
            return true;
        };
        this.front = (this.front + 1) % this.size;
        return true;
    };

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.queue[this.front];
        };
    };

    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.queue[this.rear];
        };
    };

    isEmpty(): boolean {
        if (this.front == -1) {
            return true;
        } else {
            return false;
        };
    };

    isFull(): boolean {
        if ((this.rear+1) % this.size == this.front) {
            return true;
        } else {
            return false;
        };
    };
};


// Queue with a linked list implementation
class LinkedQueue extends LL {
    // The head is the front of the queue
    // The tail is the rear of the queue
    constructor(head?: ListNode | null, tail?: ListNode | null) {
        super(head, tail);
    };

    enQueue(value: any): void {
        this.addAtTail(value);
    };

    deQueue(): any {
        var value: any;
        if (this.head) {
            value = this.head.val;
        } else {
            value = null;
        };
        this.deleteAtHead();
        return value;
    };

    front(): ListNode | null {
        return this.head;
    };

    back(): ListNode | null {
        return this.tail;
    };

    // Overriding LL functions that will print out error messages.
    // With queues we only add data to the tail
    // And remove data at the head
    addAtHead(value: any): void {
        this.addAtIndex(0, value);
    };

    addAtIndex(index: number, value: any): void {
        var message: string;
        if (index == this.size-1) {
            message = 'Please use the enQueue function to add to the back of the Queue.';
        } else {
            message = `Cannot add ${value} at index ${index} to the Queue.`;
        };
        console.log(message);
    };

    deleteAtTail(): void {
        this.deleteAtIndex(this.size-1);
    };

    deleteAtIndex(index: number): void {
        var message: string;
        if (index == 0) {
            message = ' Please use the deQueue function to remove the front of the Queue.';
        } else {
            message = `Cannot remove data at index ${index} of the Queue.`;
        };
        console.log(message);
    }
};


// Stack with an array implementation, solution for a LeetCode
class MinStack {
    // first number is the value
    // second number is the min value
    stack: [number, number][];

    constructor() {
        this.stack = [];
    };

    push(val: number): void {
        var min: number;
        if (this.stack.length > 0) {
            if (this.stack[this.stack.length-1][1] > val) {
                min = val;
            } else {
                min = this.stack[this.stack.length-1][1];
            };
        } else {
            min = val;
        };
        this.stack.push([val, min])
    };

    pop(): void {
        this.stack.pop()
    };

    top(): number {
        return this.stack[this.stack.length-1][0];
    };

    getMin(): number {
        return this.stack[this.stack.length-1][1];
    };
};


// Array implementation of a Stack
class ArrayStack {
    stack: any[];

    constructor() {
        this.stack = [];
    };

    push(value: any): void {
        this.stack.push(value);
    };

    pop(): any {
        return this.stack.pop();
    };

    top(): any {
        return this.stack[this.stack.length-1];
    };
};


// Linked List implementation of a Stack
class LinkedStack extends LL {
    // The head is the bottom of the stack
    // The tail is the top of the stack
    constructor(head?: ListNode | null, tail?: ListNode | null) {
        super(head, tail);
    };

    push(value: any): void {
        this.addAtTail(value);
    };

    pop(): any {
        var value: any;
        if (this.tail) {
            value = this.tail.val;
        } else {
            value = null;
        };
        this.deleteAtTail();
        return value;
    };

    bottom(): ListNode | null {
        return this.head;
    };

    top(): ListNode | null {
        return this.tail;
    };

    // Overriding LL functions that will print out error messages.
    // With stacks we only add and remove data to the tail.
    addAtHead(value: any): void {
        this.addAtIndex(0, value)
    };

    addAtIndex(index: number, value: any): void {
        var message: string;
        if (index == this.size-1) {
            message = 'Please use push function to add to the top of the Stack.';
        } else {
            message = `Cannot add ${value} at index ${index} to the Stack.`;
        };
        console.log(message);
    };

    deleteAtHead(): void {
        this.deleteAtIndex(0);
    };

    deleteAtIndex(index: number): void {
        var message: string;
        if (index == this.size-1) {
            message = 'Please use pop function to remove to the top of the Stack.';
        } else {
            message = `Cannot remove data at index ${index} to the Stack.`;
        };
        console.log(message);
    };
};


export {CircularQueue, LinkedQueue, MinStack, ArrayStack, LinkedStack};