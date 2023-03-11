let randomize = document.getElementById("randomize");

randomize.addEventListener("click", (e) => {

    e.preventDefault();

    let img =  document.getElementById("img");
    let obj =  fetch("https://dog.ceo/api/breeds/image/random");

    obj
        .then(response => {
            return response.json();
        })
        .then(value => {
            img.src = value.message;
        })

})










