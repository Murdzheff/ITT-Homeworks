let arr = [1,2,3,4,"az",true];
let ch = "az";
let flag = false;
let indexHold = 0;

for (let i = 1; i < arr.length; i++) {
    hasCh = arr[i] === ch;
    if (hasCh) {
        indexHold = i;
        flag = true;
        break;
    }
}

if (flag) {
    console.log("Има нещо.")
    console.log(`index is ${indexHold}`);
} else {
    console.log("Няма нищо.")
}
