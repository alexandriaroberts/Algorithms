function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //push a number using push methos
  arr.push(num);
  //sort method takes a function to sort the numbers
  arr.sort(function(a, b) {
    return a - b;
  });

  //indexOf method returns the index of an array
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
