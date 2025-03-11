function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const createBox = document.querySelector("#boxes");
const divContainer = document.querySelector("#controls");

divContainer.classList.add("div-container");
inputNumber.classList.add("input");
btnCreate.classList.add("btn-create");
btnDestroy.classList.add("btn-destroy");
createBox.classList.add("boxes");
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "10px";
    box.style.display = "inline-block";
    createBox.appendChild(box);
  }
}

btnCreate.addEventListener("click", () => {
  createBoxes();
  const amount = Number(inputNumber.value);
  if (amount >= 0 && amount <= 100) {
    createBoxes(amount);
  }
  inputNumber.value = "";
});
btnDestroy.addEventListener("click", () => {
  createBox.innerHTML = "";
});
