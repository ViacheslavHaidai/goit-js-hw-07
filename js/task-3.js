const textInput = document.querySelector("#name-input");
const textOtput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const trim = textInput.value.trim();
  if (trim !== "") {
    textOtput.textContent = event.currentTarget.value;
  }
});
textInput.style.padding = "4px";
textInput.style.width = "200px";
