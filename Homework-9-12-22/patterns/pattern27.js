for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 5; j >= i; j--) {
        if (i == 1 && j <= 5 >= i) {
            pattern += j;
        } else if (i == 2 && j <= 4 <= i) {
            pattern += j - 1;
        } else if (i == 3 && j <= 3 <= i) {
            pattern += j - 2;
        } else if (i == 4 && j <= 4 <= i) {
            pattern += j - 3;
        } else {
            pattern += j - 4;
        };
    };
    console.log(pattern);
};