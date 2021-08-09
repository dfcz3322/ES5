import { dogs, Dog } from "./Dog.js";
import { employees, Employee } from "./Employee.js";
import { find, remove } from "./utils.js";

export function K9() {
    this.__dogs = [];
    this.__employees = [];
}

K9.prototype.getEmployees = function () {
    return this.__employees;
}
K9.prototype.addEmployee = function (employee) {
    if (employee instanceof Employee) {
        this.getEmployees().push(employee);
    } else {
        console.error("Not an employee");
    }

}
K9.prototype.getDogs = function () {
    return this.__dogs;
}
K9.prototype.addDog = function (dog) {
    if (dog instanceof Dog) {
        this.getDogs().push(dog);
    } else {
        console.error("Not a dog");
    }
}

K9.prototype.setDogToEmployee = function (employeeName, dogName) {
    var employee = find(this.getEmployees(), function (employee) {
        return employee.getName() === employeeName;
    });
    var dog = find(this.getDogs(), function (dog) {
        return dog.getName() === dogName;
    });
    employee.addDog(dog, function (dog) {
        console.log(dog.getName() + " was added!");
    });
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