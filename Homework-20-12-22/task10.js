
const arr = [1, 2, 2, 3, 3, 3,4,4,4,4,6,6,6,6,6];


let elem = arr[0];
let count = 1;


for (let i = 1; i < arr.length; i++) {
  let temp = 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      temp++;
    }
  }
  if (temp > count) {
    elem = arr[i];
    count = temp - 1;
  }
}


console.log(elem); 
console.log(count)

