let inputArr = [1,2,3,4,5];

let arrStr = ""
for (i = 0; i < inputArr.length; i++) {
    arrStr += inputArr[i] + " ";
    inputArr.splice(i,1,inputArr.length - i);
};

console.log(arrStr);
