let arr = [1,2,1,2,1,2,1,2];
let flag = true;
for (i = 1; i < arr.length - 1; i++) {
    const downwards = arr[i] <= arr[i - 1] && arr[i] >= arr[i + 1];
    const upwards = arr[i] >= arr[i - 1] && arr[i] <= arr[i + 1];

    if (downwards || upwards) {
        flag = false;
        break;
    }
}

if (flag) {
    console.log("Тоз масив е озъбен.");
} else {
    console.log("Не е озъбен.")
}