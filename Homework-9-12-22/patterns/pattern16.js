for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if (i == 1) {
            pattern += j;
        } else if (i == 2 && j == 5 || i == 3 && j == 5 ||
                i == 4 && j == 5 || i == 5 && j == 5 ) {
            pattern += 1;
        } else if (i == 3 && j == 4 || i == 4 && j == 4 ||
             i == 5 && j == 4) {
            pattern += 2;
        } else if (i == 4 && j == 3 || i == 5 && j == 3) {
            pattern += 3;
        } else if (i == 5 && j == 2) {
            pattern += 4;
        } else if (i == 2) {
            pattern += 1 + j;
        } else if (i == 3) {
            pattern += 2 + j;
        } else if (i == 4) {
            pattern += 3 + j;
        } else if (i == 5) {
            pattern += 4 + j;
        } 
    };
    console.log(pattern)
};