/* Въведете число N, чрез уеб форма и изкарайте като
резултат следния триъгълник с височина */

let tri = Math.ceil(Math.random() * 10);
console.log(`The height of the triangle is ${tri}`);
console.log("");
let tree = "";

for (i = 1; i <= tri; i++) {
    tree = "     ";
    for (n = i; n <= tri; n++) {
        tree += " ";
    }
    for (m = 0; m < (i*2) - 1 ; m++ ){
        tree += "*";
    }
    console.log(tree);
};