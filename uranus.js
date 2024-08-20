function checkTilt(){
  var guess = document.getElementById("guess");
  var explain = document.getElementById("explain");
  var img = document.getElementById("img");
  
   if (guess.value === "23"){
    explain.textContent = "No, not even close. The numbers under this are not the answer too. This is Earth's axis, and the perfect one for life to exist too since the tilt of Earth gives us seasons. Try again!";
   img.src = "https://www.icegif.com/wp-content/uploads/2023/07/icegif-1204.gif";}

   else if (guess.value < "89"){
   explain.textContent = "DEFINETLY NOT the numbers below this"
   img.src = "https://media.tenor.com/c5a_h8U1MzkAAAAM/nuh-uh-beocord.gif";}
  
  else if (guess.value === "90"){
    explain.textContent = "Keep going up!"
  img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "91"){
      explain.textContent = "Keep going up!"
    img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "92"){
        explain.textContent = "Keep going up!"
      img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "93"){
      explain.textContent = "Keep going up!"
    img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "94"){
        explain.textContent = "Keep going up!"
      img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "95"){
      explain.textContent = "Keep going up!"
    img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "96"){
      explain.textContent = "Keep going up!"
    img.src = "https://media0.giphy.com/media/Dqanolnc1f5xTu58wo/200w.gif?cid=6c09b95282b51s83yprducww2imj3nj682yffom81slkdr7f&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "97"){
    explain.textContent = " Since this tilt is so much, this causes Uranus to have the most extreme seasons in the solar system. For nearly a quarter of a Uranian year, the Sun shines directly onto Uranus, plunging the other half into a 21 year dark, long winter."
  img.src = "https://media.tenor.com/LMp1eK1zWbsAAAAM/uranus-solarballs-solarballs.gif";}

  else if (guess.value === "98"){
    explain.textContent = "Go down!";
    img.src = "https://media.tenor.com/vwgIcAUEJ9IAAAAM/friends-chandler-bing.gif";}

else if (guess.value === "99"){
    explain.textContent = "Go down!";
    img.src = "https://media.tenor.com/vwgIcAUEJ9IAAAAM/friends-chandler-bing.gif";}

  else if (guess.value > "100"){
   explain.textContent = "NOT the numbers above this"
   img.src = "https://media.tenor.com/vwgIcAUEJ9IAAAAM/friends-chandler-bing.gif";}
}