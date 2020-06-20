/* Author: Cecilia Pichardo
 * Date: June 19, 2020
 * Object Creation
 *      - object created using an object literal, constructor function, and es6 class
 *      - the object has the fields name and age
 */

//Object literal
let person = {name: "Cecilia", age: 21};
console.log(person);

//Constructor
let anotherPerson = Object();
anotherPerson.name = "Jane"
anotherPerson.age = 33
console.log(anotherPerson);

//es6 class
class Person {
    constructor(name, age, hometown) {
        this.name = name
        this.age = age
    }
}

let donovan = new Person('Donovan', 23)
console.log(donovan);