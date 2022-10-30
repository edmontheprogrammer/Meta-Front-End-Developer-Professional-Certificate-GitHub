// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {

    for (const element of dairy) {
        console.log(element); 
    }

}


// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (prop in Object.keys(bird)) {
        console.log(prop, ": " + bird[prop])
    }
    
}

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop);
    }

    for (prop in animal) {
        console.log(prop); 
    }

}

