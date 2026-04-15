<<<<<<< HEAD
import "./Requerimentos.css";
import Layout from "../../components/Layout/Layout";
import Tabela from "../../components/Tabela/Tabela";

function Requerimentos() {
  const colunas = ["Tipo", "Status"];

  const dados = [
    { tipo: "Declaração", status: "Em análise" },
  ];

  return (
    <Layout titulo="Requerimentos" subtitulo="Solicitações">
      <Tabela titulos={colunas} dados={dados} />
    </Layout>
=======
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Requerimentos.css";
import "../../components/Layout/Layout.css";

function Requerimentos() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="main">
        <Header />
        <section className="content">
          <h2>Requerimentos</h2>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Declaração</td>
                <td>Em análise</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
>>>>>>> develop
  );
}

export default Requerimentos;