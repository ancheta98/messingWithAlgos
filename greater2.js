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

var nextGreaterElementII = function(nums) {
  var result = [];
  var next = 0;
    for (var i = 0; i < nums.length; i++) {
        //for every elem check the next values
        function checkVals() {
            
        }
    }
};

var nums1 = [1, 2, 1];
//the output is [2,-1,2]

nextGreaterElementII(nums1);
