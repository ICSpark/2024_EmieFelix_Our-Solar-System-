var artwork = document.getElementById("aurora")
var random = 0
const artworks = ["https://c.files.bbci.co.uk/17069/production/_132831349_aurora2.jpg", "https://www.qantas.com/travelinsider/en/travel-tips/how-to-see-the-northern-lights/_jcr_content/parsysTop/hero.img.1440.high.jpg/1587980552111.jpg", "https://www.muchbetteradventures.com/magazine/content/images/2019/10/15132630/joshua-earle-Hn8N4I4eHA0-unsplash.jpg", "https://www.nps.gov/voya/learn/nature/images/VOYA_Aurora_Borealis-12.jpg?maxwidth=1300&autorotate=false", "https://www.capturelandscapes.com/wp-content/uploads/2019/10/Photograph-Northern-Lights-Tips.jpg", "https://www.tourradar.com/days-to-come/wp-content/uploads/2023/12/HEROAlaskaUSA.NanditaDamaraju_Unsplash-scaled.jpg", "https://images.ctfassets.net/a68ipajj4t9l/FUjszBrEpBo6ibZAWYzM1/940f2fc9b6a9b1ea713d239f9c5ebadb/RE63-min-progressive.jpeg?w=600&h=400&q=60"]

function changeArtwork(){
  random = Math.floor(Math.random() * artworks.length);
  artwork.src = artworks[random];
}



