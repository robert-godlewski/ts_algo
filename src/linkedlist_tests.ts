// Runs the leetcode linked list problems
import {
    MyLinkedList,
    hasCycle,
    reverseList,
    removeElements,
    isPalindrome
} from './linkedlists_202302';

// Tools needed to run these tests
import {
    ListNode,
    printLL
} from './LinkedListTools';

// another couple of tests are missing here!

// Testing reverseList
function reverseSingleLLTest(head: ListNode | null): void {
    console.log(`Current List: ${printLL(head)}`);
    var reversed: ListNode | null = reverseList(head);
    console.log(`Reversed List: ${printLL(reversed)}`);
};

// Testing removeElements
function removeElementsTest(head: ListNode | null, val: number): void {
    console.log(`Current list: ${printLL(head)}`);
    var new_head = removeElements(head, val);
    console.log(`New List: ${printLL(new_head)}`);
};

// Testing isPalindrome
function isPalindromeTest(head: ListNode | null): void {
    console.log(`Original list: ${printLL(head)}`);
    var palindrome: boolean = isPalindrome(head);
    console.log(`Is Palindrome: ${palindrome}`);
};

export {
    reverseSingleLLTest,
    removeElementsTest,
    isPalindromeTest
};