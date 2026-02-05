console.log("js started");

var data;
var grid = document.querySelector(".grid-container");

// LOAD DATA (localStorage first, otherwise JSON)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  makeCards();
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from moviesdata.JSON");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter movies to localStorage");

      makeCards();
    }
  };

  xhttp.open("GET", "moviesdata.JSON", true);
  xhttp.send();
}

// RENDER MOVIE CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='movie-title'>" + movie.title + "</div>" +
      "<div>Cast: " + movie.cast + "</div>" +
      "<div>Release Date: " + movie.year + "</div>";

    card.innerHTML = textData;

    if (movie.imgSrc) {
      card.style.backgroundImage = "url('" + movie.imgSrc + "')";
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
    }

    grid.appendChild(card);
  });

  console.log("cards refreshed");
}
