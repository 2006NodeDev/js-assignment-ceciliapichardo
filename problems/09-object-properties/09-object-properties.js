/* Author: Cecilia Pichardo
 * Date: June 19, 2020 
 * Object Properties
 *      - Print every property and it's value
 */

 //Function prints every property and property value of an object
function objectProperties(someObj) {
    for(let propName in someObj) {
        propValue = someObj[propName]
        console.log(`${propName}: ${propValue}`);
    }
}

//Output to console
let personObj = {name: "Cecilia", age: 21, hometown: "Fairfield, CA", favoriteFood: "taquitos"};
objectProperties(personObj)