import { dogs } from "./Dog.js";
import { find } from "./utils.js";

export function Employee(name, category) {
    this.__name = name;
    this.__category = category;
    this.__dogs = [];
}
Employee.prototype.getName = function () {
    return this.__name;
}
Employee.prototype.getDogs = function () {
    return this.__dogs;
}
Employee.prototype.getDogByName = function (name) {
    if (typeof name === 'string') {
        return find(this.__dogs, function (dog) {
            return dog.name === name;
        });
    } else {
        console.error("Not a string!");
    }
}
Employee.prototype.addDog = function (dog, callback) {
    setTimeout(function () {
        this.__dogs.push(dog);
        if (callback) {
            callback(dog);
        }
    }.bind(this), 500);
}
Employee.prototype.removeDogByName = function (dogName) {
    var dog = this.getDogByName(dogName);
    var index = this.__dogs.indexOf(dog);
    if (index !== -1) {
        allDogs.splice(index, 1);
    }
}
Employee.prototype.getCategory = function () {
    return this.__category;
}

Employee.prototype.setCategory = function (newCategory) {
    this.__category = newCategory;
}

export var employees = {
    bing: new Employee("Chendler Bing", "guard"),
    holms: new Employee("Sherlock Holmes", "search"),
    dorian: new Employee("John Dorian", "patrol")
}
