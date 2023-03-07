let m = 3;
let n = 3;

let inArr = [];
let matrix = [];

for (let i = 0; i < m; i++) {
    matrix.push([]);
}



for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.ceil(Math.random() * 9);
    }

}

console.log(matrix)