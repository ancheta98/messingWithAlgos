// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

// if number > 10
// number to string then split("")
// then parse int on each split digit and add them

//repeat -- use recursion

//else 
//return num
const addDigits = (num) => {
    let max = 0;
    let newDigit;
    if (num >= 10) {
        num = num.toString()
        num = num.split("")
        for (let i = 0; i < num.length; i++) {
            newDigit = parseInt(num[i])
            max += newDigit
        }
    } else {
        return num;
    }
    if (max >= 10) {
        return addDigits(max)
    } else {
        return max;
    }
}



console.log(addDigits(38))