//// TASK 1
var newDiv = document.createElement("div");
newDiv.innerHTML = "Этот элемент создан при помощи DOM API";
document.body.appendChild(newDiv);

///// TASK 2
var secondDiv = document.createElement("div");
secondDiv.className = "inner";
secondDiv.innerHTML = "Этот элемент тоже создан при помощи DOM API";
newDiv.appendChild(secondDiv);

secondDiv.style.color = "red";

secondDiv.addEventListener("click", function(e) {
  console.log("Этот текст говорит о том, что я всё сделал правильно");
});

////TASK 5
var anchor = document.createElement("a");
anchor.innerHTML = "Click me";
anchor.setAttribute("href", "www.loftschool.com");
document.body.appendChild(anchor);
anchor.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(`Я кликнул на ссылку ${anchor.getAttribute("href")}`);
});
var hr = document.createElement("hr");
document.body.appendChild(hr);

///// TASK 6
var input = document.createElement("input");
var btn = document.createElement("button");
btn.innerHTML = "button";
document.body.appendChild(input);
document.body.appendChild(btn);
btn.addEventListener("click", function(e) {
  console.log(input.value);
});
