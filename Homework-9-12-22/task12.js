/*Да се състави програма, която извежда всички
естествени трицифрени числа, които нямат еднакви цифри т.е.
100,101, 606 и т.н. не се извеждат.*/

let firstDigit = 0;
let secondDigit = 0;
let thirdDigit = 0;

for (i = 100; i <= 999; i++) {
    firstDigit = Math.floor(i / 100);
    secondDigit = Math.floor(i % 100 / 10);
    thirdDigit = Math.floor(i % 10);
    if (firstDigit !== secondDigit && firstDigit !== thirdDigit && secondDigit !== thirdDigit) {
        console.log(i);
    };
};