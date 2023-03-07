for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
        if (i == 3 && j == 2 || i == 4 && j == 2 || i == 4 && j == 3) {
            pattern += 0;
        } else {
            pattern += 1;
        }
    };
    console.log(pattern);
};