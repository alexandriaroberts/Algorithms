function spinalCase(str) {
    //using the split method first check to remove white space with \s
    //then if the _ underscore charecter or if it is followed by uppercase letter.
    //Used join method to join the array using - and convert it to lover case
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');