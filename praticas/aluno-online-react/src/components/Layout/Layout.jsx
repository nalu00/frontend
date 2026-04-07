import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />
      </div>
    </div>
  );
}

export default Layout;