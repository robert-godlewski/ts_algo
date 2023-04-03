// Runs the leetcode queue problems
import {ListNode} from "./LinkedListTools";
import {CircularQueue} from "./QueueStackTools";

// Designing a Circular Queue
function enQueueTest(cq: CircularQueue, param: boolean): void {
    if (param) {
        console.log(`Sucessfully added in a new element: ${cq.queue}`);
    } else {
        console.log('Was not able to update the queue!');
    };
};

// Testing out LinkedQueue
function checkFront(node: ListNode | null): void {
    var message: string = `The front of the queue = `;
    if (node) {
        message += node.val;
    } else {
        message += `null`;
    };
    console.log(message);
};

// Testing out LinkedQueue
function checkBack(node: ListNode | null): void {
    var message: string = `The back of the queue = `;
    if (node) {
        message += node.val;
    } else {
        message += `null`;
    };
    console.log(message);
};

export {
    enQueueTest,
    checkFront,
    checkBack
}