 let mirrorArr = [2,3,2];
 let isMirror = true;
for (i = 0; i < mirrorArr.length / 2; i++) {
    if (mirrorArr[i] !== mirrorArr[mirrorArr.length - (i + 1)]) {
        isMirror = false;
    };
};

console.log(isMirror)
