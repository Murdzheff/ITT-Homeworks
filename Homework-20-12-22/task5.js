
let m = 3;
let n = 3;
let arr = [];
temp = 0;
sum = 0;
row = 0;

for (let i = 0; i < m; i++) {
    arr.push([]);
}



for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        arr[i][j] = Math.ceil(Math.random() * 9);
    }

}


console.log(arr);


for (j = 0; j < m; j++) {
    for (k = 0; k < n; k++) {
        temp += arr[j][k];
        if (temp >= sum) {
            sum = temp;
            row = j + 1;
        }
    }
    temp = 0;
}

console.log(row + " ред.");