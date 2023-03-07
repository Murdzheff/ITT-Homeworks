let n = 1;
let resultArr = [n];
for (i = 1; i < 10; i++) {
    if (i == 1) {
        resultArr.push(n);
    } else {
        resultArr.push(resultArr[i - 2] + resultArr[i - 1]);
    }
    };
console.log(resultArr)
