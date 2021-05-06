const ErrorInput = document.querySelector(".custom-field4-input");
const errorMessage = document.querySelector(".error");

function changeColor() {
  errorMessage.style.color = "#f95459";
}

function onBlur() {
  errorMessage.style.color = "#00000099";
}
