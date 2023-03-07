//create and style the container
let form = document.createElement("form");
document.body.appendChild(form);
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.backgroundImage = "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)";
form.style.height = "100%";
form.style.width = "40%";
form.style.margin = "40px 40px 100px 40px";
form.style.backgroundColor = "whitesmoke";
form.style.borderRadius = "15px";
document.body.style.fontFamily = "Roboto";
form.style.display = "grid";
form.style.overflow = "none";
form.style.gridTemplateColumns = "1fr";
form.style.gridTemplateRows = "auto";

//create elements
for (let i = 0; i < 10; i++) {
    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.width = "1fr";
    form.appendChild(container);
    container.style.margin = "1% 7% 1% 7%";
}

let kids = form.children;

//header creation
let header = document.createElement("h1");
header.innerText = "Test Form";
kids[0].appendChild(header);
kids[0].style.justifyContent = "center";
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.justifyContent = "center";
header.style.fontSize = "4vh"
header.style.fontWeight = "bolder";

//creating first three forms
for (let i = 1; i < 4; i++) {
    let h2 = document.createElement("h2");
    let input = document.createElement("input");
    input.style.height = "4vh";
    input.style.width = "80%";
    input.style.fontSize = "16px";
    input.type = "text";
    kids[i].appendChild(h2);
    kids[i].appendChild(input);
    kids[i].style.flexDirection = "column";
    kids[i].firstChild.style.fontWeight = "bolder";
    kids[i].firstChild.style.fontSize = "20px";
    kids[i].firstChild.style.fontWeight = "bolder";
    kids[i].lastChild.style.backgroundColor = "whitesmoke";
    kids[i].lastChild.style.border = "none";
    kids[i].lastChild.style.marginTop = "10px";

}
kids[1].style.borderBottom = "1px solid black"
kids[2].style.borderBottom = "1px solid black"
kids[3].style.borderBottom = "1px solid black"
kids[1].firstChild.innerText = "Full Name";
kids[1].lastChild.placeholder = "   Enter your Full Name";
kids[2].firstChild.innerText = "Email";
kids[2].lastChild.placeholder = "   Enter your Email";
kids[3].firstChild.innerText = "Phone Number";
kids[3].lastChild.placeholder = "   Enter your Phone Number";




// creating radio form
let age = document.createElement("h2");
kids[4].appendChild(age);
age.style.marginBottom = "3%"
age.innerText = "Age";
age.style.marginTop = "20px"
kids[4].style.flexDirection = "column";
kids[4].firstChild.style.fontSize = "25px";
kids[4].firstChild.style.marginBottom = "2%";

let radioButtons = document.createElement("form");
kids[4].appendChild(radioButtons);

for (let i = 0; i < 3; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.className = "radioInput";
    input.type = "radio";
    input.name = "age";
    input.id = `age${i + 1}`;
    label.for = "age" + i + 1;
    label.id = `label${i + 1}`
    radioButtons.appendChild(label);
    radioButtons.appendChild(input);
}

radioButtons.style.display = "grid";
radioButtons.style.rowGap = "5px";
radioButtons.style.width = "10%"
radioButtons.style.gridTemplateColumns = "2fr 5fr"
document.getElementById("label1").innerText = "> 18";
document.getElementById("label2").innerText = "18-35";
document.getElementById("label3").innerText = "35+";
document.getElementById("age1").style.position = "relative";
document.getElementById("age1").style.bottom = "2px";
document.getElementById("age2").style.position = "relative";
document.getElementById("age2").style.bottom = "2px";
document.getElementById("age3").style.position = "relative";
document.getElementById("age3").style.bottom = "2px";

//creating education field
let education = document.createElement("h2");
kids[5].appendChild(education);
education.style.marginBottom = "3%"
education.innerText = "Education";
education.style.marginTop = "20px"
kids[5].style.flexDirection = "column";
kids[5].firstChild.style.fontSize = "25px";
kids[5].firstChild.style.marginBottom = "2%";

