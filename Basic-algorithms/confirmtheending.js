function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
   /* first use the slice method to copy the string.
     Then to get the targets length of charecters, subtract the length of the string from the length of the target */
    return str.slice(str.length - target.length) == target;
  }
  
  confirmEnding("Bast", "t");