function zebbylion() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  var dot = document.getElementById("dot");
  var moreeText = document.getElementById("moree");
  var buttonText = document.getElementById("button");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    buttonText.innerHTML = "Read more";
    moreeText.style.display = "none";
  } else {
    dot.style.display = "none";
    buttonText.innerHTML = "Read less";
    moreeText.style.display = "inline";
  }
}