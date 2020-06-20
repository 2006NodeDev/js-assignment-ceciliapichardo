/* Author: Cecilia Pichardo
 * Date: June 18, 2020
 * Substring
 *      - Finds substring of text contained between the start and end indices 
 */

//Function returns the substring between the startIndex and endIndex
function substring(someStr, startIndex, endIndex) {
    var stringArr = someStr.split("")
    return stringArr.splice(startIndex,endIndex).join("")
}

//Output to console
console.log(substring('Hello World', 0, 8));