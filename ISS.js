function checkCon(){
  var guess = document.getElementById("guess");
  var country = document.getElementById("country");
  var img = document.getElementById("pic");

  if (guess.value === "1"){
    country.textContent = "No, there are way more visitors than that! Try again!";
    img.src = "https://media2.giphy.com/media/ScKpvclmMmw5a9wm1J/200w.gif?cid=6c09b952hol4y6mmv2kyysdz6g5ek7z102kbfgqmeu5k51pv&ep=v1_gifs_search&rid=200w.gif&ct=g";
  }

  else if (guess.value <= "19"){
      country.textContent = "Just keep going up and you'll be closer.";
      img.src = "https://techcrunch.com/wp-content/uploads/2019/11/spacex-starlink-lift-off.gif";
    }

  else if (guess.value === "23"){
    country.textContent = "You are correct! A total of 23 countries had a visitor to visit the International space station! Every continent besides Antartica and the Arctic had at least one visitor. Amazing!";
    img.src = "https://www.ouruniverseforkids.com/wp-content/uploads/2017/08/ISS-Countries-Pic.png";
  }

  else if (guess.value === "20"){
    country.textContent = "Getting close! Go up!";
    img.src ="https://media0.giphy.com/media/13uIkoBotSLGCKJGYW/giphy.gif?cid=6c09b9521oy66rjsvdcd4bn2ex5nwlhlh7mc9ig1atxfnlrf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  }

  else if (guess.value === "21"){
    country.textContent = "Getting close! Go up!";
    img.src ="https://media0.giphy.com/media/13uIkoBotSLGCKJGYW/giphy.gif?cid=6c09b9521oy66rjsvdcd4bn2ex5nwlhlh7mc9ig1atxfnlrf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  }

  else if (guess.value === "22"){
    country.textContent = "Getting close! Go up!";
    img.src ="https://media0.giphy.com/media/13uIkoBotSLGCKJGYW/giphy.gif?cid=6c09b9521oy66rjsvdcd4bn2ex5nwlhlh7mc9ig1atxfnlrf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  }

  else if (guess.value === "24"){
    country.textContent = "Go down!";
    img.src = "https://media0.giphy.com/media/Js7cqIkpxFy0bILFFA/200w.gif?cid=6c09b952r66kzewjqbij24jgjpjk100ircq1ajfgvllm40a9&ep=v1_internal_gif_by_id&rid=200w.gif&ct=g";
  }

  else if (guess.value === "25"){
    country.textContent = "Go down!";
    img.src = "https://media0.giphy.com/media/Js7cqIkpxFy0bILFFA/200w.gif?cid=6c09b952r66kzewjqbij24jgjpjk100ircq1ajfgvllm40a9&ep=v1_internal_gif_by_id&rid=200w.gif&ct=g";
  }

  else if ("26" < guess.value < "99"){
    country.textContent = "Go down! Too far up!";
    img.src ="https://media0.giphy.com/media/Js7cqIkpxFy0bILFFA/giphy.gif?cid=6c09b952r66kzewjqbij24jgjpjk100ircq1ajfgvllm40a9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  }
}


