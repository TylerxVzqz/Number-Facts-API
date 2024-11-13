$("#submitButton").on("click", function (event) {
  event.preventDefault();
  let num = $("#number").val();
  let title = $("h1").text();
  console.log(num);
  console.log(title);
});

const form = document.querySelector("form");
const factDiv = document.querySelector(".number-fact");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = e.target.querySelector('input[type="number"]').value;
  const loadText = "Generating fact...";
  factDiv.innerHTML = loadText;
  const baseURL = "http://numbersapi.com/";
  fetch(baseURL + number)
    .then((response) => response.text())
    .then((text) => (factDiv.innerHTML = text));
});
