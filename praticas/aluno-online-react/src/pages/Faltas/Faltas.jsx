import "./Faltas.css";
import Tabela from "../../components/Tabela/Tabela";

function Faltas() {
  const colunas = ["Disciplina", "Faltas", "Limite"];

  const dados = [
    { Disciplina: "Frontend", Faltas: 2, Limite: 15 },
    { Disciplina: "DevOps", Faltas: 1, Limite: 15 },
    { Disciplina: "Banco de Dados", Faltas: 4, Limite: 15 },
    { Disciplina: "Arquitetura", Faltas: 3, Limite: 15 },
  ];

  return (
    <div className="faltas-page">
      <div className="page-header">
        <h1>Faltas</h1>
      </div>

      <div className="table-container">
        <Tabela titulos={colunas} dados={dados} />
      </div>
    </div>
  );
}

export default Faltas;