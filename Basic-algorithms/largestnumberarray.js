function largestOfFour(arr) {
  // You can do this!
  // You have to return an array
  //first you have to return an array of largest number from an sub array
  let resultArr = [];
  //check the length of an array with for loop
  for (let i = 0; i < arr.length; i++) {
    // This gives the largest number value of arr[i][0]
    let largestNo = arr[i][0];
    //Now checking through the sub array for the largest no. using for loop
    for (var j = 1; j < arr[i].length; j++) {
      //if arr[i][j] is larger than the largest no, it will give a new value to the largest no and check for that condition through an array
      if (arr[i][j] > largestNo) {
        largestNo = arr[i][j];
      }
    }
    // will give resultArray the value of largest no through sub arrays
    resultArr[i] = largestNo;
  }
  //will return an array of largest number
  return resultArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
