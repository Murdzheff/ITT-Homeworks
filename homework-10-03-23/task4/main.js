const select =            document.getElementById("dropDown");
const userPosts =         document.getElementById("userPosts");
const postHeading =       document.getElementById("postHeading");
const albums =            document.getElementById("albums");
const albumHolder =       document.getElementById("userAlbum");
const allPhotos =         document.getElementById("allPhotos");
const todosContainer =    document.getElementById("todos");
const todoHead =          document.getElementById("notCompleted");
let albumArr =            [];


select.addEventListener("change", fetchAll);


function getPhotos (id) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
                    .then(response => {
                        return response.json()
                    })
                    .then(value => {
                        albumArr += value.length;
                        allPhotos.innerText = `All photos ${albumArr}`;
                    })
}

//fire that when eventhandler is activated
function fetchAll(e) {
    e.preventDefault();

    postHeading.style.visibility = "visible";

    // posts fetch
    fetch(`https://jsonplaceholder.typicode.com/users/${select.value}/posts`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("error connecting")
            }
            
        })
        .then(value => {
            userPosts.innerHTML = "";

            value.forEach(e => {

                let postHolder = document.createElement("div");
                postHolder.classList.add("postHolder");

                let postTitle = document.createElement("h3");
                postTitle.innerText = e.title;
                postTitle.classList.add("titles");

                let post = document.createElement("p");
                post.innerText = e.body;
                post.classList.add("posts");

                postHolder.append(postTitle, post);
                userPosts.appendChild(postHolder);
            })
            return value;
        });
    //albums fetch
    fetch(`https://jsonplaceholder.typicode.com/users/${select.value}/albums`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("error connecting")
            }
        })
        .then(value => {
            albums.style.visibility = "visible";
            albumHolder.innerHTML = "";
            albumArr = [];
            value.forEach(e => {
                albumArr.push(e);
                let albumHeading = document.createElement("h3");
                albumHeading.innerText = e.title;
                albumHeading.classList.add("albumHeadings")

                albumHolder.appendChild(albumHeading);
            })
            return albumArr;
        })
        .then(album => {
            albumArr = 0
            album.forEach(e => {
                getPhotos(e.id);
            })

        })


    //to do fetch
    fetch(`https://jsonplaceholder.typicode.com/users/${select.value}/todos`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("error connecting")
            }
        })
        .then(value => {
            value.forEach(e => {
                if (e.completed === false) {
                    todoHead.style.visibility = "visible";

                    let todoItem = document.createElement("li");
                    todoItem.innerText = e.title;
                    todoItem.classList.add("todoItems");

                    todosContainer.appendChild(todoItem);
                }
            })
        })
}

//api for the select element
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            alert("error connecting")
        }
    })
    .then(valueArray => {
        valueArray.forEach(element => {
            let option = document.createElement("option");
            option.value = element.id;
            option.innerText = element.email;

            select.appendChild(option);

        });

    })
