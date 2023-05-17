// Runs the leetcode recursion 2 problems
// Solution files
import {
    sortArray
} from './recursive2_202306';


// Testing sortArray - Merge Sort
function mergeSortArrayTest(): void {
    function mergeSortRun(nums: number[]): void {
        console.log(`Merge sorting [${nums}] to:`);
        var sorted: number[] = sortArray(nums);
        console.log(`[${sorted}]`);
    };
    mergeSortRun([5,2,3,1]);
    mergeSortRun([5,1,1,2,0,0]);
};


export {
    mergeSortArrayTest
};