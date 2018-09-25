function findElement(arr, func) {
    /* looks through an array and for that the num variable will help 
    to check for the each index's and is passed through the 
    function. Predefined function num => num % 2 === 0 will
     check each number.*/
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }//if the numbers passed in the arary doesn't pass the function's test
    // undefined will be returned
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);