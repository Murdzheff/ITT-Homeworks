let m = 5;
let n = 5;
let matrix = [];

let sum = 0;

for (let i = 0; i < m; i++) {
    matrix.push([]);
}



for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.ceil(Math.random() * 9);
        if (j < i) {
            sum += matrix[i][j];
        }
    }
    
}


console.log(matrix);
console.log(sum);