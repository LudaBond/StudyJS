"use strict";
class Vitamins {
    constructor(name, dosage, description, source, id) {
        this.name = name;
        this.dosage = dosage;
        this.description = description;
        this._id = id;
        this.source = source;
    }

    dissolveInOil() {
        console.log(`${this.name} is being dissolved in oil.`);
    }

    applyOnSkin() {
        console.log(`${this.name} is being applied on skin.`);
    }

    consumeInFood() {
        console.log(`${this.name} is being consumed in food.`);
    }
}

class VitaminA extends Vitamins {
    constructor(name, dosage, description, source, id) {
        super(name, dosage, description, source, id);
    }
}

class VitaminC extends Vitamins {
    constructor(name, dosage, description, form, id) {
        super(name, dosage, description, form, id);
    }
}

class VitaminD extends Vitamins {
    constructor(name, dosage, description, synthesisMethod, id) {
        super(name, dosage, description, synthesisMethod, id);
    }
}

class VitaminK extends Vitamins {
    constructor(name, dosage, description, type, id) {
        super(name, dosage, description, type, id);
    }
}