// My creation of both Queues and Stacks

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


export {CircularQueue};