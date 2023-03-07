let button = document.getElementById("but");

function validate (event) {
  event.preventDefault();
  let alert = document.getElementById("alert");
  let input1 = document.getElementById("inp1");
  let input2 = document.getElementById("inp2");
  if (input1.value.length < 3 || input1.value.length > 9 ||
      input2.value.length < 3 || input2.value.length > 9) {
        alert.style.visibility = "visible";
      } else {
        alert.style.visibility = "hidden";
      }
}

button.addEventListener("click",validate);



