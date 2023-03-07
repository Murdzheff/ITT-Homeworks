for (i = 1; i <= 9; i += 2) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
       switch (j) {
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
        case 6: 
            pattern += 6;
            break;
        case 7: 
            pattern += 7;
            break;
        case 8:
            pattern += 8;
            break;
        default:
            pattern += 9;
            break;
       }
    };
    console.log(pattern);
};