class Miner {
    constructor () {
        this.ruda = 0;
        this.kamik = 0;
        this.kinti = 40;
    }

    kopa() {
        let kysmet = Math.ceil(Math.random() * 100);
        if (kysmet < 15) {
            this.ruda++;
            this.kinti += 10;
        } else if (kysmet > 97) {
            this.kamik++;
            this.kinti += 200;
        };
    }

    spinka() {
        this.kinti -= 20;
    }


}

class Mine {
    constructor (name) {
        this.name = name;
        this.miners = [];
    }

    izritai(e) {
        if (e.kinti <= 0) {
            mine.miners.pop(mine.miners.indexOf(e));
        }
    }
}

let mine = new Mine("Mechata dupka");

for(let i = 0; i < 10; i++) {
    mine.miners.push(new Miner());
}

for (let i = 1; i <= 10; i++) {
    for(let j = 0; j < 5; j++) {
        mine.miners.map(e => e.kopa())
    }

    mine.miners.map(e => e.spinka());
    mine.miners.sort((a,b) => b.kinti - a.kinti);
    mine.miners.forEach(e => mine.izritai(e));
}



//sort and show the guy with most kamiks
let mostRuda = mine.miners.sort((a,b) => b.ruda - a.ruda);

console.log(`Miner with the most kamik is:`);
console.log(mostRuda[0]);

//sort by money
console.log("Miners sorted by money.");
mine.miners.sort((a,b) => b.kinti - a.kinti);
console.log(mine.miners)


