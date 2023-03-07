let h2 = document.getElementById("h2");

function write () {
    h2.innerText = this.value;
}

let selectContainer = document.getElementById("selectContainer")
let kids = selectContainer.children

for (let i = 1; i < kids.length + 1; i++) {
    kids[i].addEventListener("click",write);
}