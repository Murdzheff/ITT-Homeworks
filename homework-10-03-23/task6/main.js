let userInput = document.getElementById("userInput");
let suggestions = document.getElementById("suggestCont");
let details = document.getElementById("details");

userInput.value = "";
userInput.addEventListener("input", () => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${userInput.value}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                alert("Something went wrong...")
            }
        })
        .then(result => {
            suggestions.innerHTML = "";
            render(result);
        })
})

function render (res) {
    res.forEach(element => {
                

        let sugg = document.createElement("option");
        sugg.innerText = element.name;
        sugg.id = element.id;
        sugg.classList.add("suggestions");

        sugg.addEventListener("click", (e) => {
            e.preventDefault("")
            suggestions.innerHTML = "";
            details.innerHTML = "";

            const name = document.createElement("h2");
            name.innerText = `Name: ${element.name}`
            userInput.value = element.name;

            const origin = document.createElement("h3");
            origin.innerText = `Origin: ${element.origin}`;

            const description = document.createElement("p");
            description.innerText = element.description

            details.append(name,origin,description);
            
            
            
            


        } );
        suggestions.appendChild(sugg);
        
    });
}