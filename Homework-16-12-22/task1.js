let input = [10,3,5,8,6,-6,7];
let resultNums = [];

for (i = 0; i <= input.length; i ++) {
    if (input[i] % 3 === 0) {
        resultNums.push(input[i]);
    };
};

console.log(resultNums);
let lowestNum = resultNums[0];
for (i = 1; i < resultNums.length; i++) {
   if (resultNums[i] < lowestNum) {
    lowestNum = resultNums[i]
   };
};

console.log(lowestNum);