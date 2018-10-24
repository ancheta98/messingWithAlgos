// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number;
// The second 1's next greater number needs to search
// circularly, which is also 2;

// notes: run a function to check values,
// var next = 0
// if i == arr.length-1 , reset i to next
// while i != index of point of checking continue running function to
// chack values
//how to check that I've circled back to the same index that I started

var nextGreaterElementII = function(nums) {
  var result = [];
  var next;
  var count = 1;
  //when count is equal to the length then I know that I've made a circle
  //count increments everytime i moves
  for (var i = 0; i < nums.length; i++) {
    //for every elem check the next values
    checkVals(next, count);
    function checkVals(next, count, nums) {
      count++;
      if (count != nums.length) {
        if (i == nums.length - 1) {
          //if at the end of the array, set i to zero
          next = 0;
        } else {
            next = i + 1;
        }
        if(nums[i] < nums[next]){
            result.push(nums[next])
        }else if(nums[i] < nums2[next]){
            next++;
            checkVals(next, count, nums)
        }else {
            result.push(-1)
        }
      }else{
          return result
      }
    }
  }
};

var nums1 = [1, 2, 1];
//the output is [2,-1,2]

nextGreaterElementII(nums1);
