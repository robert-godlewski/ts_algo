// Solutions in Feburary and March 2023 for all hashtables
// Two Sum - Hashmap problem
// Brute force solution
// Solved in 20 min
// O(n**2) time solution
// O(1) space solution
function twoSumBrute(nums: number[], target: number): number[] {
    var answer: number[] = [];
    var i: number = 0;
    while (i < nums.length) {
        var j: number = i+1;
        while (j < nums.length) {
            if (nums[i] + nums[j] == target) {
                answer.push(i);
                answer.push(j);
                break;
            };
            j++;
        };
        if (answer.length >= 2) {
            break;
        };
        i++;
    };
    return answer;
};

// Hashmap solution to the same as above
// Solved over 30 min - Need to restudy this and more practice
// O(2n) = O(n) time solution
// O(n) space solution
function twoSum(nums: number[], target: number): number[] {
    // 1. build and populate the hashmap
    var diff_map: any = {};
    for (var i: number = 0; i < nums.length; i++) {
        var key: string = nums[i].toString();
        if (key in diff_map) {
            diff_map[key].push(i);
        } else {
            diff_map[key] = [i];
        };
    };
    // 2. find the first 2 numbers that work and return them
    for (key in diff_map) {
        if (diff_map[key].length > 1 && parseInt(key)*2 == target) {
            return [diff_map[key][0], diff_map[key][1]];
        };
        if (diff_map[target-parseInt(key)]) {
            return [diff_map[key][0], diff_map[target-parseInt(key)][0]];
        };
    };
    // 2b. return a blank if none of these work
    var blank: number[] = [];
    return blank;
};


export {twoSum};