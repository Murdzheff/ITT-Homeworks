for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
        if (i >= 1 <= 5 && j == 1) {
            pattern += i;
        } else if (i >= 2 <= 5 && j == 2) {
            pattern += i - 1;
        } else if (i >= 3 <= 5 && j == 3) {
            pattern += i - 2;
        } else if (i >= 4 <= 5 && j == 4) {
            pattern += i - 3;
        } else {
            pattern += i - 4;
        };
    };
    console.log(pattern);
};