let row = 2;
let column = 3;
let matrix = [];
let count = 1;

for (let j = 0; j < row; j++) {
  let temp = [];

  for (let k = 0; k < column; k++) {
    temp.push("@");
  }
  matrix.push(temp);
}

for (let i = 0; i < row; i++) {
  let firstRow = i;

  for (let k = 0; k < column; k++) {
    let firstCol = k;
    if (firstRow >= 0 && firstCol <= column - 1) {
      matrix[firstRow][firstCol] = count;
      firstRow--;
      firstCol++;
      count++;
    }
  }
}

for (let j = 0; j < row; j++) {
  let secondRow = row - 1;

  for (let z = 1; z < column - j; z++) {
    let secondCol = z + j;
    if (secondRow >= 0 && secondCol <= column) {
      matrix[secondRow][secondCol] = count;
      secondRow--;
      count++;
      secondCol++;
    }
  }
}
console.log(matrix);