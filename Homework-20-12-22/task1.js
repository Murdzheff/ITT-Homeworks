let arr = [4,1,2,3,8];


for (let i = 1; i < arr.length; i++) {
    const arrNegative = arr[i] < 0;
    if (arrNegative) {
        console.log("There is a negative number in that array.");
        break;
    } else if (i = arr.length - 1) {
        console.log("There is no negative numbers here.")
    }
}

