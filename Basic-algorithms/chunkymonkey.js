function chunkArrayInGroups(arr, size) {
    // Break it up.
    //first a new empty array 
    var newArray = [];
    //for each iteration it deletes size number of array and give it to newArray 
    //it loops through until the length is not 0
    
    while(arr.length){
      newArray.push(arr.slice(0,size));
    }
    return newArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);