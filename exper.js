// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
// Output: [-1,3,-1]
// Explanation:
// For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
// For number 1 in the first array, the next greater number for it in the second array is 3.
// For number 2 in the first array, there is no next greater number for it in the second array, so output -1.



var nextGreaterElement = function(nums, nums2) {
    //run for loop through first arr
    //indexof to find place of index in second arr
    //for each index ran through for loop compare all next elements to see if they are greater than
    var result = [];
    for( var i = 0; i < nums.length; i++ ){
        var compare = nums2.indexOf(nums[i]) + 1
        if(compare){
            recurs(compare, nums, nums2)
                function recurs(compare, nums, nums2){
                        if(nums[i] < nums2[compare]){
                            result.push(nums2[compare])
                        }else if(nums[i] < nums2[compare]){
                            compare++;
                            recurs(compare, nums, nums2)
                        }else {
                            result.push(-1)
                        }
                    }
        }else{
            result.push(-1)
        }
    }
    return result;
};

var nums1 = [4,1,2]
var nums2 = [1,3,4,2]
//answer is [-1,3,-1]

var nums3 = [2,4]
var nums4 = [1,2,3,4]
//answer is [3, -1]

nextGreaterElement(nums1, nums2)
nextGreaterElement(nums3, nums4)