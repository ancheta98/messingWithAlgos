const fizzBuzz = function(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      arr.push("fizzbuzz");
    } else if (i % 5 == 0) {
      arr.push("buzz");
    } else if (i % 3 == 0) {
      arr.push("fizz");
    } else {
      arr.push(i);
    }
    return arr;
  }
};

console.log(fizzBuzz(15));
