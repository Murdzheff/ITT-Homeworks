/**Да се състави програма, чрез която се въвеждат 2 естествени
числа N, M от интервала [10..5555].
Програмата, чрез цикъл for, да извежда всички числа от
интервала, които са кратни на 50 в низходящ ред.
Пример: 25,249
Изход: 200,150,100, 50 */

let n = Math.ceil(Math.random() * (5555 - 10 + 1) + 10);
let m = Math.ceil(Math.random() * (5555 - 10 + 1) + 10);
let numStr = "";

console.log(n);
console.log(m);
console.log();

if (n < m) {
    for (i = m; i >= n; i--) {
        if (i % 50 == 0) {
            numStr += i + ",";
        };
    };
} else {
    for (i = n; i >= m; i--) {
        if (i % 50 == 0) {
            numStr += i + ",";
        };
    };
}

console.log(numStr);