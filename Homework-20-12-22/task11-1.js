let m = 4;
let n = 5;

let matrix = [];
let count = 0;



for (let i = 0; i < m; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
        count++
        matrix[i][j] = count;
    }

}

console.log(matrix)