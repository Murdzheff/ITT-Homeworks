/*Да се състави програма, която извежда всички
естествени трицифрени числа, които имат сбор на цифрите равен
на дадено число.*/

let sum = Math.ceil(Math.random() * (27 - 2 + 1) + 2);
console.log(sum);

let firstDigit = 0;
let secondDigit = 0;
let thirdDigit = 0;

let sumStr = "";
// разделям на стотни,десетични и единични цифри 
for (i = 100; i <= 999; i++) {
    firstDigit = Math.floor(i / 100);
    secondDigit = Math.floor(i % 100 / 10);
    thirdDigit = Math.floor(i % 10);

    if (firstDigit + secondDigit + thirdDigit == sum) {
        sumStr += i + " ";
    };
};

console.log(sumStr);