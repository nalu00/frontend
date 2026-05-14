import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="sidebar">
      <h2>Aluno Online</h2>

      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/faltas">
          Faltas
        </NavLink>

        <NavLink to="/notas">
          Notas
        </NavLink>

        <NavLink to="/boletos">
          Boletos
        </NavLink>

        <NavLink to="/requerimentos">
          Requerimentos
        </NavLink>

        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;