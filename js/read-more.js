//How we work read-more button
function howWeWork() {
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
}

//The shop read-more button

function theShop() {
  var shopDots = document.getElementById("dotsShop")
  var shopMoreText = document.getElementById("moreTextShop")
  var shopBtn = document.getElementById("btnShop")

  if (shopDots.style.display === "none") {
      shopDots.style.display = "inline";
      shopBtn.innerHTML = "Read more";
      shopMoreText.style.display = "none";
  } else {
      shopDots.style.display = "none";
      shopBtn.innerHTML = "Read less";
      shopMoreText.style.display = "inline"

  }
}