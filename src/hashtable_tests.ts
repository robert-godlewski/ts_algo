// Runs the leetcode hashtable problems
import {
    twoSum,
    isIsomorphic,
    findRestaurant,
    firstUniqChar,
    intersect
} from './hashtables_202303';

// Solving twoSum
function twoSumTest(nums: number[], target: number): void {
    console.log(`Trying to find 2 numbers in [${nums}] that = ${target} are:`);
    var answer: number[] = twoSum(nums, target);
    console.log(answer);
};

// Solving isIsomorphic
function isomorphicTest(s: string, t:string): void {
    var answer: boolean = isIsomorphic(s, t)
    console.log(`Is (${s}) isomorphic to (${t})? ${answer}`);
};

// Solving findRestaurant
function findRestaurantTest(list1: string[], list2: string[]): void {
    console.log(`First list of Restaurants: [${list1}]`);
    console.log(`Second list of Restaurants: [${list2}]`);
    var common_rest_list: string[] = findRestaurant(list1, list2);
    console.log(`Found these Restaurants: [${common_rest_list}]`);
};

// Solving firstUniqChar
function firstUniqCharTest(s: string): void {
    var unique_index: number = firstUniqChar(s);
    console.log(`First unique charater index in ${s} = ${unique_index}`);
    if (unique_index >= 0) {
        console.log(`Letter is ${s[unique_index]}`);
    } else {
        console.log(`Did not find a unique letter in ${s}`);
    };
};

// Solving intersect
function intersectMapTest(nums1: number[], nums2: number[]): void {
    console.log(`Where does [${nums1}] intersect with [${nums2}]?`);
    var answer = intersect(nums1, nums2);
    console.log(`At [${answer}]`);
};

export {
    twoSumTest,
    isomorphicTest,
    findRestaurantTest,
    firstUniqCharTest,
    intersectMapTest
};
