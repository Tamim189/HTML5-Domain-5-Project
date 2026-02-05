console.log("form script started");

// Load existing data
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

var form = document.querySelector("form");
var titleInput = document.querySelector("#title-input");
var yearInput = document.querySelector("#year-input");
var castInput = document.querySelector("#cast-input");
var imgInput = document.querySelector("#img-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    year: yearInput.value,
    cast: castInput.value,
    imgSrc: imgInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new movie to localStorage");

  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});
