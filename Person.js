const EventEmitter = require('events');

class Person extends EventEmitter{
    constructor(name, age){
        super();

        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }

}

module.exports = Person;