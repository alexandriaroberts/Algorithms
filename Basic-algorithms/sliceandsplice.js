function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    //slice function to copy the array
    let resultingArray = arr2.slice();
    //splice function to go through each item in arr1 and  insert it into resultingArray. 
    //Here used for loop to do that.
    for(let i=0; i< arr1.length; i++){
        resultingArray.splice(n, 0, arr1[i]);
       n++;
    }
    return resultingArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);