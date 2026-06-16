import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import InputEmail from "../../components/Input/InputEmail";
import InputSenha from "../../components/Input/InputSenha";
import logo from "../../assets/learn.svg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroGeral, setErroGeral] = useState(""); 

  async function handleSubmit(event) {
    event.preventDefault();
    setErroGeral(""); 

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
      try {
        await login(email, senha);
        navigate("/");
      } catch (error) {
        setErroGeral(error.message);
      }
    }
  }

  return (
    <>
      <main className="login-container">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" className="logo" />
          <h2>Aluno Online</h2>

          {erroGeral && (
            <p className="erro-geral" style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
              {erroGeral}
            </p>
          )}

          <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} erro={erroEmail} />
          <InputSenha value={senha} onChange={(e) => setSenha(e.target.value)} erro={erroSenha} />
          <button type="submit">Entrar</button>
        </form>
      </main>
      <p className="footer">© 2026. Todos os direitos reservados.</p>
    </>
  );
}

export default Login;