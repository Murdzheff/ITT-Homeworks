let arr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
let arrResult = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] >= -2.88 &&  arr[i] <= 2.99) {
        arrResult.push(arr[i]);
    }
}

console.log(arrResult);