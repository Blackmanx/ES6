/*jshint esversion: 6 */


import "babel-polyfill";

// Alright. Let's start with ES6 basics:
// Variables are declared like this:
// It can be declared the traditional JS way too, but
// they lack the ES6 features.

let var1 = "This variable is a dynamic variable. \n" +
"This means that you don't have to specify what \n" +
"type of data it is.";

const var2 = ["blackman@sajl.tk, pmrm@sajl.tk", "these are email" +
"in a constant variable, you can't change it"];

 // var2 = [1, 1, 1] => This makes the app to crash. 
 // Can't change const variables.

console.log(var1, var2);

// Block Scoping. Basically it allows variables with
// the same name to be created if they are isolated
// within brackets. It is, obviously, applied to
// functions too.
let limit = 200;

{
    let limit = 10;
    console.log(limit);
}
    console.log(limit);

/* This'll show the next output:
10
200
*/


// Now, remember the second String I declared.
// It had like, 3 lines, right?
// I had to concatenate with 3 pluses.
// Let's use template literals.

let template1st = "Pedro";

let template2nd = "I'm learning some programming languages and frameworks.";

let templatelit = `Hi, my name is ${template1st} and 
${template2nd}`;

console.log(templatelit);

/* This'll show the next output:
Hi, my name is Pedro and 
I'm learning some programming languages and frameworks.*/

// Okay, let's move onto the Spread Operators.

let a = ["mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com", "mail5@gmail.com", "mail6@gmail.com"];
let b = ["mail1@gmail.com", ...a, "mail7@gmail.com"];

console.log(b);

/* This "merges" both arrays, and moves the array merged into the index selected.
 It pretty much works like a Dynamic List with a insertAt(array, index)

 It would show the output of:
 mail1@gmail.com, mail2...., ...,  mail7@gmail.com
 */


 // Let's see a example of destructuring now.

 let names = ["Pedro", "Daniel", "Brad"];

 let [person1, person2] = names;
 console.log(person1,person2);

 let person = { name: "Pedro", age: 20, email: "pmrm@sajl.tk"};
 let {name, age, email} = person; // Note that we are using objects.
 
 console.log(name, age, email);

 /* The output would be Pedro Daniel. That's because we assigned Pedro
    to person 1 and Daniel to person2.     
    For the objects, we would get Pedro 20 pmrm@sajl.tk for the very
    same reason.                                                              */

// Let's get to arrow funcs.

var helloworld = function() {
    console.log("Hello world");
}; // A valid function
helloworld();

setTimeout(() => {
console.log("Hello world, but later and with an anonymous function");
}, 2000); // Also "threaded", this will execute first, but the arrow function
          // will actually show up first, due to the 2 seconds delay.

let helloworld2 = () => {
    console.log("Hello world, but with an arrow function");
};

helloworld2();

/*
Hello world index.js:89:5
Hello world, but with an arrow function index.js:98:5
Hello world, but later and with an anonymous function
*/

// Mapping and Filtering:

let values = [20, 30, 40];

let doubled = values.map((n) => n*2); // We ask for a input in this method. It needs a parameter
           // That we'll call "n"
console.log(doubled);

let points = [10000, 20000, 30000, 40000];

let highScores = points.filter((n) => n > 15000);
console.log(highScores);

// SELECT * FROM POINTSARRAYTABLE WHERE POINTS > 15000, anyone? 

// Oh well, String helpers:

let evillaugh = "HA ".repeat(1000);

console.log(evillaugh);

let evillaughlite = `HA${" HA".repeat(50)}`;

console.log(evillaughlite);

if (evillaughlite.endsWith("HA")) console.log("It ends with HA");
if (evillaughlite.startsWith("HA")) console.log("It starts with HA");
if (evillaughlite.includes("HA")) console.log("It includes HA");

// You should already realize what they do, it's an high level language for
// some reason, huh?

const addToCart = (item, number) => {
    return Number.isFinite(number);
};

console.log(addToCart("Salt", Infinity)); // False
console.log(addToCart("Apples", 10)); // True

// Number.isFinity returns to us a boolean checking if the number is finite or not.

