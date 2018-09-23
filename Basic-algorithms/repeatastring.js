function repeatStringNumTimes(str, num) {
    // repeat after me
    //first check if n is negative or less than 0 and return and empty string if it is
    if (num < 0) {
      return '';
      // if n is 1 it should return a string
    } if (num == 1) {
      return str;
    } else
    // use repeatStringNumTimes function with num being minus by 1 and
    //this will call the function number of times until it reached 1  
      return str+repeatStringNumTimes(str, num - 1);
  }
  
  repeatStringNumTimes("abc", 3);