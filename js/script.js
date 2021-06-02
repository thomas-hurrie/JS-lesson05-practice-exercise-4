var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var span = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  button.innerText = "You've got this!!!";
  modal.classList.add("show-modal");
});

span.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
});
