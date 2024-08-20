function moonCount(){
  var guess = document.getElementById("Guess");
  var message = document.getElementById("message");
  var img = document.getElementById("pic");

if (guess.value === "95"){
  message.textContent = "Are you surprised? You got it right! Scientists theorize that many of Jupiter's moons started out as drifting chunks of rock that became caught by the planet's gravitational pull. This, in turn caused many moons to be created. Nice job with your guess!"
  img.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Jupiter_moons_anim.gif";}

 else if (guess.value === "100"){
  message.textContent = "Pretty close. Maybe go down a little. Try again!"
   img.src = "https://y.yarn.co/e755d50e-0f38-4acd-b876-dfc30ab0ea4b_text.gif";}

  else if (guess.value === "1"){
  message.textContent = "Unlike Earth, Jupiter does not have ONLY 1 moon. Try again!"
  img.src = "https://media.tenor.com/c5a_h8U1MzkAAAAM/nuh-uh-beocord.gif";}

else if (guess.value === "0"){ 
   message.textContent = "You know that if the answer was zero I wouldn't be asking you this question right? Try again!"
img.src = "https://media.tenor.com/FXOSfHN8VCQAAAAM/bruh.gif";}

  else if (guess.value === "90"){
      message.textContent = "Little bit up..."
  img.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200w.gif?cid=6c09b952921611uudhju01ks59n98kc7v6ehjlqbzgb967p7&ep=v1_gifs_search&rid=200w.gif&ct=g";}

else if (guess.value === "91"){
    message.textContent = "Little bit up..."
img.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200w.gif?cid=6c09b952921611uudhju01ks59n98kc7v6ehjlqbzgb967p7&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "92"){
  message.textContent = "Little more..."
  img.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200w.gif?cid=6c09b952921611uudhju01ks59n98kc7v6ehjlqbzgb967p7&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "93"){
  message.textContent = "Almost..."
  img.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200w.gif?cid=6c09b952921611uudhju01ks59n98kc7v6ehjlqbzgb967p7&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "94"){
  message.textContent = "ALMOST THERE!"
  img.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200w.gif?cid=6c09b952921611uudhju01ks59n98kc7v6ehjlqbzgb967p7&ep=v1_gifs_search&rid=200w.gif&ct=g";}

  else if (guess.value === "99"){
  message.textContent = "Little bit down..."
   img.src = "https://y.yarn.co/e755d50e-0f38-4acd-b876-dfc30ab0ea4b_text.gif";}

  else if (guess.value === "98"){
  message.textContent = "Little more..."
   img.src = "https://y.yarn.co/e755d50e-0f38-4acd-b876-dfc30ab0ea4b_text.gif";}

  else if (guess.value === "97"){
  message.textContent = "Almost..."
   img.src = "https://y.yarn.co/e755d50e-0f38-4acd-b876-dfc30ab0ea4b_text.gif";}

  else if (guess.value === "96"){
  message.textContent = "ALMOST THERE!"
   img.src = "https://y.yarn.co/e755d50e-0f38-4acd-b876-dfc30ab0ea4b_text.gif";}

  else if (guess.value <= "80"){
  message.textContent = "DEFINETLY NOT the numbers below this. Go up and try again!"
  img.src = "https://media.tenor.com/c5a_h8U1MzkAAAAM/nuh-uh-beocord.gif";}

}