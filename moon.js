function checkDookie(){
var dookie = document.getElementById("dookie").value.toLowerCase();
var poo = document.getElementById("poo")

if (dookie == "true"){
  poo.textContent = "Correct! Human waste was left on the moon to study how it's time on the moon affected it.";}

  else if (dookie == "false")
  poo.textContent = "Incorrect, the answer is true. Human waste was left on the moon to study how it's time on the moon affected it.";} 



function checkHamma(){
  var hamma = document.getElementById("hamma").value.toLowerCase();
  var fea = document.getElementById("fea")

if (hamma === "true"){
    fea.textContent = "Correct! A Hammer and ball was brought to the moon by David Scott on the Apollo 15 mission in 1971. This was to test out Galileo Galilei's famous test when he dropped a heavy object and feather to prove they fall at the same speed.";}

  else if (hamma === "false")
    fea.textContent = "Incorrect, the answer is true. A Hammer and ball was brought to the moon by David Scott on the Apollo 15 mission in 1971. This was to test out Galileo Galilei's famous test when he dropped a heavy object and feather to prove they fall at the same speed.";} 



  function checkGolf(){
    var golf = document.getElementById("golf").value.toLowerCase();
    var club = document.getElementById("club")

    if (golf === "true"){
      club.textContent = "False! Alan Shepard on the Apollo 14 mission DID bring a golf club and two golf balls, BUT he brought the club back on Earth with him. He played golf on the moon and stated that the moons surface was one big sand trap";}

    else if (golf === "false")
      club.textContent = "Correct! Alan Shepard on the Apollo 14 mission DID bring a golf club and two golf balls, BUT  he brought the club back on Earth with him. He played golf on the moon and stated that the moons surface was one big sand trap";} 