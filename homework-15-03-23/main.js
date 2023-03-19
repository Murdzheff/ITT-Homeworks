class ViewController {

    constructor() {
        window.addEventListener("load", this.handleHashChange);
        window.addEventListener("hashchange", this.handleHashChange);
        this.userManager = new UserManager();
        this.offerManager = new OfferManager();
    }



    handleHashChange = () => {

        const pageIds = ["home", "login", "register", "overview", "statistics"];

        let hash = location.hash.slice(1) || "home";



        pageIds.forEach(pageId => {

            let element = document.getElementById(pageId);

            if (pageId === hash) {
                element.style.display = "block";
            } else {
                element.style.display = "none";

            }
        })

        switch (hash) {
            case "home":
                this.renderHome();
                break;
            case "login":
                this.renderLogin();
                break;
            case "register":
                this.renderReg();
                break;
            case "overview":
                this.renderOverview();
                break;
            case "statistics":
                this.renderStatistics();
                break;

        }

    }

    renderHeader = () => {
        let loggedUser = JSON.parse(localStorage.getItem("loggedIn"));
        let register = document.getElementById("registerA");
        let login = document.getElementById("loginA");
        let logout = document.getElementById("logoutA");
        let overview = document.getElementById("overviewA");
        let statistics = document.getElementById("statisticsA");

        if (!loggedUser) {
            logout.style.display = "none";
            overview.style.display = "none";
            register.style.display = "flex";
            login.style.display = "flex";
            statistics.style.display = "none";
        } else if (loggedUser.username === "admin") {
            overview.style.display = "none";
            logout.style.display = "flex";
            login.style.display = "none";
            register.style.display = "none";
            statistics.style.display = "flex";
        } else {
            statistics.style.display = "none";
            overview.style.display = "flex";
            register.style.display = "none";
            login.style.display = "none";
            logout.style.display = "flex";
        }

    }

    renderHome = () => {

        console.log(this.userManager.loggedIn);
        this.renderHeader();

        let logout = document.getElementById("logoutA");
        logout.onclick = (e) => {
            e.preventDefault();
            this.userManager.logOut();
            location.hash = "home";
            this.renderHeader();
        }
    }

    renderLogin = () => {
        this.renderHeader();
        let logForm = document.getElementById("logForm")

        logForm.onsubmit = (e) => {
            e.preventDefault();
            console.log(e.target.username.value, e.target.pass.value);
            this.userManager.logIn(e.target.username.value, e.target.pass.value);
            this.renderHeader();
            location.hash = "home";
        }

    }

    renderReg = () => {
        this.renderHeader();

        let regForm = document.getElementById("regForm");
        let regUsername = document.getElementById("regUsername");
        let regPass = document.getElementById("regPass");

        regForm.onsubmit = (e) => {
            e.preventDefault();
            this.userManager.register(regUsername.value, regPass.value)
            location.hash = "home";
            this.renderHeader();

        }

    }

    renderOverview = () => {
        this.renderHeader();
        this.renderOffers(this.userManager.loggedIn.offers)
        let loanForm = document.getElementById("loanForm");
        let username = document.getElementById("borrower");
        let reqAmount = document.getElementById("requestAmount");
        let reqTerm = document.getElementById("term");
        let income = document.getElementById("borrowerIncome");
        username.value = this.userManager.loggedIn.username;



        loanForm.onsubmit = (e) => {
            e.preventDefault();
            alert("Please wait while we process your request and evaluate your application...");

            ;

            let renderOffers = new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.offerManager.evaluate(this.userManager.loggedIn, Number(income.value), Number(reqAmount.value), Number(reqTerm.value));
                    if (this.userManager.loggedIn.offers.length) {
                        resolve(this.userManager.loggedIn.offers);
                    } else {
                        reject("error");
                    }
                }, 1000 * 2);
            })
                .then(result => {

                    this.renderOffers(result);

                })
                .catch(error => {
                    console.log(error);
                })


        }
    }

    renderStatistics = () => {
        this.renderHeader();
    }

    renderOffers = (result) => {
        let offersContainer = document.getElementById("offersContainer");
        offersContainer.innerHTML = "";
        if (result.length) {
            result.forEach(offer => {
                let card = document.createElement("div");
                card.id = "offerCard"
                
                let amount = document.createElement("h2");
                amount.innerText = "Total amount" + offer.loanAmount;

                let interest = document.createElement("h3");
                interest.innerText = "Interest: " + offer.interest;

                let loanTerm = document.createElement("h3");
                loanTerm.innerText = "Term: " + offer.loanTerm;

                let monthlyPay = document.createElement("h3");
                monthlyPay.innerText = "Monthly" + offer.monthlyPayment;

                let takeBtn = document.createElement("button");
                takeBtn.innerText = "Accept";
                takeBtn.onclick = () => {

                }

                card.append(amount, interest, loanTerm, monthlyPay,takeBtn);

                offersContainer.appendChild(card);
            })
        }
    }
}

let viewController = new ViewController();