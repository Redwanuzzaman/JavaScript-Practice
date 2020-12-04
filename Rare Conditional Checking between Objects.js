const person1 = {name: 'Redwan'};
// undefined
const person2 = {name: 'Redwan'};
// undefined
person1 === person2
// false
typeof(person1)
// "object"
const person3 = person1;
// undefined
person1 === person3
// true
person1 == person3
// true
person1.name == person2.name
// true
person1.name === person2.name
// true
