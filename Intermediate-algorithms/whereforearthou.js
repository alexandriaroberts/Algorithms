function whatIsInAName(collection, source) {
  // What's in a name?
  // storing a returned array of source Object in a sourcekeys variable
var sourcekeys = Object.keys(source);
//filterd through the array and used for loop
  return collection.filter(function(obj){
   for(var i=0; i< sourcekeys.length; i++){
     //checking here if the object in the collection doesn't have the key
     // and property value here doesn't match the value in cource, if it doesn't match return false if it does true
     if(!obj.hasOwnProperty(sourcekeys[i]) || obj[sourcekeys[i]] !== source[sourcekeys[i]]){
       return false;
     }     
   }
   return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });