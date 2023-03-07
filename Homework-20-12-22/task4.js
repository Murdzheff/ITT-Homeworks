let arr = [0,1,0,1,1,1,1,0,0,0];

for (let i = 1; i < arr.length; i++) {
    const hasZero = arr[i] === 0;

    if (hasZero) {
        arr.unshift(arr[i]);
        arr.splice(i + 1,1);
    }
}

console.log(arr);