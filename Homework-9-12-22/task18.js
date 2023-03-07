let num1 = 2;
let num2 = 4;
let i = 0;

if (num1 > num2) {
    do {
        i++
        for (j = 1;j <= num1; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        }
    } while (i < num1);
} else {
    do {
        i++
        for (j = 1;j <= num2; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        }
    } while (i < num2);
};