import "./Sidebar.css";
import Menu from "../Menu/Menu";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Aluno Online</h1>

      <Menu /> 
    </aside>
  );
}

export default Sidebar;