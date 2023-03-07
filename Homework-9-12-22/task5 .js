/*Да се въведат от потребителя 2 числа. И да се изведат
на екрана всички числа от по-малкото до по-голямото. */

let firstNum = Math.ceil(Math.random() * 20);
let secondNum = Math.ceil(Math.random() * 20);
let numStr = "";
console.log("First number is " + firstNum);
console.log("Second number is " + secondNum);

if (firstNum < secondNum) {
    for (i = firstNum; i <= secondNum; i++) {
    numStr += i + ",";
    
    };
} else {
    for (i = secondNum; i <= firstNum; i++) {
        numStr += i + ",";
    };
}
console.log(numStr);