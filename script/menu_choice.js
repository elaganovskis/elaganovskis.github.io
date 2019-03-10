const choices = document.querySelector(".choice");
const choiceBack = document.querySelector(".choice__back");
const choiceClose = document.querySelector(".choice__close");
const choiceActive = document.querySelector(".choice_active");

choiceBack.addEventListener("click", function(e) {
  if (choice.classList.contains("choice_active")) {
    e.preventDefault;
  } else {
    choice.classList.add("choice_active");
  }
});

choiceClose.addEventListener("click", function(e) {
  choice.classList.remove("choice_active");
});

function removeActive() {
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].classList.contains("choice_active")) {
      choices[i].classList.remove("choice_active");
    }
  }
}

function addActive() {
  for (var i = 0; i < choices.length; i++) {}
}

for (var i = 0; i < choices.length; i++) {
  if (choices[i].classList.contains("choice_active")) {
    e.preventDefault;
  } else {
    choices[i].classList.add("choice_active");
  }
}
