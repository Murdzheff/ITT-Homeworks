for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if(j == 2 || j == 4) {
            pattern += 1 + "";
        } else {
        pattern += 0 + "";
        };
    };
    console.log(pattern);
};