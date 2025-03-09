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
