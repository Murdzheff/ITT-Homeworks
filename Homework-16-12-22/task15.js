let arr = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
let abs = [];
let maxNum = [];

for (let i = 0; i < arr.length; i++) {
    abs.push(Math.abs(arr[i]));
}

for (let i = 0; i <= abs.length - 1; i++) {
    for (let j = 0; j < (abs.length - i - 1); j++) { 
        if (abs[j] > abs[j + 1]) {
            let temp = abs[j];
            abs[j] = abs[j + 1];
            abs[j + 1] = temp;
        }
    }
}

for (let i = abs.length - 1; i >= 3; i--){
    maxNum.unshift(abs[i]);
}

console.log(maxNum);


