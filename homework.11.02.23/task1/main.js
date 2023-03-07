let images = [];
for (let i = 0; i < 6; i++ ) {
    let image = document.createElement("img");
    image.src = `./assets/images/img${i+1}.jpeg`;
    images.push(image);
}

console.log(images);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.body.addEventListener("keyup",(e) => {
    removeAllChildNodes(document.body);
    if (e.key == " " || e.code == "Space") {
        let randomImg = Math.floor(Math.random() * 6);
        document.body.appendChild(images[randomImg]);
    } else {

    }
}); 