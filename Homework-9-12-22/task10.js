/*Въведете число от клавиатурата и определете дали е
просто. Просто число е това което се дели САМО на 1 и на себе
си. */

let num = Math.ceil(Math.random() * 1000);
let primeNum = true;


if (num === 1) {
    console.log("Not a prime number.");
};

if (num > 1) {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            primeNum = false;
            break;
        } 

    };
    if (primeNum) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    };
};

