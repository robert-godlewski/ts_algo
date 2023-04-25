// Test runs for binary search algorithms
import {
    search1,
    findPeakElement
} from "./binarysearch_202304";

function search_template_1(): void {
    function testSearch1(nums: number[], target: number): void {
        var answer: number = search1(nums, target);
        console.log(`What index is ${target} in [${nums}]? ${answer}`);
    };
    console.log("Running rotated sorted array binary searches:");
    var testarr1: number[] = [4,5,6,7,0,1,2];
    testSearch1(testarr1, 0);
    testSearch1(testarr1, 3);
    testSearch1([1], 0);
};

function find_peak_index(): void {
    function testFindPeakElement(nums: number[]): void {
        var answer: number = findPeakElement(nums);
        console.log(`The index of the peak number in this list [${nums}] = ${answer}`);
    };
    console.log("Running Find Peak Element:");
    testFindPeakElement([1,2,3,1]);
    testFindPeakElement([1,2,1,3,5,6,4]);
};

export {
    search_template_1,
    find_peak_index
};