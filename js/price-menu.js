const priceStyle = document.querySelector(".style-container");
const priceBody = document.querySelector(".body-painting-container");
const priceMakeup = document.querySelector(".make-up-contaiiner");

function showStyle() {
  priceStyle.classList.remove("displayOff");
  priceBody.classList.add("displayOff");
  priceMakeup.classList.add("displayOff");
}

function showBody() {
  priceStyle.classList.add("displayOff");
  priceBody.classList.remove("displayOff");
  priceMakeup.classList.add("displayOff");
}

function showMakeup() {
  priceStyle.classList.add("displayOff");
  priceBody.classList.add("displayOff");
  priceMakeup.classList.remove("displayOff");
}

const styleButton = document.querySelector(".price-style-header");
const bodyButton = document.querySelector(".price-body-header");
const makeupButton = document.querySelector(".price-make-up-header");

styleButton.addEventListener("click", showStyle);
bodyButton.addEventListener("click", showBody);
makeupButton.addEventListener("click", showMakeup);

showStyle();