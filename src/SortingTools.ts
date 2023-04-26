// A group of sorting tools that I have developed
// This is just a tool to swap variables in an array
function swap(arr: number[], index1: number, index2: number): number[] {
    var temp: number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};

// Need to test
// O(1) space complexity
// O(n) time complexity (best case)
// O(n**2) time complexity (average case)
function bubbleSort(arr: number[]): number[] {
    for (var k: number = 1; k < arr.length; k++) {
        // Adding in a flag so that we optimized that we already whent through the whole array or not
        var flag: number = 0;
        for (var i: number = 0; i < arr.length-k; i++) {
            if (arr[i] > arr[i+1]) {
                arr = swap(arr, i, i+1);
                flag++;
            };
        };
        if (flag == 0) {
            break;
        };
    };
    return arr;
};

// Need to test
// O(1) space complexity
// O(n**2) time complexity
function selectionSort(arr: number[]): number[] {
    for (var j: number = 0; j < arr.length; j++) {
        // iMin is used to switch the minimum with the comparing index
        var iMin: number = j;
        for (var i: number = j+1; i < arr.length; i++) {
            if (arr[i] < arr[iMin]) {
                iMin = i;
            };
        };
        if (iMin != j) {
            arr = swap(arr, i, iMin);
        };
    };
    return arr;
};

// Need to test
// O(1) space complexity
// O(n) time complexity (best case)
// O(n**2) time complexity (average case)
function insertionSort(arr: number[]): number[] {
    for (var p: number = 1; p < arr.length; p++) {
        for (var i: number = p; i > 0; i--) {
            if (arr[i] < arr[i-1]) {
                arr = swap(arr, i, i-1);
            };
        };
    };
    return arr;
};

// Need to test
// O(n) space complexity
// O(n logn) time complexity
function mergeSort(arr: number[]): number[] {
    if (arr.length > 1) {
        // Recursivly build 2 arrays to sort through
        var center: number = arr.length / 2;
        center = Math.ceil(center);
        var left: number[] = arr.slice(0, center);
        left = mergeSort(left);
        var right: number[] = arr.slice(center+1);
        right = mergeSort(right);
        // Merge the 2 arrays back into arr sorted
        var i: number = 0;
        var j: number = 0;
        var k: number = 0;
        while (i < arr.length) {
            if (j < left.length && k < right.length) {
                if (left[j] <= right[k]) {
                    arr[i] = left[j]
                    j++;
                } else {
                    arr[i] = right[k];
                    k++;
                };
            } else if (j < left.length) {
                arr[i] = left[j];
                j++;
            } else if (k < right.length) {
                arr[i] = right[k];
                k++;
            };
            i++;
        };
    };
    return arr;
};

// Need to build out and test
// O(logn) space complexity
// O(n logn) time complexity (average case)
// O(n**2) time complexity (worst case)
function quickSort(arr: number[]): number[] {
    // 1. Select Pivot item (either the middle/ first/ last item)
    // 2. Group the items less than the pivot to the left and greater than the pivot to the right
    // 3. Recurse sort the items to the left of the pivot and sort then the right of the pivot and sort
    return arr;
};

// Need to build out and test
// O(1) space complexty
// O(n logn) time complexity
function heapSort(arr: number[]): number[] {
    // need to add code here
    return arr;
};

// Need to build out and test
// O(n) space complexity
// O(n+k) time complexity (average)
// O(n**2) time complexity (worst)
function bucketSort(arr: number[]): number[] {
    // need to add code here
    return arr;
};

// Used to help with Counting and Radix Sorting Algorithms as a first step
// O(1) space complexity
// O(n) time complexity
function findMaxNum(arr: number[]): number {
    // Find the maximum number in arr
    var maxNum: number = arr[0];
    for (var i: number = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        };
    };
    return maxNum;
};

// Used to help with sizing a counter array for Counting and Radix Sorting Algorithms as a second step
function counterArr(size: number): number[] {
    var counts: number[] = [];
    for (var i: number = 0; i <= size; i++) {
        counts.push(0);
    };
    return counts;
};

// Need to test
// O(k) space complexity
// O(n+k) time complexity
function countingSort(arr: number[]): number[] {
    var maxNum: number = findMaxNum(arr);
    // Setup a counts to keep track of the values of the number array starting with 0 in each index and increment when we find one.
    var counts: number[] = counterArr(maxNum);
    var i: number = 0;
    while (i < arr.length) {
        counts[arr[i]]++;
        i++;
    };
    // Replace the values in arr based off of the number of items in each index of counts and decrement untill each place is 0
    while (i >= 0) {
        i--;
        if (counts[counts.length-1] == 0) {
            counts.pop();
            i++;
        } else {
            arr[i] = counts.length-1;
        };
    };
    return arr;
};

// Need to build out and test - Does not work yet!
// O(n+k) space complexity
// O(nk) time complexity
function radixSort(arr: number[]): number[] {
    // Find the most significant digit in each number in arr
    var maxSigD: number = 1;
    for (var i: number = 0; i < arr.length; i++) {
        var temp: string = arr[i].toString();
        if (maxSigD < temp.length) {
            maxSigD = temp.length;
        };
    };
    // count sort each and decrement - Stuck here
    // function specialCountSort(arr: number[], maxSigD: number, sigDiff: number): number[] {
    //     var counts: number[] = counterArr(sigDiff);
    //     var i: number = 0;
    //     while (i < arr.length) {
    //         var tempStr: string = arr[i].toString();
    //     }
    // }
    // arr = specialCountSort(arr, maxSigD, maxSigD)
    return arr;
};

export {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    countingSort,
    radixSort
};