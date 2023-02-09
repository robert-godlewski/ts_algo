// Recursion algorithms solved in Feb 2023
// For Reverse String
// Solved in 10 min
// O(n) time solution
// Do not return anything, modify s in-place instead.
// O(1) space solution
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


export {reverseString};