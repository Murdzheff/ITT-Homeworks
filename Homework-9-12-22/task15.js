/* Да се състави програма, която да изчисли сумата на всички
числа от 1 до въведено число N.
Пример: 5
Изход: 15 */

let num = Math.ceil(Math.random() * 10);
console.log(num);
let sum = num;
let i = 1;


//dokato i <= 4,  namali 4 s 1 i go pribavi kym 4
do {
    sum += num - 1;
    
    
} while (num > i && num--);

console.log(sum);



