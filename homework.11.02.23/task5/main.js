let button = document.getElementById("submit");

button.addEventListener("click", (event) => {
  event.preventDefault();

let red = document.getElementById("red").value;
let green = document.getElementById("green").value;
let blue = document.getElementById("blue").value;
    if (red < 0 || red > 255) {
        red = 0;
      }
      if (green < 0 || green > 255) {
        green = 0;
      }
      if (blue < 0 || blue > 255) {
        blue = 0;
      }
    document.body.style.background = 'rgb(' + red + ', ' + green + ', ' + blue + ' )';
    console.log(document.body.style.backgroundColor);
})

console.log(red);


