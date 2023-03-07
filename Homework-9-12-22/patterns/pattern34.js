for (i = 5; i >= 1; i--) {
    let pattern = "";
    for (j = 1; j <= i * 2; j += 2) {
        switch (i) {
            case 5:
                pattern += j;
                break;
            case 4: 
                pattern += j + 2;
                break;
            case 3:
                pattern += j + 4;
                break;
            case 2: 
                pattern += j + 6;
                break;
            case 1:
                pattern += j + 8;
                break;

        };
    };
    console.log(pattern);
};