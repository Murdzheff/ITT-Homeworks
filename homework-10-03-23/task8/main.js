//THE ORIGINAL API FOR THIS TASK NO LONGER RESPONDS, SO I USED ANOTHER 

let loadingimg = document.getElementById("loading");
loadingimg.style.display = "none";
let btn = document.getElementById("click");
let img =document.getElementById("value");
img.style.display = "none";

btn.addEventListener("click", (e) => {
    img.style.display = "none";
    loadingimg.style.display = "flex";
    e.preventDefault();
    let loading = fetch("https://randomfox.ca/floof/");
    loading
        .then(response => {
            return response.json()
        })
        .then(result => {
            img.style.display = "flex";
            img.src = result.image;
            loadingimg.style.display = "none";
        })
})
