let m = 3;
let n = 3;

let matrix = [];
let flag = false;

for (let i = 0; i < m; i++) {
    matrix.push([]);
}



for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        let random = Math.random();
        if (random >= 0.5) {
        matrix[i][j] = false;
        } else {
            matrix[i][j] = true;
        }
    }
}

console.log(matrix)

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if ((i + j) < matrix.length - 1 && matrix[i][j] === true) {
            flag = true;
        }
    }
}

console.log(flag);