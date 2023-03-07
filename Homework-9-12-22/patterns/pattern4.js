for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if(j == 5 || i == 5 || j == 1 || i == 1) {
            pattern += 1 + "";
        } else {
        pattern += 0 + "";
        };
    };
    console.log(pattern);
};