function titleCase(str) {
    //convert the string to lowercase and split it
    var sliceStr= str.toLowerCase(str).split(' ');
    var convertFirstLetter = sliceStr.map( function(firstLetter){
      return firstLetter.replace(firstLetter.charAt(0), firstLetter.charAt(0).toUpperCase());
    });
  return convertFirstLetter.join(' ');
  }
  
  
  titleCase("I'm a little tea pot");