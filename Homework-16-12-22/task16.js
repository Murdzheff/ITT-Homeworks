let arr = [-1.12,-2.43,3.1,4.2,0,6.4,-7.5,8.6,9.1,-4];
let arrSum = 0;
zeroCount = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] < -0.231) {
        arr.splice(i,1,(i ** 2) + 41.25);
    } else if (arr[i] > -0.231) {
        arr.splice(i,1, (i + 1)  * arr[i]);
    };
    
    if (arr[i] !== 0) {
        arrSum += arr[i];
    } else if (arr[i] == 0) {
        zeroCount++
    };

};
console.log(arrSum);
console.log(arrSum / (arr.length - zeroCount));
console.log(arr);