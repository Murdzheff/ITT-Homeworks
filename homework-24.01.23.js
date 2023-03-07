function verifyPassword(password) {  
    const regexPass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm
    if (!regexPass.test(password)) {
        return false;
    } else {
        return true;
    }
}  

function verifyUsername(username) {
    const regexUsername = /^[A-Za-z0-9_-]{1,20}$/;
    if (!regexUsername.test(username)) {
        return false;
    } else {
        return true;
    }
}



class User {
    constructor (username,password,email) {
        if (verifyUsername(username)) {
            this.username = username
        } else {
            console.log("Invalid username.")
        }
        if (verifyPassword(password)) {
            this.password = password;
        } else {
            console.log("Password must include digits,letters and special characters. Minimum length is 8 characters.");
        }
        if(verifyPassword && verifyUsername) {
            this.email = email;
        }
    }
}
class UserManager {
    constructor () {
        this.users = [];
        this.loggedInUser = null;
    }
    addUser (user) {
        
        if (this.users.filter(e => e.username === user.username).length) {
            console.log("Username already exists.");
        } else {
            this.users.push(user);
        }
    }
    logIn (user) {
        if (this.loggedInUser) {
            console.log("Already logged in.");
        } else {
            const existingUsers = this.users.filter(
                e => e.username === user.username &&
                e.password === user.password);

            if (existingUsers.length) {
                this.loggedInUser = user;
            } else {
                console.log("Wrong details.");
            }
        }
    }
    logOut () {
        this.loggedInUser = null;
        console.log("You have logged out.")
    }
    deleteUser(user) {
        this.users = this.users.filter(e => e.username !== user.username);
    }

    editUsername (newUsername) {
        if (this.loggedInUser !== null) {
            if (verifyUsername(newUsername)) {
                this.loggedInUser.username = newUsername;
            } else {
                console.log("Please set a valid new username.")
            }
            
        } else {
            console.log("You are not logged in.")
        }
        
    }

    editPassword (oldPassword,newPassword) {
        if (this.loggedInUser.password === oldPassword) {
            if (verifyPassword(newPassword)) {
                this.loggedInUser.password = newPassword
            } else {
                console.log("New password must include special characters and Uppercase letters and numbers...")
            }
        } else {
            console.log("Old password is not valid.")
        }
    }

    searchByUsername (username) {
        let result = this.users.filter(e => e.username.toLowerCase().includes(username.toLowerCase()));

        return result
    }

    searchByEmail (email) {
        let result = this.users.filter(e => e.email.toLowerCase().includes(email.toLowerCase()));

        return result
    }
}
class Offer {
    constructor(price, title, photos, description, vehicle, creator) {
        this.price = price;
        this.title = title;
        this.photos = photos;
        this.description = description;
        this.vehicle = vehicle; 
        this.creator = creator;
    }

}
class OfferManager {

    offers = [];

    addOffer(offer, userManager) {
        
            if(offer.creator === userManager?.loggedInUser?.username) {
                if(!this.offers.find(e => e !== this.offer )) {
                    this.offers.push(offer);
                } else {
                    console.log("offer already exists");
                }
                
            }
    
        
        
    }

    deleteOffer (offer,userManager) {
        if (offer.creator === userManager?.loggedInUser?.username) {
            this.offers = this.offers.filter(e => e.title !== offer.title)
        }
        
    }

    searchByPrice (min,max) {
        let result = this.offers.filter(e => e.price >= min && e.price <= max);

        return result
    }

    editOffer (offer,prop,newValue,userManager) {
        if (offer.creator === userManager?.loggedInUser?.username) {
            offer[prop] = newValue;
        } else {
            console.log("This offer doesn't exist or you are not logged in.")
        }
    }

    

}
class Vehicle {
    constructor(make,model,color,type,year,cubicCapacity,fuel) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.type = type;
        this.year = year;
        this.cubicCapacity = cubicCapacity;
        this.fuel = fuel;
    }
}
class Car extends Vehicle {
    constructor(make,model,color,type,year,cubicCapacity,fuel,doors,trunkSize,isThereShibidah) {
        super(make,model,color,type,year,cubicCapacity,fuel);
        this.doors = doors;
        this.trunkSize = trunkSize;
        this.isThereShibidah = isThereShibidah;

    }
}
class Bike extends Vehicle {
    constructor(make,model,color,type,year,cubicCapacity,fuel,mirorrs) {
        super(make,model,color,type,year,cubicCapacity,fuel);
        areThereMirrors = mirorrs;
    }
}
let bmw = new Car("BMW",
"318",
"Black",
"Sedan",
2010,
3.0,
"petrol",
2,
200,
true);


let user1 = new User("pesho_G","1q2w3e1q2w3eG*","pesho@abv.bg");
let userManager = new UserManager();
userManager.addUser(user1);
userManager.loggedInUser = user1;


let offer = new Offer(100,
    "mnogo qko bmw",
    ["some photos"],
    "mnogo zapazena",
    bmw,
    user1.username);
let offerMan = new OfferManager(offer,userManager);
offerMan.addOffer(offer);
offerMan.editOffer(offer,"price",200,userManager);
console.log(offer)










