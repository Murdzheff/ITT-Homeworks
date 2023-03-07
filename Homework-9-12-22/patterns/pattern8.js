for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
        if (i == 1 && j == 1 || i == 1 && j == 5 ||
            i == 2 && j == 2 || i == 2 && j == 4 ||
            i == 3 && j == 3 || i == 4 && j == 2 ||
            i == 4 && j == 4 || i == 5 && j == 1 ||
            i == 5 && j == 5) {
                pattern += 1;
            } else {
        pattern += 0 + "";
            };
        
    };
    console.log(pattern);
};