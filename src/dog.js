export function Dog(name, category) {
    this.__name = name;
    this.__category = category;
    this.__hasPartner = false;
}
Dog.prototype.getName = function () {
    return this.__name;
}
Dog.prototype.getCategory = function () {
    return this.__category;
}
Dog.prototype.getHasPartner = function () {
    return this.__hasPartner;
}

Dog.prototype.assignPartner = function () {
    this.getHasPartner() = true;
}
Dog.prototype.removePartner = function () {
    this.__hasPartner() = false;
}


export var dogs = {
    hilde: new Dog("Hilde", "guard"),
    zeus: new Dog("Zeus", "search"),
    pride: new Dog("Pride", "patrol"),
    loki: new Dog("Loki", "search")
}
