const matrix = [[1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [2, 3, 4, 5, 6]];

let highestTotal = 0;
let highestpodmatrix;

for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
        const podmatrix = [[matrix[i][j], matrix[i][j + 1]],
                           [matrix[i + 1][j], matrix[i + 1][j + 1]]];
        const total = podmatrix[0][0] + podmatrix[0][1] + podmatrix[1][0] + podmatrix[1][1];
        if (total > highestTotal) {
            highestTotal = total;
            highestpodmatrix = podmatrix;
        }
    }
}

console.log(highestpodmatrix);