let arr = [-23,-55,17,75,56,105,134];
let arrResult = [];

for (i = 0; i < arr.length;i++) {
    if (arr[i] % 5 == 0 && arr[i] > 5) {
        arrResult.push(arr[i]);
    };
}

console.log(arrResult);