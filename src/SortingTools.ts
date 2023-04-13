// A group of sorting tools that I have developed
// This is just a tool to swap variables in an array
function swap(arr: any[], index1: number, index2: number): any[] {
    var temp: any = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};

// O(n**2) complexity - need to test
function bubbleSort(arr: any[]): any[] {
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

// O(n**2) complexity - need to test
function selectionSort(arr: any[]): any[] {
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

// O(n**2) complexity - need to test
function insertionSort(arr: any[]): any[] {
    for (var p: number = 1; p < arr.length; p++) {
        for (var i: number = p; i > 0; i--) {
            if (arr[i] < arr[i-1]) {
                arr = swap(arr, i, i-1);
            };
        };
    };
    return arr;
};

// O(n logn) complexity - need to test
function mergeSort(arr: any[]): any[] {
    if (arr.length > 1) {
        // Recursivly build 2 arrays to sort through
        var center: number = arr.length / 2;
        center = Math.ceil(center);
        var left = arr.slice(0, center);
        left = mergeSort(left);
        var right = arr.slice(center+1);
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

// O(n logn) complexity - need to test
function quickSort(arr: any[]): any[] {
    // need to add code here
    return arr;
};

// O(n logn) complexity - need to test
function heapSort(arr: any[]): any[] {
    // need to add code here
    return arr;
};

// O(n) complexity - need to test
function bucketSort(arr: any[]): any[] {
    // need to add code here
    return arr;
};

// O(n) complexity - need to test
function radixSort(arr: any[]): any[] {
    // need to add code here
    return arr;
};

export {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort
};