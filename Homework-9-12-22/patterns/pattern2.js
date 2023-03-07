for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if (i == 2 || i == 4) {
            pattern += 0 + "";
        } else {
        pattern += 1 + "";
        };
    }
    console.log(pattern);
};