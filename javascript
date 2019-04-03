var name = '';
var culture = '';
var allegiances= [];
var gender  = '';
var nameSlot = $("#name")
var cultureSlot = $("#culture")
var aliasesSlot = $('#aliases')
var genderSlot = $('#gender');
//capitalize first letters of first and last names
function titeCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for(var i = 0; i < str.length; i++) {
    var title = str[i].split("");
    title[0] = title[0].toUpperCase();
    str[i] = title.join("");
  }
  return str.join(" ");
}
//receive data
function recieveStuff() { 
  //keep getting new results
  nameSlot.empty();
  cultureSlot.empty();
  aliasesSlot.empty();
  genderSlot.empty();
  // get a random number between 12 and a 2125
  count = Math.floor(Math.random() * 2125 + 12);

  $.getJSON("https://anapioficeandfire.com/api/characters/"+count,
    function(data) {
      name = data.name;
      culture = data.culture;
      aliases = data.aliases;
      gender = data.gender;

      // add name into the id=name element
      nameSlot.append(name);
      cultureSlot.append(culture);
  aliasesSlot.append(aliases);
      genderSlot.append(gender);
    }
  )
 }


$(document).ready(function() {

  
  // add event handler to button
  $("#getGot").on("click", recieveStuff);
});

