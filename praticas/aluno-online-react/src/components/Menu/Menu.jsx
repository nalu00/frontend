import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
        <li className="menu-sair">Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;