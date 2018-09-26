function mutation(arr) {
    //declaring variables and convert first element of arrays into lowercase
     let string1 = arr[0].toLowerCase();
     let  string2 = arr[1].toLowerCase();
     for(var i=0; i < string2.length; i++) {
       // mdn :- The indexOf method returns the index withinn the calling string
       //below we are checking if the charecters in string2 are same
       // like string1 by using indexOf method
       if(string1.indexOf(string2[i]) < 0){
        return false;
       }
     }
      return true;
      } 
    
    
    mutation(["hello", "hey"])