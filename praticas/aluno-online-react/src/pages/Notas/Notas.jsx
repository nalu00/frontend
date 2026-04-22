import "./Notas.css";
import Layout from "../../components/Layout/Layout";
import Tabela from "../../components/Tabela/Tabela";

function Notas() {
  const colunas = ["Disciplina", "Nota"];

  const dados = [
    { Disciplina: "Frontend", Nota: 8.5 },
    { Disciplina: "DevOps", Nota: 9.0 },
  ];

  return (
    <Layout titulo="Notas" subtitulo="Histórico">
      <div className="notas-container">
        <div className="notas-card">
          <Tabela titulos={colunas} dados={dados} />
        </div>
      </div>
    </Layout>
  );
}

export default Notas;