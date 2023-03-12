let userInput = document.getElementById("userInput");
let suggestions = document.getElementById("suggestions");
let details = document.getElementById("details");
userInput.value = "";

userInput.addEventListener("input", () => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${userInput.value}`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            suggestions.innerHTML = "";
            result.forEach(element => {
                

                let sugg = document.createElement("option");
                sugg.innerText = element.name;
                sugg.id = element.id;

                sugg.addEventListener("click", (e) => {
                    e.preventDefault("")
                    suggestions.innerHTML = "";
                    console.log(element)

                    const name = document.createElement("h2");
                    name.innerText = element.name;

                    const origin = document.createElement("h3");
                    origin.innerText
                    
                    
                    
                    


                } );
                suggestions.appendChild(sugg);
                
            });
        })
})

