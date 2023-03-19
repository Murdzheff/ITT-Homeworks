class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
        if (username !== "admin") {
            this.loans = [];
            this.offers = [];
            this.budget = (Math.random() * 10000).toFixed(2);
        }

    }
}



class UserManager {

    constructor() {
        this.loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
        
        if (JSON.parse(localStorage.getItem("allUsers"))) {
            this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
        } else {
            this.allUsers = [
                new User("admin", "admin"),
                new User("georgi", "123"),
                new User("pesho", "123")
            ];
            localStorage.setItem("allUsers",JSON.stringify(this.allUsers));
        }

        

    }

    logOut = () => {
        
        if (localStorage.getItem("loggedIn")) {
            this.loggedIn = null;
            localStorage.setItem("loggedIn", JSON.stringify(null));
            return true;
        }

        return false;
    }


    logIn = (username, password) => {
        let userFound = this.allUsers?.find(e => e.username === username);
        let Correctpassword = userFound?.password === password;

        if (userFound && Correctpassword) {
            this.loggedIn = userFound;
            localStorage.setItem("loggedIn", JSON.stringify(this.loggedIn));
            
            return true;
        }
        
        return false;
    }


    register = (username, pass) => {
        let foundUser = this.allUsers?.find(user => user.username === username);
        if (!foundUser) {
            let user = new User(username, pass);
            this.allUsers?.push(user);
            localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
            this.logIn(username, pass);
            return true;
        }

        return false;
    }
}






