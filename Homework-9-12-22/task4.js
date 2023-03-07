/* Задача 4: Да се изведат на екрана числата от 10 до 1 в обратен
ред. */

let numStr = "";

for (let num = 10; num >= 1; num--) {
    numStr += num + " ";
};

console.log(numStr);