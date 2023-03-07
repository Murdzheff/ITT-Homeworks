for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if (j == 1 && i % 2 !== 0 || j== 3 && i % 2 !== 0 || j == 5 && i % 2 !== 0) {
            pattern += 1 + "";
        } else if (j == 2 && i % 2 == 0 || j== 4 && i % 2 == 0) {
            pattern += 1 + "";
        } else {
        pattern += 0 + "";
        };
    };
    console.log(pattern);
};