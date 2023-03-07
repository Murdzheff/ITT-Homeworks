for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
        switch (i) {
            case 1:
            case 3:
            case 5:
                pattern += 1;
                break;
            case 2:
            case 4:
                pattern += 0;
                break;

        };
    };
    console.log(pattern);
};