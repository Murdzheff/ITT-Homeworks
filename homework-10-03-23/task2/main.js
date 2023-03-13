let randomize = document.getElementById("randomize");
let container = document.getElementById("container");

randomize.addEventListener("click", (e) => {
    e.preventDefault();

    let foxArr = []

    for (let i = 0; i < 6; i++) {
        let fox = fetch("https://randomfox.ca/floof/.")
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return console.log("No fox found in that forest");
                }
            })
            .then(value => {
                return value
            })

        foxArr.push(fox);
    }
    
    let all = Promise.all(foxArr);

    all
        .then(response => {
            response.forEach(e => {
                let foxieImg = document.createElement("img");
                foxieImg.src = e.image
                foxieImg.id = "fox";

                
                container.appendChild(foxieImg);
                
            })
        })
        .catch(() => {
            return console.log("One fox ran away and the other followed it...")
        })
})











