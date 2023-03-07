let submit = document.getElementById("submitBut");

function deleteNote (event) {
    event.preventDefault();
    let list = document.getElementById("list");
    list.removeChild(this.parentNode);
}

function scratch (event) {
    event.preventDefault();
    if (this.style.textDecoration !== "line-through") {
        this.style.textDecoration = "line-through";
    } else {
        this.style.textDecoration = "none";
    }
    
}

function addNote (event) {
    event.preventDefault();
    let input = document.getElementById("input").value;
    let list = document.getElementById("list");
    let noteContainer = document.createElement("div");
    let newNote = document.createElement("li");
    let deleteBut = document.createElement("button");
    newNote.innerText = input;
    newNote.style.fontSize = "px";
    newNote.style.fontFamily = "'Julee', cursive";
    newNote.style.marginTop = "15px";
    newNote.style.cursor = "pointer";
    deleteBut.className = "delete";
    deleteBut.innerText = "delete";
    deleteBut.addEventListener("click",deleteNote);
    newNote.addEventListener("click", scratch);
    

    list.appendChild(noteContainer);
    noteContainer.appendChild(newNote);
    noteContainer.appendChild(deleteBut);
    console.log(deleteBut.parentNode);
}



document.getElementById("submitBut").addEventListener("click",addNote);