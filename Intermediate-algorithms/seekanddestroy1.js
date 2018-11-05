function destroyer(arr) {
    //This will convert arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //For loop to iterate through values of arguments
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
          //if the values are similar delete it
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    // returning the modified array by using Boolean Object as a filter for nulls created by delete operator 
    return arr.filter(Boolean);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);