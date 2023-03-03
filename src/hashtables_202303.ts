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


// Isomorphic Strings
// Solved over 30 min
// Best time and space cases = O(1)
// O(2n) = O(n) time solution
// O(2n) = O(n) space solution
function isIsomorphic(s: string, t: string): boolean {
    // Base case to kill the program if the lengths are not the same
    if (s.length != t.length) {
        return false;
    };
    var s2t_map: any = {};
    var t2s_map: any = {};
    for (var i: number = 0; i < s.length; i++) {
        if (!s2t_map[s[i]] && !t2s_map[t[i]]) {
            // Add in the hashes for the letters
            s2t_map[s[i]] = {
                "corres": t[i],
                "indexes": [i]
            };
            t2s_map[t[i]] = {
                "corres": s[i],
                "indexes": [i]
            };
        } else if (s2t_map[s[i]] && t2s_map[t[i]]) {
            // Updates the index list if the corres(ponding) letters are equal
            if (s2t_map[s[i]]["corres"] === t[i] && t2s_map[t[i]]["corres"] === s[i]) {
                s2t_map[s[i]]["indexes"].push(i);
                t2s_map[t[i]]["indexes"].push(i);
            } else {
                return false;
            };
        } else {
            return false
        };
    };
    return true;
};


// Minimum Index Sum of Two Lists
// Solved in 2:30
function findRestaurant(list1: string[], list2: string[]): string[] {
    var name_map: any = {};
    for (var i: number = 0; i < list1.length; i++) {
        if (!name_map[list1[i]]) {
            name_map[list1[i]] = {
                "index_sum": i,
                "indexes": [i]
            };
        };
    };
    for (var i: number = 0; i < list2.length; i++) {
        if (name_map[list2[i]]) {
            name_map[list2[i]]["index_sum"] += i;
            name_map[list2[i]]["indexes"].push(i);
        };
    };
    var lowSum: number = 1000;
    var key: string = name_map[list1[0]];
    var answer: string[] = [];
    for (key in name_map) {
        if (name_map[key]["index_sum"] <= lowSum && name_map[key]["indexes"].length > 1) {
            if (name_map[key]["index_sum"] < lowSum) {
                answer = [];
                lowSum = name_map[key]["index_sum"];
            };
            answer.push(key);
        };
    };
    return answer;
};


// First Unique Character in a string
// Solved in 15 min
// O(n) time and space solutions
function firstUniqChar(s: string): number {
    var s_map: any = {};
    for (var i: number = 0; i < s.length; i++) {
        if (s_map[s[i]]) {
            s_map[s[i]].push(i);
        } else {
            s_map[s[i]] = [i];
        };
    };
    for (var i: number = 0; i < s.length; i++) {
        if (s_map[s[i]].length == 1) {
            return i;
        };
    };
    return -1;
};


// Intersection of 2 arrays II
// Regular solution
// Solved in 30 min - Bad solution
function intersect(nums1: number[], nums2: number[]): number[] {
    var answer: number[] = [];
    for (var i: number = 0; i < nums1.length; i++) {
        for (var j: number = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                answer.push(nums1[i]);
            } else if (answer.length > 0) {
                break;
            };
        };
        if (answer.length > 0) {
            break;
        };
    };
    return answer;
};


export {twoSum, isIsomorphic, findRestaurant, firstUniqChar, intersect};