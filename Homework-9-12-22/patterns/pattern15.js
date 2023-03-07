for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if (i == 1) {
            pattern += j;
        } else if (i == 5 && j >= 1) {
            pattern += 5;
        } else if (i == 4 && j > 1) {
            pattern += 5;
        } else if (i == 4 && j < 2) {
            pattern += 4;
        } else if (i == 3 && j == 1) {
            pattern += 3;
        } else if (i == 3 && j == 2) {
            pattern += 4;
        } else if (i == 3 && j > 2) {
            pattern += 5;
        } else if (i == 2 && j > 3) {
            pattern += 5;
        } else if (i == 2 && j == 3) {
            pattern += 4;
        } else if (i == 2 && j == 2) {
            pattern += 3;
        } else {
            pattern += 2;
        };
    };
    console.log(pattern);
};