/* Author: Cecilia Pichardo
 * Date: June 16, 2020
 * Bubble Sort
 *      - Repeatedly swaps adjacent elements if they are in wrong order
 *      - Continues until array is sorted
 */

//Sample array
let array = [8, 7, 6, 5, 4, 10]

//Function swaps adjacent numbers until array is in order
function bubbleSort(numArray) {
    n = numArray.length
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if(numArray[j] > numArray[j+1]) { 
                //swaps second element with the current
                let temp = numArray[j]
                numArray[j] = numArray[j+1]
                numArray[j+1] = temp
            }
        }
    }
    return numArray
}

//Output to console
console.log(`Before: ${array}`);
console.log(`After: ${bubbleSort(array)}`);
