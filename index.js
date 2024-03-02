class Formatter {
  static capitalize(word){
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  } 
  
  static sanitize(word) {
   const rep = word.replace(/[^a-zA-Z0-9-' ']/g,"");
    return rep;
  }

  static titleize(phrase){
    let arr =[];
    let myWords = phrase.split(" ");
    arr.push(myWords[0][0].toUpperCase() + myWords[0].substring(1));

    for (let i=1;i<myWords.length;i++){
      if (myWords[i]==="the" || myWords[i]==='a' || myWords[i]==='an' || myWords[i]==='but' || myWords[i]==="of" || myWords[i]==='and' || myWords[i]==='for' || myWords[i]==='at' || myWords[i]==='by' || myWords[i]==='from'){
        arr.push(myWords[i]);
      }
      else {
        arr.push(myWords[i][0].toUpperCase() + myWords[i].substring(1));
      }
}
let fullPhrase=arr.join(" ");
return fullPhrase;
}}


/* for (let i=1;i<phrase.length;i++){
if (phrase.charAt(i)==' '){
  j++;
}
  }*/