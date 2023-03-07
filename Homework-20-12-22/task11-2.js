let n = 5;
let m = 4;

let result = [];
for (let i = 0; i < m; i++) {
  let row = [];
  for (let j = 0; j < n; j++) {
    row.push((j * m) + i + 1);
  }
  result.push(row);
}

console.log(result);

