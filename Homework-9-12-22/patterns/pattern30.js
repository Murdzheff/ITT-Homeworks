for (i = 5; i >= 1; i--) {
    let pattern = "";
    for (j = 5; j >= i; j--) {
        if (i <= 5 >= 1 && j == 5) {
            pattern += i ;
        } else if (i <= 4 >= 1 && j == 4) {
            pattern += i + 1;
        } else if (i <= 3 >= 1 && j == 3) {
            pattern += i + 2;
        } else if (i <= 2 >= 1 && j == 2) {
            pattern += i + 3;
        } else {
            pattern += i + 4;
        };
    };
    console.log(pattern);
};