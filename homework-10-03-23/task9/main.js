const search = document.getElementById("searchMovies");
const suggestions = document.getElementById("suggestions");
let movieHolder = document.getElementById("movieHolder");
search.value = "";

search.addEventListener("input", () => {
    suggestions.innerHTML = "";

    fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=2150216b`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return console.log("error");
            }
        })
        .then(result => {
            if (result.Search && result.Search.length) {
                
                renderSuggestions(result.Search);
                
            }

        })

})

search.onkeyup = (event) => {
    if (event.key === "Enter") {
        renderManyMovies(search.value);
        
    }
}

function renderManyMovies (val) {
    fetch(`http://www.omdbapi.com/?s=${val}&apikey=2150216b`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return console.log("error");
            }
        })
        .then(result => {
            movieHolder.innerHTML = "";
            suggestions.innerHTML = "";
            result.Search.slice(0,2).forEach(movie => {
                renderMovie(movie.imdbID);
            })
            renderPagination(result.Search);
        })
}



function renderSuggestions(obj) {
    obj.forEach(element => {

        if (element !== undefined) {
            let sugg = document.createElement("option");
            sugg.innerText = element.Title;
            sugg.id = element.imdbID;
            sugg.classList.add("suggestions");

            sugg.addEventListener("click", () => {
                suggestions.innerHTML = "";
                movieHolder.innerHTML = "";
                renderMovie(sugg.id)
            })
            
            suggestions.appendChild(sugg);
        }

    });
}


function renderMovie(id) {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=2150216b`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return console.log("error");
        }
    })
    .then(mov => {
        let movieElement = document.createElement("img");
        movieElement.src = mov.Poster;
        
        movieHolder.appendChild(movieElement);
    })
}

function renderPagination (array) {
    
    pagination.innerHTML = ""


    for (let i = 0; i < array.length / 2; i++) {
        let page = document.createElement("button");
        page.innerText = i + 1;
        page.value = i + 1;
        if (i === 0) {
            page.content = array.slice(i,2);
        } else {
            page.content = array.slice(i * 2,i * 2 + 2);
            
        }
        page.onclick = (e) => {
            movieHolder.innerHTML = "";
            page.content.forEach(movie => {
                renderMovie(movie.imdbID);
            })
            
        }

        pagination.appendChild(page);
    }
        
}
