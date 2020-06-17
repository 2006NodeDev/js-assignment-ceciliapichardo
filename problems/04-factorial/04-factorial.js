/* Author: Cecilia Pichardo
 * Date: June 17, 2020
 * Factorial
 *      - Calculates the product of a number and each number less than that number
 *               num * factorial(num - 1)
 */

//Function uses recursion to find and return the factorial of a number
function factorial(sumNum) {
    if(sumNum < 0) {
        return -1;
    }
    else if(sumNum == 0) {
        return 1;
    }
    else {
        return (sumNum * factorial(sumNum - 1));
    }
}

//Output to console
console.log(factorial(7));
