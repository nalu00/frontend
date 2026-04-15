import "./Faltas.css";
import Layout from "../../components/Layout/Layout";
import Tabela from "../../components/Tabela/Tabela";

function Faltas() {
  const colunas = ["Disciplina", "Faltas"];

  const dados = [
    { Disciplina: "Frontend", Faltas: 2 },
    { Disciplina: "DevOps", Faltas: 1 },
  ];

  return (
    <Layout titulo="Faltas" subtitulo="Histórico">
      <div className="faltas-container">
        <div className="faltas-card">
          <Tabela titulos={colunas} dados={dados} />
        </div>
      </div>
    </Layout>
  );
}

export default Faltas;