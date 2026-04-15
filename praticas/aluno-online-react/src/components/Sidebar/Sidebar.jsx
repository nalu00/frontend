import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Aluno Online</h2>
      <ul>
        <li>Dashboard</li>
        <li>Faltas</li>
        <li>Notas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
      </ul>
    </aside>
  );
}

export default Sidebar;