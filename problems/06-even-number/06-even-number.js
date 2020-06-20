/* Author: Cecilia Pichardo
 * Date: June 19, 2020
 * Even Number
 *      - output will take true/false from isEven() and output even/odd
 */

//Function accepts number and returns true if even, false if odd
function isEven(someNum) {
    var isEven = true

    for(var i = 1; i <= someNum; i++) {
        isEven = !isEven
    }

    return isEven
}

//Output to console if number is even or odd
var num = 16
if(isEven(num)) {
    console.log(`The number ${num} is even`);
}
else if(!isEven(num)) {
    console.log(`The number ${num} is odd`);
}
