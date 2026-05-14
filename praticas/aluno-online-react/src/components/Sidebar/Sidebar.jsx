import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
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
      </nav>
    </aside>
  )
}

export default Sidebar