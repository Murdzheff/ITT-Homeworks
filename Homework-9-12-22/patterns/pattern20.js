for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
        switch (i) {
            case 1:
                pattern += 1;
                break;
            case 2:
                pattern += 2;
                break;
            case 3:
                pattern += 3;
                break;
            case 4:
                pattern += 4;
                break;
            case 5:
                pattern += 5;
                break;
        };
    };
    console.log(pattern);
};