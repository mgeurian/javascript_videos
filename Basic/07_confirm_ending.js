
function confirmEnding(str, target) {
 
  return target === str.substring(str.length - target.length);
}

/* I've used the .substring method and the length property to extract the last 
   characters of each string. Nice and neat in one line.




console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("He has to give me a new name", "me"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
