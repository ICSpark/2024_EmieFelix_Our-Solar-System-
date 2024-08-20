var artwork = document.getElementById("hub");
var random = 0;
const artworks = [ "https://cdn.esahubble.org/archives/images/thumb700x/heic0715a.jpg", "https://cdn.esahubble.org/archives/images/thumb300y/opo0328a.jpg", "https://cdn.esahubble.org/archives/images/thumb700x/heic0910h.jpg", "https://cdn.esahubble.org/archives/images/thumb300y/potw2050a.jpg", "https://cdn.esahubble.org/archives/images/thumb700x/heic1310a.jpg", "https://cdn.esahubble.org/archives/images/thumb700x/heic1406a.jpg", "https://cdn.esahubble.org/archives/images/thumb700x/heic1613a.jpg", "https://esahubble.org/media/archives/fitsimages/large/john_corban_12.jpg", "https://cdn.esahubble.org/archives/images/thumb700x/heic2302a.jpg"];

function changeArtwork(){
  random = Math.floor(Math.random() * artworks.length);
  hub.src = artworks[random];
}