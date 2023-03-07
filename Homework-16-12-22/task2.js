let input = [5, 3, 5, 8, 3];
let newArr = [];

for (let i = 0; i < input.length; i++) {
    newArr[i] = input[i];
}

console.log(newArr);

for (i = newArr.length - 1; i >= 0; i--) {
    newArr.push(newArr[i]);
};

console.log(newArr)