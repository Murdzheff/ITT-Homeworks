for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
        if (i == 1 && j == 1 || i == 2 && j == 2 || i == 3 && j == 2 ||
            i == 4 && j == 1 || i == 4 && j == 3 || i == 5 && j == 1 ||
            i == 5 && j == 3 || i == 5 && j == 5) {
                pattern += 1;
            } else {
                pattern +=0;
            };
    };
    console.log(pattern);
};