
let form = document.getElementById("submitForm");
let input = document.getElementById("ipInput");
let city = document.getElementById("city");
let region = document.getElementById("region");
let country = document.getElementById("country");
let dataHolder = document.getElementById("ipHolder");

form.addEventListener("submit", getIp)

function getIp(e) {
    e.preventDefault();

    dataHolder.style.display = "flex";

    fetch(`https://ipapi.co/${input.value}/json/`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Something happened, we will get back to you.");
            }
            
        })
        .then(value => {
            city.innerText = `City: ${value.city}`
            region.innerText = `Region: ${value.region}`
            country.innerText = `Country: ${value.country}`
            console.log(value);
        })

}
