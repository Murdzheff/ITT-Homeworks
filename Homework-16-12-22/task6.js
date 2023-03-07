let arr1 = [3,3,3];
let arr2 = [3,3,3];
let equal = true;
if (arr1.length == arr2.length) {
    console.log("Масивите са с еднаква дължина");
    for (i = 0; i < arr1.length; i ++) {
        if (arr1[i] !== arr2[i]) {
            equal = false;
        } else {
            equal = true;
        };
    };

    if (equal == true) {
        console.log("Масивите са еднакви.");
    } else {
        console.log("Масивите са различни.");
    };

} else {
    console.log("Масивите са с различна дължина, следователно са различни.");
};

