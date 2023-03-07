let randomNum = 100; //Math.ceil(Math.random() * 999);
let count = 0;
let startNum = randomNum;

while (count < 10 ) {
    if (randomNum !== startNum) {
    if (randomNum % 2 === 0 || randomNum % 3 === 0 || randomNum % 5 === 0) {
        count++;
        console.log( count + ":" + randomNum);
    }
};
    randomNum++

};

