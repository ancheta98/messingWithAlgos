// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. 
//If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
//                                                 [1,  1,  4,  2,  1,   1,  0,  0]
// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

//Notes: Loop through array (fast and slow)
//in new array push whenever slow < fast
//iterate slow and reset fast to be slow+1
//call check function

//hint: If the temperature is say, 70 today,
//then in the future a warmer temperature must be either 71, 72, 73, ..., 99, or 100. We could remember when all of them occur next.
//hint: use a stack last in first out arr, use pop
//create an array which already is the length of forecast and prefilled with 0
// let res = new Array(10).fill(0); //creates an array with 10 indexes of 0
//hint: we don't need a counter to account for the indexes between today and the next warmest day we simply find the difference between the two


function checkTemps(tempList) {
    let days = []
    let dayCount = 0
    if (tempList.length > 1) {
        //while loop?
        recurs(0, 1, dayCount)
        function recurs(slow, fast, dayCount) {
            //slow is current index, fast is ahead of slow by one
            //fast iterates if slow > fast
            //only iterate slow when dayCount is pushed to days (fast >slow)
            while (slow <= tempList.length - 2) {
                if (tempList[slow] >= tempList[fast]) {
                    fast++
                    dayCount++
                    return recurs(slow, fast, dayCount)
                } else if (tempList[slow] < tempList[fast]) {
                    slow += 1;
                    fast = slow + 1;
                    days.push(dayCount)
                    dayCount = 0
                    return recurs(slow, fast, dayCount)
                } else {
                    days.push(dayCount)
                    console.log(days, tempList[slow], tempList[fast])
                    slow += 1
                    fast = slow + 1
                    dayCount = 0
                    return recurs(slow, fast, dayCount)
                }
            }
            days.push(0)
        }
    } else {
        return [0]
    }
    console.log(days)
}
function checkTemps2(tempList) {
    let days = []
    let dayCount = 0
    if (tempList.length > 1) {
        //while loop?
        //slow is current index, fast is ahead of slow by one
        //fast iterates if slow > fast
        //only iterate slow when dayCount is pushed to days (fast >slow)
        for (let i = 0; i < tempList.length -1; i++) {
            for (let j = 1; j < tempList.length; j++) {
                if (tempList[j] > tempList[i]) {
                    days.push(dayCount)
                    console.log(dayCount, "fast is warmer")
                    dayCount = 0;
                    break;
                } else if(tempList[j]< tempList[i]){
                    dayCount++
                    console.log(dayCount,"slow is warmer")
                }
            }
        }
        days.push(0)
    } else {
        return [0]
    }
    console.log(days)
}


const forecast = [45, 40, 60, 70]
const forecast2 = [99, 35, 34, 33]

// checkTemps2(forecast)//will return [2,1,1,0]
checkTemps2(forecast2)//will return [0,0,0,0]