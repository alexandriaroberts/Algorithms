function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    //filter method return a boolean function and 
    //returns true for truthy values and false for falsy value
    //alsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);