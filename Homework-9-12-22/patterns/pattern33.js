for (i = 5; i >= 1; i--) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
        switch (i) {
            case 5:
                pattern += j + 4;
                break;
            case 4: 
                pattern += j + 3;
                break;
            case 3:
                pattern += j + 2;
                break;
            case 2: 
                pattern += j + 1;
                break;
            case 1:
                pattern += j;
                break;

        };
    };
    console.log(pattern);
};