// A number is input in computer then a new no should get printed by adding one to each of its digit.
// If you encounter a 9, insert a 10 (don't carry over, just shift things around).

// For example, 998 becomes 10109.

// Bonus
// This challenge is trivial to do if you map it to a string to iterate over the input, operate, and then cast it back.
// Instead, try doing it without casting it as a string at any point, keep it numeric (int, float if you need it) only.

//without iteration the only other thing I can think of is a mathematical solution (theoretical of course I don't have anything thought out... yet)
//update I thought of something

//with iteration
function addOneIterable(num) {
  num = num
    .toString()
    .split("")
    .map(x => parseInt(x) + 1)
    .join("");
  return num;
}

addOneIterable(998);
addOneIterable(8);

//without iteration
//if the number is greater than 10 then I know that I can't just add one to it since the greatest number I will have is 9
//maybe use the mod operator

function addOne(num) {
  let newNum = "";
  let remainder;
  // recursive function to break down the number into single digits
  function recurs(num) {
    //Depending on whether or not the digit is longer than 2 digits, I either want to break it down and then add the remainder+1 or I want to just add the...
    // ... number itself + 1 (this makes sure that I do not miss the last digit in the integer given)
    if (num > 10) {
      remainder = num % 10;
      newNum += remainder + 1;
      num =Math.floor(num/10)
      recurs(num)
    }else{
      newNum += num+1
    }
  }
//if the numer is longer than two digits then I want to break it down using the recursive fxn and deal with it there
  if (num > 10) {
    recurs(num)
  }else{
    //in the case that only a single digit is passed in
      newNum+= num+1
  }
  return parseInt(newNum)
}
addOne(998)
addOne(1212221);
addOne(5)
