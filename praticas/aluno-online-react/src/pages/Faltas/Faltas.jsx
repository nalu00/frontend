import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Faltas.css";
import "../../components/Layout/Layout.css";

function Faltas() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="main">
        <Header />
        <section className="content">
          <h2>Faltas</h2>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Faltas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Backend</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

export default Faltas;