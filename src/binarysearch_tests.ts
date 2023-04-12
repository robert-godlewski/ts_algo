// Test runs for binary search algorithms
import {testSearch1} from "./binarysearch_202304";

function search_template_1(): void {
    console.log("Running rotated sorted array binary searches:");
    var testarr1: number[] = [4,5,6,7,0,1,2];
    testSearch1(testarr1, 0);
    testSearch1(testarr1, 3);
    testSearch1([1], 0);
};

export {search_template_1};