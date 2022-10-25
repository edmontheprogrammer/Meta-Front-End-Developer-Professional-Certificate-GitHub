class Train {
    constructor(color, lightsOn) {
        this.color = color; 
        this.lightsOn = lightsOn; 
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }

    getSelf() {
        console.log(this);
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto); 
    }
}

// creating a new instance of the "Train" class
var train4 = new Train('red', false);

// calling methods of the 'train4' object
train4.toggleLights(); 
train4.lightsStatus(); 
train4.getSelf();
train4.getPrototype(); 

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); 
        this.passengers = passengers; 
        this.highSpeedOn = highSpeedOn; 
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn; 
        console.log('high speed status:' , this.highSpeedOn); 
    }

    toggleLights() {
        super.toggleLights(); 
        super.lightsStatus(); 
        console.log('Lights are 100% operational.'); 
    }
}
