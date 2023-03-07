//creating the main grid and cards
document.body.style.backgroundImage = "url(./assets/background.jpg)"
document.body.style.display = "flex";
document.body.style.fontFamily = "sans-serif";
document.body.style.height = "100vh";
let grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "1fr 1fr 1fr";
grid.style.height = "60%";
grid.style.width = "80%";
document.body.appendChild(grid);
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
let kids = grid.children;

//styling cards
for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifySelf = "center";
    card.style.alignItems = "center";
    card.style.textAlign = "center";
    card.style.height = "100%";
    card.style.backgroundColor = "white";
    card.style.width = "80%";
    grid.appendChild(card);

    //appending images
    let img = document.createElement("img");
    img.style.objectFit = "cover";
    img.src = `./assets/img${i+1}.webp`;
    img.style.height = "60%";
    img.style.width = "100%";
    grid.children[i].appendChild(img);

    //appending titles
    let title = document.createElement("h2");
    title.id = `title${i+1}`;
    title.style.margin = "3%";
    title.style.fontSize = "170%"
    title.innerText = "placeholder";
    grid.children[i].appendChild(title);

    //appending resumes
    let resume = document.createElement("p");
    resume.style.color = "#808080"
    resume.style.width = "80%";
    resume.innerText = "neshto neshto neshto neshto neshto neshto neshto";
    grid.children[i].appendChild(resume);

    //appending pricetags
    let priceTag = document.createElement("h3");
    priceTag.id = `price${i+1}`;
    priceTag.style.fontSize = "220%";
    priceTag.style.margin = "5%";
    priceTag.innerText = "$55";
    grid.children[i].appendChild(priceTag);

    //appending stars
    let stars = document.createElement("img");
    stars.src = "./assets/stars.webp"
    stars.style.height = "8%";
    stars.style.width = "28%";
    grid.children[i].appendChild(stars);

    //creating the buttons
    let button = document.createElement("button");
    button.style.cursor = "pointer";
    button.id = `button${i+1}`
    button.style.color = "white";
    button.style.height = "10%";
    button.style.width = "100%";
    button.innerText = "ADD TO CART";
    button.style.border = "none";
    button.style.fontSize = "170%"
    
    grid.children[i].appendChild(button);

}

document.getElementById("button1").style.backgroundColor = "#18b270";
document.getElementById("button2").style.backgroundColor = "#4f1188";
document.getElementById("button3").style.backgroundColor = "#f7002b";

document.getElementById("price1").style.color = "#18b270";
document.getElementById("price2").style.color = "#4f1188";
document.getElementById("price3").style.color = "#f7002b";




