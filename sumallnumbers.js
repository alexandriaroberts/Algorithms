function sumAll(arr) {
  //get the largest and smallest number
  var largestNumber = Math.max(arr[0], arr[1]);
  var smallestNumber = Math.min(arr[0], arr[1]);
  // temporary sum value 0 and use for loop to add numbers from smallest to largest number
  var sum = 0;
  for (var i = smallestNumber; i <= largestNumber; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
