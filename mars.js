function checkPer(){
  var guess = document.getElementById('per').value.trim();
  var pers = document.getElementById('pers');

if (guess === "Perseverance"){
     pers.textContent = "Correct!";
document.getElementById("pers").style.color = "green";}
else{
  pers.textContent = "Not quite, try again!";}
}

function checkCur(){
  var guess = document.getElementById('curious').value.trim();
  var curi = document.getElementById('curi');

if (guess === "Curiosity"){
     curi.textContent = "Correct!";
document.getElementById("curi").style.color = "green";}
else {
  curi.textContent = "Not quite, try again!";
}
}

function checkOpp(){
  var guess = document.getElementById('opp').value.trim();
  var oppo = document.getElementById('oppo');

if (guess === "Opportunity"){
     oppo.textContent = "Correct!";
document.getElementById("oppo").style.color = "green";}
else {
  oppo.textContent = "Not quite, try again!";}
}
