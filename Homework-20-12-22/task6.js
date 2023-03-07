let m = 5;
let n = 5;

let diagonal = [];
let matrix = [];


for (let i = 0; i < m; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.ceil(Math.random() * 9);
    }

}

console.log(matrix)

for (i = 0; i < m; i++) {
    diagonal.push(matrix[i][i]);
}

console.log(diagonal);