function truncateString(str, num) {
    // Clear out that junk in your trunk
    //first need to check if the string length is less than the number then return string
    if (str.length <= num) {
      return str;
    }
    //here use slice method to give the starting point 0 from where the string will start and then the condition
    else {
      return str.slice(0, num > 3 ? num - 3 : num)+ '...';
    }
  }
  
  truncateString("A-tisket ", 8);