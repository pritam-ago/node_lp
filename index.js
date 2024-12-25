const Person = require('./Person')

const person1 = new Person('Vikas', 18);

person1.on('called', ()=>{
    console.log(`My name is ${person1.name} and I'm ${person1.age}`);
});
person1.emit('called');