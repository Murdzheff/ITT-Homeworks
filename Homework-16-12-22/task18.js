let arr1 = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
let arr3 = [];
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
        arr3.push(arr1[i]);
    } else if (arr1[i] < arr2[i]) {
        arr3.push(arr2[i]);
    } else {
        arr3.push(arr1);
    }
};
console.log(arr1);
console.log(arr2);
console.log(arr3);