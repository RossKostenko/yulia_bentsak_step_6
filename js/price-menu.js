const priceStyle = document.querySelector(".price-style");
const priceBody = document.querySelector(".price-body-painting");
const priceMakeup = document.querySelector(".price-make-up");

function showStyle() {
  priceStyle.classList.remove("displayOff");
  priceBody.classList.add("displayOff");
  priceMakeup.classList.add("displayOff");
}

function showBody() {
  priceStyle.classList.remove("displayOff");
  priceBody.classList.add("displayOff");
  priceMakeup.classList.add("displayOff");
}

function showMakeup() {
  priceStyle.classList.remove("displayOff");
  priceBody.classList.add("displayOff");
  priceMakeup.classList.add("displayOff");
}

const styleButton = document.querySelector(".price-style-header");
const bodyButton = document.querySelector(".price-body-heade");
const makeupButton = document.querySelector(".price-make-up-header");

styleButton.addEventListener("click", showStyle());
bodyButton.addEventListener("click", showBody());
makeupButton.addEventListener("click", showMakeup());

