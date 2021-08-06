import { dogs } from "./dog.js";
import { find } from "./utils.js";

function Employee(name, category) {
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
Employee.prototype.findDogByName = function (name) {
    return find(this.getDogs(), function (dog) {
        return dog.name === name;
    });
}
Employee.prototype.addDog = function (dog) {
    setTimeout(function () {
        this.getDogs().push(dog);
        console.log("Dog was added!")
    }.bind(this), 500);
}
Employee.prototype.removeDog = function (dogName) {
    var dog = this.findDogByName(dogName);
    var allDogs = this.getDogs();
    var index = allDogs.indexOf(dog);
    if (index !== -1) {
        allDogs.splice(index, 1);
    }
    Employee.prototype.getCategory = function () {
        return this.__category;
    }
}
Employee.prototype.addCategory = function (newCategory) {
    this.getCategory() = newCategory;
}

export var employees = {
    bing: new Employee("Chendler Bing", "guard"),
    holms: new Employee("Sherlock Holmes", "search"),
    dorian: new Employee("John Dorian", "patrol")
}

export function checkEmployees() {
    var employee = employees.holms;
    employee.addDog(dogs.loki);
    employee.addDog(dogs.zeus);
    console.log("employee has two dogs!", employee);
    employee.removeDog("Loki");
    console.log("employee has one dog again!", employee);
}