/*Да се прочете число от екрана(конзолата) и да се
изведе сбора на всички числа между 1 и въведеното число. */

const numInput = Math.ceil(Math.random() * 10);
console.log(numInput);
let sum = 0;

for (let i = 1; i <= numInput; i++) {
    sum = sum + i;
};

console.log(sum);