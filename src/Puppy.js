import { Dog } from "./Dog.js";

export function Puppy(name, category, isPuppy) {
    Dog.call(this, name, category);
    this.__isPuppy = isPuppy;
}

Puppy.prototype = Object.create(Dog.prototype);
Puppy.prototype.constructor = Puppy;

Puppy.prototype.checkPuppy = function (dogName) {
    if (dogName !== "hilde") {
        this.__isPuppy = false;
    } else {
        this.__isPuppy = true;
    };
}

Puppy.prototype.getIsPuppy = function() {
    return this.__isPuppy;
}
