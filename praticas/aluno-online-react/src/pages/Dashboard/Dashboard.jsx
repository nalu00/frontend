import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Dashboard.css";
import "../../components/Layout/Layout.css";

function Dashboard() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="main">
        <Header />
        <section className="content">
          <h2>Dashboard</h2>
          <section className="cards">
            <article className="card">Faltas: 5</article>
            <article className="card">Média: 8.5</article>
            <article className="card">Boletos: 2</article>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;