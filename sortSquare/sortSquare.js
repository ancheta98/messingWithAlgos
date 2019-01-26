//.sort function uses compare function to sort numerical values

var sortedSquares = function(A) {
    return A.map(x => x*x).sort(function(a,b){return a-b})
};

sortedSquares([1,2,3,9,7])