let num = 1;
let value = "";

while (num <= 9) {
    for (i = num; i <= 9; i++) {
        value += `${num} * ${i}; `;
    }
    num++
    value += "\n"
}

console.log(value);