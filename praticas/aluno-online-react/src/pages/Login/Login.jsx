import { useState } from "react";
import InputEmail from "../../components/Input/InputEmail";
import InputSenha from "../../components/Input/InputSenha";
import logo from "../../assets/learn.svg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let valido = true;

    if (!email) {
      setErroEmail("Email é obrigatório");
      valido = false;
    } else if (!email.includes("@")) {
      setErroEmail("Email inválido");
      valido = false;
    } else {
      setErroEmail("");
    }

    if (!senha) {
      setErroSenha("Senha é obrigatória");
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha("Mínimo de 6 caracteres");
      valido = false;
    } else {
      setErroSenha("");
    }

    if (valido) {
      alert("Login realizado com sucesso!");
    }
  }

  return (
    <>
      <main className="login-container">
        <form onSubmit={handleSubmit}>
          
          <img src={logo} alt="Logo" className="logo" />

          <h2>Aluno Online</h2>

          <InputEmail
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            erro={erroEmail}
          />

          <InputSenha
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            erro={erroSenha}
          />

          <button type="submit">Entrar</button>
        </form>
      </main>

      <p className="footer">
        © 2026. Todos os direitos reservados.
      </p>
    </>
  );
}

export default Login;