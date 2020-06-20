/* Author: Cecilia Pichardo
 * Date: June 19, 2020
 * Splice Element
 *      - splice the element at the provided index in the array
 */

//Function splices the elements of the param array from index 0 to param index
function spliceElement(someArr, index) {
    return someArr.splice(0, index)
}

//Output to consule
let arr = ['hey', 'how are ya?', 9, 11, 77]
console.log(spliceElement(arr, 2));