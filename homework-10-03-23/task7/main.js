let select = document.getElementById("select");
let pagination = document.getElementById("pagination")
let table = document.getElementById("table");

function render(rows,pages) {
    

    

    let getData = fetch(`https://api.thecatapi.com/v1/images/search?limit=${rows}&page=${pages}&order=Desc`, {
        headers: { "x-api-key": "live_hmp45a0cDWUYOc7tQrVnEcX2ewwccLpUEccfMK74URlcNaLAa1cxzzXEIVdadDM5" }
    })
    getData
        .then(response => {
            return response.json();
        })
        .then(value => {
            table.innerHTML = "";

            pagination.innerHTML = ""

            table.innerHTML = "";

            let headings = document.createElement("tr");

            let idH = document.createElement("th");
            idH.innerText = "ID";

            let imageH = document.createElement("th");
            imageH.innerText = "Image";

            let imgW = document.createElement("th");
            imgW.innerText = "Image Width";

            let imgH = document.createElement("th");
            imgH.innerText = "Image Heigth";

            headings.append(idH,imageH,imgW,imgH);

            table.appendChild(headings);
            table.style.display = "block"

            value.forEach(e => showItems(e));
            pagination.innerHTML = ""
            
            select.addEventListener("change", () => {
                pagination.innerHTML = "";
                render(select.value,1)
            })
            for (let i = 1; i < (100 / rows) + 1; i++) {
                let pageButton = document.createElement("button");
                pageButton.innerText = i;
                
                
                pageButton.onclick =  () => {
                    
                    render(select.value,pageButton.innerText);
                    table.innerHTML = "";
                    value.forEach(element => {
                        showItems(element);
                    });

                    
                }

                pagination.appendChild(pageButton);


            }
        })
    
}

function showItems (el) {

    
    let newRow = document.createElement("tr");
    

    let id = document.createElement("td");
    id.innerText = el.id;
    

    let imgTd = document.createElement("td");

    let image = document.createElement("img");
    image.src = el.url;
    image.style.width = "100px";
    

    imgTd.appendChild(image);
    imgTd.classList.add("imgTd")

    let imgWidth = document.createElement("td");
    imgWidth.innerText = el.width;
    

    let imgHeight = document.createElement("td");   
    imgHeight.innerText = el.height;
    

    newRow.append(id,imgTd,imgWidth,imgHeight);

    table.appendChild(newRow);
}

render(select.value,1);



