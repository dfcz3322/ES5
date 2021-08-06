import { dogs } from "./dog.js";
import { employees } from "./Employee.js";
import { find, remove } from "./utils.js";

function K9() {
    this.__dogs = [];
    this.__employees = [];
}

K9.prototype.getEmployees = function () {
    return this.__employees;
}
K9.prototype.addEmployee = function (employee) {
    this.getEmployees().push(employee);
}
K9.prototype.getDogs = function () {
    return this.__dogs;
}
K9.prototype.addDog = function (dog) {
    this.getDogs().push(dog);
}
K9.prototype.setDogToEmployee = function (employeeName, dogName) {
    var employee = find(this.getEmployees(), function (employee) {
        return employee.getName() === employeeName;
    });
    var dog = find(this.getDogs(), function (dog) {
        return dog.getName() === dogName;
    });
    employee.addDog(dog);
}
K9.prototype.removeDogAndEmployee = function (employeeName, dogName) {
    remove(this.getEmployees(), employeeName);
    remove(this.getDogs(), dogName);
}
K9.prototype.findEmployeeByDog = function (dogName) {
    var employee = find(this.getEmployees(), function (employee) {
        return find(employee.getDogs(), function (dog) {
            return dog.name === dogName;
        });
    });

    return employee;
}


export function checkK9() {
    var k9 = new K9();
    k9.addDog(dogs.hilde);
    console.log("current dogs:", k9.getDogs());
    k9.addEmployee(employees.bing);
    console.log("current employees:", k9.getEmployees());
    k9.setDogToEmployee("Chendler Bing", "Hilde");
    console.log("current employees after dog was assigned:", k9.getEmployees());
    console.log("Employee found by dog!", k9.findEmployeeByDog("Hilde"));
    k9.removeDogAndEmployee("Chendler Bing", "Hilde");
    console.log(k9.getDogs());
    console.log(k9.getEmployees());
}
