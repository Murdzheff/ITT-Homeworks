class ViewController {

    constructor() {
        window.addEventListener('load', this.handleHashChange);
        window.addEventListener('hashchange', this.handleHashChange);

    }


    handleHashChange = () => {
        const pageIds = ['login', 'register', 'home'];

        let hash = location.hash.slice(1) || pageIds[0];

        if (hash === 'home') {
            if (!userManager.loggedUser) {
                location.hash = 'login';
                return;
            }
        }

        pageIds.forEach(pageId => {
            let element = document.getElementById(pageId);
            if (pageId === hash) {
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        })

        switch (hash) {

            case 'login':
                this.renderLogin();
                break;
            case 'register':
                this.renderRegister();

        }

    }

    renderLogin = () => {


        let form = document.getElementById('loginForm');

        form.onsubmit = (e) => {
            e.preventDefault();
            let noEmptyFields = (e.target.elements.username.value.length && e.target.elements.pass.value.length)

            if (noEmptyFields) {
                let username = e.target.elements.username.value;
                let pass = e.target.elements.pass.value;

                let successfulLogin = userManager.login({ username, pass });


                if (successfulLogin) {
                    location.hash = "home";
                } else {
                    alert("Wrong details.");
                }
            }


        }
    }

    renderRegister = () => {
        let regButton = document.getElementById("registerBtn");

        let regex = /(?=^.{6,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

        regButton.addEventListener("click", (e) => {    
            console.log(e.target);

            let verify = document.getElementById("verify");
            let username = document.getElementById("username");
            let pass = document.getElementById("pass");

            let noEmptyFields = (username.value.trim() && pass.value.trim() && verify.value.trim());
            let passValidation = (pass.value.trim() === verify.value.trim() && pass.value.trim().match(regex));

            if (passValidation && noEmptyFields) {
                let success = userManager.register(username.value, pass.value);

                if (success) {
                    location.hash = "home";
                    alert("You have registered succesfuly, now you can access Home!")
                } else {
                    alert("There is an existing user with that username, try another.")
                }

            } else {
                alert(`The password and the confirm password field doesn't match. \n
                The password is less than 6 chars long or doesn't contain special char, small letter, capital letter`)
            }

        });


    }

}

let viewController = new ViewController();