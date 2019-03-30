// Given an integer, find the next largest integer using ONLY the digits from the given integer.
// Given 292761 the next largest integer would be 296127.
// more examples:
// 1243 => 1324
// 234765 => 235467
// 19000 => 90001
// Strategy:
// 1)292761
//find the number greater than the number following the max that is lowest in value, in this case 6 > 2 but not greater than 7
//we want the next largest not the absolute largest
//assign the first value after this digit as the num we want, if a number is bigger ignore it, if it is smaller replace it
//unless is is smaller than the digit we started at (2)
// 2)296721
//order each number following the switched digit (6 in this case) and order them from smallest to largest

function nextLargest(num) {
  var arr = num.toString().split("");

  var max = Math.max(...arr);
  var maxIdx = arr.indexOf(max.toString());
  var minGreatest = arr[maxIdx + 1];
  for (var i = maxIdx + 1; i < arr.length; i++) {
    //if the number is less than the next largest and is greater than the number after the max then assign minGreatest to it
    if (arr[i] < arr[maxIdx + 2] && arr[i] > minGreatest) {
      console.log("switching")
      //do the switch
      // var b = list[y];
      // list[y] = list[x];
      // list[x] = b;
      var temp = arr[minGreatest];
      arr[minGreatest] = arr[i]
      arr[i] = temp
    }

  }
  console.log(arr.slice(0,maxIdx+2).concat(arr.slice(maxIdx +2, arr.length).sort()))
  return arr.slice(0,maxIdx+2).concat(arr.slice(maxIdx +2, arr.length).sort())
}

nextLargest(292761);
// :( it doesn't work for many other implementations ... yet
nextLargest(234765)