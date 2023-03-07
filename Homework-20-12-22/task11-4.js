let m = 5;
let n = 4;

let matrix = [];



for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
        if (j % 2 === 0) {
            matrix[i][j] = (n * j) + i + 1;
        } else {
            matrix[i][j] = n * (j + 1) - i;
        }
    }

}

console.log(matrix)
