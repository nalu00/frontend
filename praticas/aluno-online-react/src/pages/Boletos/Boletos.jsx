import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Boletos.css";
import "../../components/Layout/Layout.css";

function Boletos() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="main">
        <Header />
        <section className="content">
          <h2>Boletos</h2>
          <table>
            <thead>
              <tr>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10/04/2026</td>
                <td>R$ 500</td>
                <td>Pendente</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

export default Boletos;