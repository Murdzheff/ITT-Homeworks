let num = 4434;
console.log(num);

let number5 = num % 10;
let number4 = Math.floor(num % 100 / 10);
let number3 = Math.floor(num % 1000 / 100);
let number2 = Math.floor(num % 10000 / 1000);
let number1 = Math.floor(num % 100000 / 10000);


let numberstr5 = number5 + "";
let numberstr4 = number4 + "";
let numberstr3 = number3 + "";
let numberstr2 = number2 + "";
let numberstr1 = number1 + "";

let around = "";
let count = 0;
do {
    if (num < 100) {
    around += numberstr5 + numberstr4 + "";
    } else if (num >= 100 && num < 1000) {
        around += numberstr5 + numberstr4 + numberstr3 + "";
    } else if (num >= 1000 && num <10000) {
        around += numberstr5 + numberstr4 + numberstr3 + numberstr2 + "";
    } else { 
        around += numberstr5 + numberstr4 + numberstr3 + numberstr2 + numberstr1 + "";
    }
    
    count++
} while (count < 1);

console.log(around);

if (around == num) {
    console.log("It a Palindrome!")
} else {
    console.log("It's not a palindrome... ;(")
}