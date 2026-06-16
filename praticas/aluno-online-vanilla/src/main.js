import './style.css';

const form = document.getElementById("loginForm");

if (form) {
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("senhaError");
  const formError = document.getElementById("formError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    limparErros();

    let valido = true;

    if (emailInput.value.trim() === "") {
      emailError.textContent = "O campo de email é obrigatório.";
      emailInput.classList.add("erro-input");
      valido = false;
    }

    if (senhaInput.value.trim() === "") {
      senhaError.textContent = "O campo de senha é obrigatório.";
      senhaInput.classList.add("erro-input");
      valido = false;
    }

    if (valido) {
      window.location.href = "/index.html";
    } else {
      formError.textContent = "Preencha todos os campos corretamente.";
    }
  });

  emailInput.addEventListener("input", () => {
    emailError.textContent = "";
    emailInput.classList.remove("erro-input");
  });

  senhaInput.addEventListener("input", () => {
    senhaError.textContent = "";
    senhaInput.classList.remove("erro-input");
  });

  function limparErros() {
    emailError.textContent = "";
    senhaError.textContent = "";
    formError.textContent = "";

    emailInput.classList.remove("erro-input");
    senhaInput.classList.remove("erro-input");
  }
}