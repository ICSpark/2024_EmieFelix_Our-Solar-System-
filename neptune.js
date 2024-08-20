function checkNep (){
  var nep = document.getElementById("nep").value.toLowerCase();
  var img = document.getElementById("pic");
  var message = document.getElementById("message");

  if (nep === "a"){
    message.textContent = "Incorrect! Australian physicist David Jamieson claimed that Galileo Galilei did not describe Neptune as a planet, but as a star. Try again!"
    img.src = "https://media0.giphy.com/media/26uffrQ9LG1obusiQ/200w.gif?cid=6c09b952vfq7089blafuvctweslv128xczv4qxp64isovjl5&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (nep === "b"){
    message.textContent = "Incorrect! The time that Voyager 2 flew by Neptune was centuries after we knew about it's existence. Try again!";
    img.src = "https://cdn.myshoptet.com/usr/www.mapcards.net/user/documents/upload/MCP36%20GIF_1.gif";}

  else if (nep === "c"){
    message.textContent = "Correct! Neptune was officially discovered on September 23, 1846, by Urbain Le Verrier. This was a tight race with John Couch Adams who had the calculations first, but credit goes to Le Verrier since he published his findings first. First, astronomers noticed that the planet was being pulled slightly out of its normal orbit. Then they used math to predict that the gravity beyond Uranus was affecting it's orbit. Eventually they got their calculations, then Johann Gottfried Galle searched for the predicted planet and observed Neptune for the first time in 1846";
  img.src = "https://media1.tenor.com/m/5vo_w_jDfwgAAAAC/calculation-math.gif";}
}