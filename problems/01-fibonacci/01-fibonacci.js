/* Author: Cecilia Pichardo
 * Date: June 16, 2020
 * Fibonacci
 *    - The next number is found by adding up the two numbers before
 *    - Sequence: n=1 n=2 n=3 n=4 n=5 ...
 *                 0   1   1   2   3 ...
 */

//Dictionary
let nums = {
    1:0,
    2:1
}

//Function returns nth number in fibonacci sequence
let fib = (n) => {
    if(nums[n] || nums[n] === 0) {
        return nums[n]
    }
    else {
        nums[n] = fib(n - 1) + fib(n - 2)
        return nums[n]
    }
}

//Output to console
console.log(`${fib(1)}, ${fib(2)}, ${fib(3)}, ${fib(4)}, ${fib(5)}...${fib(10)}`);