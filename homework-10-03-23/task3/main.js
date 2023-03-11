let butn = document.getElementById("getImages");
let cont = document.getElementById("imageContainer");

let dogoArray = [];

butn.addEventListener("click", (e) => {
    e.preventDefault();
    

    for (let i = 0; i < 6; i++) {
        let dogo = fetch("https://dog.ceo/api/breeds/image/random");

        dogo
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return console.log("dogo not found.");
                }
            })
            .then(dogObject => {
                dogoArray.push(dogObject);
            })
    }

    let firstDogoLoaded = Promise.race(dogoArray);

    firstDogoLoaded
        .then(response => {
            cont.src = response.message
            dogoArray = [];
        })

})