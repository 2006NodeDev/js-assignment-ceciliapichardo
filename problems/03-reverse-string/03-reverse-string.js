/* Author: Cecilia Pichardo
 * Date: June 17, 2020
 * Reverse String
 *      - Takes in string as parameter
 *      - Uses split() to split string into an array
 *      - Uses reverse() to reverse the array
 *      - Uses join() to join elements of array back into a string
 *      - Returns reversed string
 */

//Function inputs a string and returns reversed string
function reverseStr(someStr) {
    /*var split = someStr.split("");
    var reverse = split.reverse();
    var join = reverse.join("");
    return join */
    return someStr.split("").reverse().join("");
}

//Output to console
console.log(reverseStr("hello world"));