let checkButtons = document.createElement("form");
kids[5].appendChild(checkButtons);

for (let i = 0; i < 4; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.style.margin = "0%";
    input.className = "checkInput";
    input.type = "checkbox";
    input.name = "check";
    input.id = `check${i + 1}`;
    label.for = `check${i + 1}`;
    label.id = `check${i + 1}`
    label.style.margin = "0% 0% 0% 5%"
    label.className = "checkLabel";
    switch (i) {
        case 0:
            label.innerText = "High School";
            break;
        case 1:
            label.innerText = "Some College";
            break;
        case 2:
            label.innerText = "Associate's Degree";
            break;
        case 3:
            label.innerText = "Bachellor's Degree";
            break;
    }
    checkButtons.appendChild(input);
    checkButtons.appendChild(label);
}

checkButtons.style.display = "grid";
checkButtons.style.rowGap = "5px";
checkButtons.style.width = "100%";
checkButtons.style.gridTemplateColumns = "1fr 30fr";

//creating date field
let date = document.createElement("h2");
kids[6].appendChild(date);
date.style.marginBottom = "3%"
date.innerText = "Appointment Date";
date.style.marginTop = "20px"
kids[6].style.flexDirection = "column";
kids[6].firstChild.style.fontSize = "25px";
kids[6].firstChild.style.marginBottom = "2%";

let dateForm = document.createElement("form");
dateForm.style.borderBottom = "1px solid black";
kids[6].appendChild(dateForm);

let dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.style.fontSize = "16px";
dateInput.style.backgroundColor = "whitesmoke";
dateInput.style.outline = "none";
dateInput.style.border = "none";
dateInput.style.paddingBottom = "10px";
dateInput.style.width = "100%";
dateForm.appendChild(dateInput);

//creating reason for appointment
let reason = document.createElement("h2");
kids[7].appendChild(reason);
reason.style.marginBottom = "3%"
reason.innerText = "Appointment Reason";
reason.style.marginTop = "20px"
kids[7].style.flexDirection = "column";
kids[7].firstChild.style.fontSize = "25px";
kids[7].firstChild.style.marginBottom = "2%";

let reasonSelect = document.createElement("select");
reasonSelect.id = "reasonSelect";
reasonSelect.style.fontSize = "16px";
reasonSelect.name = "select";
reasonSelect.style.backgroundColor = "#dfdfdf";
reasonSelect.style.border = "none";
reasonSelect.style.height = "30%";

let labelSelect = document.createElement("label");
labelSelect.for = "select";
for (let i = 0; i < 4; i++) {
    let reasonChoice = document.createElement("option");
    reasonChoice.value = `reason ${i}`;
    if (i === 0) {
        reasonChoice.innerText = `Select your reason.`;
    } else {
        reasonChoice.innerText = `reason ${i}`;
    }
    reasonSelect.appendChild(reasonChoice);
}


kids[7].appendChild(reasonSelect);
kids[7].appendChild(labelSelect);

//creating message
let messageHeader = document.createElement("h2");
let message = document.createElement("textarea");
messageHeader.innerText = "Message";
messageHeader.style.fontSize = "25px";
message.style.fontSize = "16px";
message.style.height = "80px"
message.style.backgroundColor = "whitesmoke";
message.style.border = "none";
message.placeholder = "Write a message..."
kids[8].appendChild(messageHeader);
kids[8].appendChild(message);
kids[8].style.flexDirection = "column";
kids[8].firstChild.style.fontSize = "25px";
kids[8].firstChild.style.marginBottom = "2%";

//creating submit button
let submit = document.createElement("button");
submit.style.height = "50px";
submit.style.width = "50%";
submit.style.fontSize = "25px";
submit.style.color = "whitesmoke";
submit.innerText = "SUBMIT";
submit.style.borderRadius = "15px";
submit.style.border = "none";
submit.style.backgroundImage = "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)"

kids[9].appendChild(submit);
kids[9].style.justifyContent = "center";
































