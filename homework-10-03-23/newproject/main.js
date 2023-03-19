let arr = {name: "gosho",age: 10};


let {name,age} = arr



function log (...args) {
    console.log(name,age,"something")
}

log(arr);