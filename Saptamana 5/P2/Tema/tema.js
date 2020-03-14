
function is_string(aaa){
    if 
    (typeof aaa === "string"){
    return true}
    
     else{
    return false}
  }
  console.log(is_string('w3resource'));
  console.log(is_string([1, 2, 4, 0]));
  
  





  
  function is_Blank(bbb){
    
    if 
      (bbb.length === 0) 
      return true; 
    
    else 
      return false;}
  
  console.log(is_Blank(''));
  console.log(is_Blank('abc'));
  






  function string_to_array(ccc){
   return ccc.split(" ");
  }
  
  console.log(string_to_array("Robin Singh"));
  







  function abbrev_name(name){
   var names = name.split(" ");
   return (names[0] + " " + names[1].charAt(0) + ".");
   
  }
  
  console.log(abbrev_name("Robin Singh"));
  console.log(abbrev_name("Alexandra Dumitrachi"));
  
  





  function capitalize(cap){
    var caps = cap.charAt(0).toUpperCase() + cap.slice(1)
    return caps
  }
  console.log(capitalize('js string exercises'));
  
  






  function truncate_string(char,num){
    
    return char.substr(0, num)
    
  }
  
  console.log(truncate_string("Robin Singh",4));
  
  







  function isUpperCaseAt(ggg,nrr){
    
    return ggg.charAt(nrr).toUpperCase() === ggg.charAt(nrr)
    
  }
  
  console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
  






  function insert(main, second, nr){
  
  if(typeof(nr) === "undefined"){
    nr = 0;
  }
  
  if(typeof(second) === "undefined"){
    second = '';
  }
  
  return main.slice(0, nr) + second + main.slice(nr)
  }
  console.log(insert('We are doing some exercises.'));
  console.log(insert('We are doing some exercises.','JavaScript '));
  console.log(insert('We are doing some exercises.','JavaScript ',18));
  
  







  function remove_first_occurrence(phrase, word) {
    var stringPosition = phrase.indexOf(word);
      if (stringPosition === -1) {
        return phrase;
      }
     
      return phrase.slice(0 , stringPosition) + phrase.substr(stringPosition + word.length);
  }
      console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
  
  







  function compare_strings(a,b)
  {
     
    var same = a.toLowerCase() === b.toLowerCase();
    return same;
    
  
  }
  
  console.log(compare_strings('abcd', 'AbcD'));
  





  
  function Uncapitalize(hhh){
    
     return hhh.charAt(0).toLowerCase() + hhh.slice(1);
  }
  
  
  console.log(Uncapitalize('Js string exercises'));