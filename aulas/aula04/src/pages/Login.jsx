import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();

  return(
    <>
      <hi>Login</hi>
      <button onClick={() => navigate("/")}>Entrar</button>
    </>
  );
}

export default Login;
