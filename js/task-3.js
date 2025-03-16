const textInput = document.querySelector("#name-input");
const textOtput = document.querySelector("#name-output");
textInput.addEventListener("input", () => {
  const trim = textInput.value.trim();
  if (trim === "") {
    textOtput.textContent = "Anonymous";
  } else {
    textOtput.textContent = trim;
  }
});
textInput.style.padding = "4px";
textInput.style.width = "200px";
