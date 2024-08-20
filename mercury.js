function checkGuess(){
  var guess = document.getElementById('userInput').value.toLowerCase();
  var message = document.getElementById('message');
  var img = document.getElementById("pic");

if (guess === "b"){
     message.textContent = "Yes! According to Sir Isaac Newton, both mass and distance affect the pull of gravity. Since Mercury is such a small planet compared to the sun, and is closer, the pull has a much larger affect on it and causes it to orbit quicker.";
img.src = "https://assets-v2.lottiefiles.com/a/1b098bd0-1165-11ee-8251-270701d4016c/lFY8IJutvv.gif";
document.getElementById("correct").style.color = "green"}

  else if (guess === "a"){
    message.textContent = "Not quite. Inertia is the force that keeps an object at rest. It prevents the planets from drifting away from the sun into the space abyss and keeps them moving in a foward direction. Try again!"
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDmYAHiJxp65QOBnW3WbgHvl7muVBh2jzzOF7kYKlfg&s"
  }

  else if ( guess === "c") {
    message.textContent = "Newton's first law states that an object in motion remains in motion and an object at rest remains at rest unless acted upon by an outside force. In this situation, although Mercury could be stopped at a certain point, it does not explain why it's orbit is shorter compared to to other planets. Try again!"
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCtW6RQzIXfi0qX9QmfsabXSoRm1_Arrlw25opUu1XA&s";
  }

}