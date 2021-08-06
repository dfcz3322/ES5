import { Dog, dogs } from "./dog.js";

function MotherOfDogs(name, category, isMother) {
    Dog.call(this, name, category);
    this.isMother = isMother;
    this.__children = [];
}

MotherOfDogs.prototype = Object.create(Dog.prototype);
MotherOfDogs.prototype.constructor = MotherOfDogs;

MotherOfDogs.prototype.checkPuppy = function (dogName) {
    if (dogName !== "hilde") {
        this.isMother = false;
    } else {
        this.isMother = true;
    };
}
MotherOfDogs.prototype.getChildren = function() {
    return this.__children;



var children = {
    first: dogs.loki,
    second: dogs.pride
}

export function checkMotherOfDogs() {
    var motherOfDogs = new MotherOfDogs("Hilde", "guard", true);
    console.log(motherOfDogs.isMother);
    motherOfDogs.checkPuppy("hilde");
    console.log(motherOfDogs.isMother);

}