let cardNum =  Math.ceil(Math.random() * 51);
let cardNumStr = "";
let paint = "";
let card = "";

let test = 0



for (i = cardNum; i <= 52; i++) {
    switch (i) {
        case 1:
        case 5:
        case 9:
        case 13:
        case 17:
        case 21:
        case 25:
        case 29:
        case 33:
        case 37:
        case 41:
        case 45:
        case 49:
            paint = "Спатия";
            break;
        case 2:
        case 6:
        case 10:
        case 14:
        case 18:
        case 22:
        case 26:
        case 30:
        case 34:
        case 38:
        case 42:
        case 46:
        case 50:
            paint = "Каро";
            break;
        case 3:
        case 7:
        case 11:
        case 15:
        case 19:
        case 23:
        case 27:
        case 31:
        case 35:
        case 39:
        case 43:
        case 47:
        case 51:
            paint = "Купа";
            break;
        default:
            paint = "Пика";
    };

   
    switch (i) {
        case 1:
        case 2:
        case 3:
        case 4:
            card = "Двойка";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            card = "Тройка";
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            card = "Четворка";
            break;
        case 13:
        case 14:
        case 15:
        case 16:
            card = "Петица";
            break;
        case 17:
        case 18:
        case 19:
        case 20:
            card = "Шестица";
            break;
        case 21:
        case 22:
        case 23:
        case 24:
            card = "Седмица";
            break;
        case 25:
        case 26:
        case 27:
        case 28:
            card = "Осмица";
            break;
        case 29:
        case 30:
        case 31:
        case 32:
            card = "Девятка";
            break;
        case 33:
        case 34:
        case 35:
        case 36:
            card = "Десятка";
            break;
        case 37:
        case 38:
        case 39:
        case 40:
            card = "Вале";
            break;
        case 41:
        case 42:
        case 43:
        case 44:
            card = "Дама";
            break;
        case 45:
        case 46:
        case 47:
        case 48:
            card = "Поп";
            break;
        case 49:
        case 50:
        case 51:
        case 52:
            card = "Асо";
            break;
        
    } 

   

    cardNumStr += card + " - " + paint + ", ";
    
    
};



console.log(cardNumStr)