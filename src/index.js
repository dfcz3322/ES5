import { employees } from "./Employee";
import { K9 } from "./K9";
import { Puppy } from "./Puppy";
import { dogs } from "./Dog";

function checkEmployees() {
    var employee = employees.holms;
    employee.addDog(dogs.loki, function (dog) {
        console.log(dog.getName() + " was added!");
    });
    employee.addDog(dogs.zeus);
    console.log("employee has two dogs!", employee);
    employee.removeDogByName("Loki");
    console.log("employee has one dog again!", employee);
}

function checkK9() {
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


function checkPuppy() {
    var puppy = new Puppy("Hilde", "guard", true);
    console.log(puppy.getIsPuppy());
    puppy.checkPuppy("Loki");
    console.log(puppy.getIsPuppy());
}
checkEmployees();
checkK9();
checkPuppy();