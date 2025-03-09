const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email;
  const password = event.target.elements.password;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert(`All form fields must be filled in`);
  } else {
    const dataForm = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(dataForm);
  }
  form.reset();
}
const classToBtn = document.querySelector(".login-form button");
classToBtn.classList.add("form-btn");
const classLabel = document.querySelectorAll(".login-form label");
classLabel.forEach((addClass) => addClass.classList.add("classLabel"));
