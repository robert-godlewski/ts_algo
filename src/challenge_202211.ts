// Solutions in November 2022 and December 2022
import {ListNode} from "./ListNode";


// For Running Sum of 1d Array
// Solved in 5 min
// O(n) time solution
// O(1) space solution
function runningSum(nums: number[]): number[] {
    for (var i: number = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    };
    return nums;
};

// For Richest Customer Wealth
// Solved in 5 min
// O(n**2) time solution
// O(1) space solution
function maximumWealth(accounts: number[][]): number {
    var maxnum: number = 0;
    for (var i: number = 0; i < accounts.length; i++) {
        var subtotal: number = 0;
        for (var j: number = 0; j < accounts[i].length; j++) {
            subtotal += accounts[i][j];
        };
        if (subtotal > maxnum) {
            maxnum = subtotal;
        };
    };
    return maxnum;
};

// Solved in 10 min
// O(n) time solution
// O(n) space solution
function fizzBuzz(n: number): string[] {
    var phrase: string[] = [];
    for (var i: number = 1; i <= n; i++) {
        var word: string = "";
        if (i % 3 == 0) {
            word += "Fizz";
        };
        if (i % 5 == 0) {
            word += "Buzz";
        };
        if (word === "") {
            phrase.push(i.toString());
        } else {
            phrase.push(word);
        };
    };
    return phrase;
};

// Solved in 15 min
// O(1) time solution
// O(n) space solution
function numberOfSteps(num: number, steps=0): number {
    //console.log('num = ' + num);
    //console.log('steps = ' + steps);
    if (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num--;
        }
        steps = numberOfSteps(num, steps+1);
    };
    return steps;
};

// Solved in 20 min
// Best Time = O(1)
// Normal Time = O(n) time
// O(1) space
// Brute Force Way
// function middleNode(head: ListNode | null): ListNode | null {
//     if (!head) {
//         return null;
//     }
//     var len: number = 0;
//     var cur: ListNode | null = head;
//     while (cur) {
//         len++;
//         cur = cur.next;
//     };
//     cur = head;
//     var i: number = 1;
//     while (cur && i < len/2) {
//         cur = cur.next;
//         i++;
//     };
//     if (len % 2 == 0 && cur) {
//         cur = cur.next;
//     };
//     return cur;
// };

// Faster way
// Best Time = O(1)
// Normal Time = O(n)
// O(n) Space
function middleNode(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    };
    var nodeList: ListNode[] = [];
    var cur: ListNode | null = head;
    while (cur) {
        nodeList.push(cur);
        cur = cur.next;
    };
    return nodeList[Math.trunc(nodeList.length/2)];
};

// Solved in 30 min
// Best time = O(1)
// Normal time = O(n)
// Best space = O(1)
// Normal space = O(n)
function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote === magazine) {
        return true;
    } else if (ransomNote.length > magazine.length && ransomNote != magazine) {
        return false;
    } else if (ransomNote.length == magazine.length && ransomNote.length == 1 && ransomNote != magazine) {
        return false;
    };
    var mag_arr: string[] = magazine.split("");
    var mag_dict: any = {};
    for (var i: number = 0; i < mag_arr.length; i++) {
        var key: string = mag_arr[i];
        if (key in mag_dict) {
            mag_dict[key] += 1;
        } else {
            mag_dict[key] = 1;
        };
    };
    var ran_arr: string[] = ransomNote.split("");
    for (var i: number = 0; i < ran_arr.length; i++) {
        var key: string = ran_arr[i];
        if (key in mag_dict) {
            if (mag_dict[key] == 0) {
                return false;
            };
            mag_dict[key] -= 1;
        } else {
            return false;
        };
    };
    return true;
};


export {runningSum, maximumWealth, fizzBuzz, numberOfSteps, middleNode, canConstruct};
