let arr = [1,2,3,4,5,6,7];
let arr2 = [];
let indexHold = arr[1];

console.log(arr);

for (i = 0; i < arr.length; i++) {
    if (i == 0) {
        arr2.splice(0,1,indexHold);
    } else if (i == 1) {
        arr2.splice(1,1,arr[0]);
    } else if (i == 2) {
        arr2.push(arr[i + i - 1]);
    } else if (i == 3) {
        arr2.push(arr[i + i - 4]);
    } else if (i == 4) {
        arr2.push(arr[(i - 3) * (i + 1)]);
    } else if (i == 5) {
        arr2.push(arr[(i - 3) * (i - 3)]);
    } else {
        arr2.push(arr[i])
    }
}

console.log(arr2);


