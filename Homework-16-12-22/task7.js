let array1 = [2,3,-11,7];
let zero = 0;
let newArr = [];


for (i = 0; i < array1.length; i++) {
    if (i == 0) {
        newArr.push(zero + array1[i + 1]);
    } else if (i == array1.length - 1) {
        newArr.push(array1[i - 1] + zero);
    } else {
        newArr.push(array1[i - 1] + array1[i + 1]);
    }
};
console.log(array1)
console.log(newArr)