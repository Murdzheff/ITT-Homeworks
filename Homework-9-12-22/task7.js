/* Започвайки от 3, да се изведат на екрана първите n
числа които се делят на 3. Числата да са разделени със запетая */

const digitCount = Math.ceil(Math.random() * 20 + 3);
let numberThree = 0;
let numStr = "";

for (let i = 1; i <= digitCount; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    numStr += i + ",";
};

console.log(numStr);
