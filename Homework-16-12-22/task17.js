let arr = [1,3,2,4,3,7];
let zigzag = true;

for (i = 0; i < arr.length; i++) {
   if (i % 2 == 0 && arr[i] >= arr[i + 1]) {
        zigzag = false;
   } else if (i % 2 !== 0 &&  arr[i] <= arr[i + 1]) {
        zigzag = false;
   }
};

if (zigzag) {
    console.log("изпълнява изискванията за зигзагообразна нагоре редица.")
} else {
    console.log(zigzag);
};
