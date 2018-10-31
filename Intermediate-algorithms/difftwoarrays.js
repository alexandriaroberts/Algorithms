function diffArray(arr1, arr2) {
    //first merge the arrays
    var newArr = arr1.concat(arr2);
    // filter the item which is available in only one array
    return newArr.filter( item => !arr1.includes(item) || !arr2.includes(item) );
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);