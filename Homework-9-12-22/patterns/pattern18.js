for (i = 1; i <= 9; i++) {
    let pattern = "";
    for (j = 1; j <= 9; j++) {
        if (i == 1 || j == 1 || j == 9 | i == 9) {
            pattern += 5;
        } else if (i == 2 || j == 2 || i == 8 || j == 8) {
            pattern += 4;
        } else if (i == 3 || j == 3 || i == 7 || j == 7) {
            pattern += 3;
        } else if (i == 4 || j == 4 || i == 6 || j == 6) {
            pattern += 2;
        } else {
            pattern += 1;
        };
    };
    console.log(pattern)
};