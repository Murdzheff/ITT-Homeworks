for (i = 1; i <= 5; i++) {
    let pattern = "";
    for (j = 1; j <= 5; j++) {
       switch (i) {
        case 1:
            pattern += j + 1 - 1 + "  ";
            break;
        case 2:
            pattern += j + 5 + "  ";
            break;
        case 3:
            pattern += j + 10 + " ";
            break;
        case 4:
            pattern += j + 15 + " ";
            break;
        case 5:
            pattern += j + 20 + " ";
            break;
       };
    };
    console.log(pattern);
};