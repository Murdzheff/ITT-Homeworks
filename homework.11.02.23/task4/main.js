let naruto = document.getElementById("naruto");
naruto.style.left = 0;
naruto.style.top = 0;
function detectKey(e) {
    if (e.keyCode == '38' && parseInt(naruto.style.top) >= -1) {
        // up arrow
        naruto.style.top = (parseInt(naruto.style.top) - 10) + "px";
        document.getElementById("audio").play();
    }   
    else if (e.keyCode == '40' && parseInt(naruto.style.top) <= 190) {
        // down arrow
        naruto.style.top = (parseInt(naruto.style.top) + 10) + "px";
        document.getElementById("audio").play();
    }
    else if (e.keyCode == '37' && parseInt(naruto.style.left) >= -1) {
       // left arrow
        naruto.style.left = (parseInt(naruto.style.left) - 10) + "px";
        document.getElementById("audio").play();
    }
    else if (e.keyCode == '39' && parseInt(naruto.style.left) <= 800) {
       // right arrow
       naruto.style.left = (parseInt(naruto.style.left) + 10) + "px";
       document.getElementById("audio").play();
    }
}

window.addEventListener("keydown", detectKey)

