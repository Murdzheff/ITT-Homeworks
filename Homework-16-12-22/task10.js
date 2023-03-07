let Arr = [1,2];
let mid = 0;

for (i = 0; i < Arr.length; i++) {
    mid += Arr[i];
};

mid /= Arr.length;

console.log(`Средната стойност е ${mid}`);

if (mid >= Math.floor(mid) + 0.5) {
    mid = Math.ceil(mid);
} else {
    mid = Math.floor(mid);
};

console.log(`Най близката стойност е ${mid}`);