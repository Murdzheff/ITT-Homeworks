//constructor
function Character(name,location) {
    this.name = name;
    this.location = location;
};

//global functions
function go (loc) {
    this.location = loc;
    console.log(this.name + ` went to ${loc}.`);
};

function marry (somebody) {
    console.log(this.name + ` married ${somebody}.`)
};

function liveHappy (somebody) {
    console.log(this.name + ` lived happily ever after with ${somebody}`);
};

function inLove (somebody) {
    console.log(this.name + ` fell in love with ${somebody}.`);
}
//queen
let queen = new Character("the Queen","The castle");
//state
queen.beauty = 10;
queen.isAngry = false;
queen.isGood = false;
queen.isHappy = true;
queen.dress =  "Royal dress";
queen.isJelaous = false;
//behaviour
queen.callHunter = function (man) {
    console.log(`The queen called ${man}. She told him to take Snow White to the forest.`);
    console.log(`She told him to kill Snow White.`)
};

queen.giveApple = function (somebody) {
    console.log(`The queen gave the apple to ${somebody}.`);
};

queen.askMirror = function (mir,year) {
    console.log(`Year ${year} : The queen asked the Mirror who is the most beautiful on Earth.`);
};

queen.changeDress = function () {
    if (this.dress === "Royal dress") {
        this.dress = "Granny clothes";
        console.log(`The queen changes her clothes to look like a granny.`)
    } else {
        this.dress = "Royal dress";
        console.log(`The queen changes her clothes back to normal.`)
    }
};

//snow white
let sw = new Character("Snow White", "The castle");
//state
sw.age = 0;
sw.beauty = 4;
sw.stepMom = queen;
sw.isGood = true,
sw.appleStuck = false,
sw.isDead = false,
sw.isInLove = false,
sw.isBreathing = true,
sw.areEyesOpen = true,
//behaviour
sw.clean = function (place) {
    console.log(`Snow White cleaned ${place}`);
};

sw.cook = function (food) {
    console.log(`Snow White cooked ${food}`);
};

sw.wash = function (somebody) {
    console.log(`Snow White washed ${somebody}'s clothes.`);
};

sw.eat = function (food) {
    console.log(`Snow White ate ${food}`);
};

sw.clean = function (place) {
    console.log(`Snow White cleaned ${place}`);
};

//hunter
let hunter = new Character("the Hunter", "the Forest");
hunter.takePity = function (somebody) {
    console.log(`The hunter took pity on ${somebody}, deciding to let go, not to kill her.`);
};

hunter.kill = function (somebody) {
    console.log(`The hunter killed ${somebody}.`);
};

hunter.takeToForest = function (somebody) {
    this.location = "The forest";
    console.log(`The hunter took ${somebody} to the forest.`);
};

//apple
let apple = new Character("the Apple","In queen's possession");
apple.isPoisonous = true;

//prince
let prince = new Character("the Prince","Unknown");
//state
prince.isHandsome = true;
prince.seenSw = false;
prince.inLove = false;
prince.isSad = false;
//behaviour
prince.kiss = function (somebody) {
    console.log(`The prince kissed ${somebody}`);
};

prince.check = function (somebody) {
    console.log(`The prince checked ${somebody}'s condition.`);
};

//mirror
let mir = new Character("The mirror","the Castle");
//state
mir.isMagical = true,
mir.isLiterate = true,
mir.chicks = [queen.name, sw.name, "your mom" ];
//behaviour
mir.mostBeautiful = function (list) {
    console.log(`The mirror said ${list} is the most beautiful on Earth.`);
}

//dwarf creator code
let dwarfNames = [
    "Dopey",
    "Bashful",
    "Grumpy",
    "Sleepy",
    "Sneezy",
    "Doc",
    "Happy"
]
let dwarfs = [];
for (let i = 0; i < dwarfNames.length; i++) {
    dwarfs.push(new Character(dwarfNames[i], "the Koliba"))
}

//Camera => action

//first act

console.log("There once was a queen! She was very pretty."); 
console.log("She had a magical mirror that could speak.");
console.log("The mirror always told the truth.");

for (let i = 1; i < 8; i++) {
    sw.age++;
    sw.beauty++;
    if (i === 1) {
        console.log(`The queen had a step-daugther named Snow-White.`);
        console.log(`She was growing pretty and she was nice to everybody.`)
    } else if (i > 1 && i < 7) {
        queen.askMirror(mir,sw.age);
        mir.mostBeautiful(mir.chicks[0]);
    } else {
        mir.chicks.push(mir.chicks[0]);
        mir.chicks.shift(mir.chicks[0]);
        queen.askMirror(mir,sw.age);
        mir.mostBeautiful(mir.chicks[0]);
        queen.isAngry = true;
        console.log("the Queen got very angry");
        queen.callHunter(hunter.name);
        go.call(hunter, "the Castle");
        hunter.takeToForest(sw.name);
        queen.isAngry = false;
        hunter.location = "the Forest";
        hunter.takePity(sw.name);
        console.log(`Snow white wondered a lot, but eventually she found ${dwarfs[0].location} of the dwarves.`);
        console.log(`The dwarves came home and saw somebody has been in ${dwarfs[0].location}`);
        console.log(`They saw Snow White, but made a deal, she became their housewife.`);
        sw.clean(dwarfs[0].location);
        dwarfNames.forEach(element => {sw.wash(element)});
        sw.cook("a lot of food for the dwarves.");
        console.log(`Years passed...`);
    }
}

//second act 10 years later
sw.age += 10;
queen.askMirror(mir,sw.age);
mir.mostBeautiful(mir.chicks[0]);
queen.isGreen = true;
queen.isAngry = true;
console.log(`${queen.name} got very angry and decided to poison ${sw.name} with an apple.`);
queen.changeDress();
go.call(queen,"the Forest");
console.log("She found Snow White.");
queen.giveApple(sw.name);
sw.eat(apple.name);
sw.isGood = false;
sw.isAppleStuck = true;
sw.isBreathing = false;
console.log("Snow White fell to the ground and remained unconcious.");
sw.areEyesOpen = false;
queen.isAngry = false;
queen.isGood = true;
queen.isGreen = false;
go.call(queen,"the Caslte");
go.call(prince,"the Forest");
console.log("He found Snow White lying on the ground.");
prince.check(sw.name);
inLove.call(prince,sw.name);
prince.isSad = true;
console.log("He was was because of her condition, still he decided to kiss her at least once.");
prince.kiss(sw.name);
sw.areEyesOpen =  true;
console.log("Snow White suddenly opened her eyes.")
sw.isBreathing = true;
inLove.call(sw,prince.name);
marry.call(prince,sw.name);
liveHappy.call(sw,prince.name + " and everybody else except the queen who got ugly from anger");
queen.beauty = 0;
queen.isAngry = true;

//the end ;)


