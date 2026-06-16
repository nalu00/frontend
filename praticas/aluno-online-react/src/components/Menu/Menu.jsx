import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  const { usuario, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="menu">
      <div className="usuario-info">
        <h3>Aluno Online</h3>

        <p>Olá, {usuario?.nome}</p>
      </div>

      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}

export default Menu;