// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

const addDigits = (num) => {
    let max = 0;
    let newDigit;
    //checks if num is not greater than 10
    //will split it into individual numbers and add them together producing max
    if (num >= 10) {
        num = num.toString().split("")
        for (let i = 0; i < num.length; i++) {
            newDigit = parseInt(num[i])
            max += newDigit
        }
    } else {
        return num;
    }
    //if max is greater than 9 then it will run the function again to split the individual numbers etc.
    return (max >= 10 ? addDigits(max) : max)
}



console.log(addDigits(38))