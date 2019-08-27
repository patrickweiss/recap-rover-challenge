

// Return the minimum of an array or undefined if the array is empty
function min(array) {
  // TODO
}
console.log("----- min -----")
console.log("The minimum of the 1st array should be 1", min([4,6,2,7,1]))
console.log("The minimum of the 2nd array should be 2", min([4,6,2,7,10]))
console.log("The minimum of the 3rd array should be undefined", min([]))
console.log("The minimum of the 4th array should be -5", min([-5]))


// Return the factorial of n
// Example with 5 => 1*2*3*4*5 = 120
// Example with 7 => 1*2*3*4*5*6*7 = 5040
function calculateFactorial(n) {
  // TODO
}
console.log("----- calculateFactorial -----")
console.log("Factorial of 5", calculateFactorial(5))
console.log("Factorial of 7", calculateFactorial(7))


// Function that adds an exclamation mark to each element of the array
function addExclamationMarkEverywhere(array) {
  // TODO
}
console.log("----- addExclamationMarkEverywhere -----")
console.log(addExclamationMarkEverywhere(['A','B','C','D','E'])) // => ['A!','B!','C!','D!','E!']
console.log(addExclamationMarkEverywhere(['Joaquim','Maxence','Mostafa'])) // => ['Joaquim!','Maxence!','Mostafa!']
console.log(addExclamationMarkEverywhere([])) // => []


// Goal: Return a new array of strings, where each string looks like "NAME is a SPECIES" (see example below)
// You will have to solve this problem in 2 different ways: with a for loop and with a map
function getSentences(animals) {
  // TODO
}

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
];

console.log("----- getSentences -----")
console.log(getSentences(animals));


// Function that gives the number of countries per continent
// 2 parameters: 
// - countries: An array of object, with a property name and continent
// - continent: A string
// Return a number
function nbOfCountryPerContinent(countries, continent) {
  // TODO
}

console.log("----- nbOfCountryPerContinent -----")
console.log('Number of countries in Africa', nbOfCountryPerContinent(countries, 'Africa'))
console.log('Number of countries in Asia', nbOfCountryPerContinent(countries, 'Asia'))
console.log('Number of countries in Europe', nbOfCountryPerContinent(countries, 'Europe'))



// Find the actor based on the name (see example below)
// Find the actor based on the name (see example below)
function findActor(actors, actorName) {
  // TODO
}

var americanActors = [
  { name: "Tom Hanks", popularityScore: 87 },
  { name: "Natalie Portman", popularityScore: 90 },
  { name: "Jack Nicholson", popularityScore: 98 },
  { name: "Julia Roberts", popularityScore: 88 },
];
var frenchActors = [
  { name: "Omar Si", popularityScore: 81 },
  { name: "Jean Dujardin", popularityScore: 89 },
  { name: "Marion Cotillard", popularityScore: 10 },
];
console.log("----- findActor -----")
console.log(findActor(americanActors, "Jack Nicholson")); // => { name: "Jack Nicholson", popularityScore: 98 }
console.log(findActor(frenchActors, "Marion Cotillard")); // => { name: "Marion Cotillard", popularityScore: 10 }


console.log("----- Rover -----")
class Rover {
  constructor(color){
    this.color = color
    this.x = 0
    this.y = 0
    this.orientation = 'S' // South
  }
  turnRight() {
    // TODO: change the orentation to North, East, South or West
  }
  turnLeft() {
    // TODO: change the orentation to North, East, South or West
  }
  moveForward(){
    // TODO
  }
}
let r1 = new Rover('red')
let r2 = new Rover('blue')

r1.turnLeft()
console.log('r1', r1) // => { color: 'red', x: 0, y: 0, orientation: 'E' }

r2.moveForward()
r2.moveForward()
console.log('r2', r2) // => { color: 'blue', x: 0, y: 2, orientation: 'S' }
r2.turnLeft()
r2.moveForward()
console.log('r2', r2) // => { color: 'blue', x: 1, y: 2, orientation: 'E' }
r2.turnRight()
r2.moveForward()
console.log('r2', r2) // => { color: 'blue', x: 1, y: 3, orientation: 'S' }