import {party, p_length} from "./party"; // Importing and exporting like
console.log(party, p_length);            // Pretty much in Python.
                                         // You can do the same with Function
// Let's get into classes.


class Char_Model {
    constructor(name, age, strength, dexterity, endurance, wisdom, intelligence){
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.dexterity = dexterity;
        this.endurance = endurance;
        this.wisdom = wisdom;
        this.intelligence = intelligence;
    }

    fillConstructor(){
        this.name = "Black";
        this.age = 20;
        this.strength = 10;
        this.dexterity = 10;
        this.endurance = 10;
        this.wisdom = 10;
        this.intelligence = 10;

    }

    attack() {
        document.getElementById("test2").innerHTML = `${this.name} has attacked himself for ${(this.strength - this.endurance)} damage out of confusion!`;
    }
}
import {ascimg} from "./ascimg";
class Boss extends Char_Model {
    constructor(sattack, name, age, strength, dexterity, endurance, wisdom, intelligence){
    super(name, age, strength, dexterity, endurance, wisdom, intelligence);
    this.sattack = sattack;
    }
        fillConstructor(){ // In javascript/ES6 you can't overload constructors.
        this.name = "Rhino";
        this.age = 20;
        this.strength = 20;
        this.dexterity = 10;
        this.endurance = 10;
        this.wisdom = 10;
        this.intelligence = 10;
        this.sattack = "Cataclysm";
        }

        attack(boss, dude){
        document.getElementById("test2").innerHTML += `\n${boss.name} used ${boss.sattack} on ${dude.name} for ${boss.strength - dude.endurance} damage!`;
        document.getElementById("test").innerHTML = ascimg;
    }

}

let boss1 = new Boss();
boss1.fillConstructor();
let blackman = new Char_Model();
blackman.fillConstructor();

blackman.attack();
boss1.attack(boss1, blackman);



// I should be explaining a bit of prototyping:
// JS isn't a OOP based language, it's a PIM -> Prototypal
// Inheritance Model. It means that every object
// has a prototype, which reveals its parent and the properties
// it inherits. Vehicle -> Car -> Engine, for example.
// In ES6 we can't use arrow functions for prototyping directly,
// as they don't have the "this" object.



// Anyway. Data Structures:

let set1 = new Set(); // or just add the values as parameters
set1.add(5);
set1.add(blackman);
set1.add("Okay");
set1.add({name: "stuff", quantity: 100});
console.log(set1);

// Pretty much works like a List. We are more interested in using Maps.
// Maps share much similarity to objects, they have superior keys and the size property is superior.

// Let's write a map.


let mapexample = new Map();
let key_1 = "Key1";
let key_2 = blackman;
let key_3 = () => {console.log("hello");};

mapexample.set(key_1, "string");
mapexample.set(key_2, "object");
mapexample.set(key_3, "function");

console.log(mapexample);

// You can also do it this way:

let arraymap = [[1, "hello"], [blackman, "cool stuff huh"]];

let valMap = new Map(arraymap);
console.log(valMap);

// Function Factories:

const addSuffix = (x) => {
    const emailid = (y) =>{
        return y + x;
    };
    return emailid;
};

let arraysuf = ["@gmail.com","gmail.es", "hotmail.com","hotmail.es", "@sajl.tk"];
let arraypre = ["blackman", "pmrm", "velsi12blackman"];

let add_suf = addSuffix(arraysuf[0]);
console.log(add_suf);
let add_pre = add_suf(arraypre[2]);
console.log(add_pre);


// Generators

function* generatorTest(){
yield blackman;
yield addSuffix(10)(50);
}

let gen = generatorTest();
for (let i of gen){ // Don't do this. You use gen.next().value, that's the
    console.log(gen.next().value);
}


let p = new Promise((resolve, reject) => {
    reject("Rejected promised data");
});

p.then(response => console.log(response))
.catch(error => console.log(error));


// You should know already what GET and POST methods do. Let's get a json
// file from jsonplaceholder.
const rooturl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(rooturl, { method: "GET"}).then(response => response.json())
.then(json => console.log(json));

