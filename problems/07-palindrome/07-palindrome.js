/* Author: Cecilia Pichardo
 * Date: June 19, 2020
 * Palindrome
 *      - palindrome = a word that reads the same backward and forward
 *      - toLowerCase() converts string to lowercase
 *      - replace() finds all occurences of /[\W_,.']/g regex and replaces it with a string
 *      - reverseStr splits the lowercaseStr into an array, reverses it, and joins it back into a string
 *      - isPalindrome will return either true or false
 */

//Function takes in string and returns true/false for palindrome condition
function isPalindrome(someStr) {
    var isPalindrome = false
    var lowercaseStr = someStr.toLowerCase().replace(/[\W_,.]/g, '')
    var reverseStr = lowercaseStr.split('').reverse().join('')

    if(lowercaseStr === reverseStr) {
        isPalindrome = true
    }
    else {
        isPalindrome = false
    }

    return isPalindrome
}

//Output to console if given string is palindrome
var str = 'Dammit I\'m mad'
if(isPalindrome(str)) {
    console.log(`The string '${str}' is a palindrome`);
}
else if(!isPalindrome(str)) {
    console.log(`The string '${str}' is not a palindrome`);
    
}
