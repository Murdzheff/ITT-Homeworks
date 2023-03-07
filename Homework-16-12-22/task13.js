let number = 150;
let arr = [];
let arrResult = "";

while (number >= 1) {
    arrResult = number % 2 + arrResult;
    number = Math.floor(number / 2);

};
arr.push(arrResult);
console.log(arr);