import "./Notas.css";
import Tabela from "../../components/Tabela/Tabela";

function Notas() {
  const colunas = ["Disciplina", "Nota", "Status"];

  const dados = [
    { Disciplina: "Frontend", Nota: 8.5, Status: "Aprovado" },
    { Disciplina: "DevOps", Nota: 9.0, Status: "Aprovado" },
    { Disciplina: "Banco de Dados", Nota: 7.2, Status: "Aprovado" },
    { Disciplina: "Arquitetura", Nota: 6.5, Status: "Recuperação" },
  ];

  return (
    <div className="notas-page">
      <div className="page-header">
        <h1>Notas</h1>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <h3>Média Geral</h3>
          <span>8.7</span>
        </div>

      </div>

      <div className="table-container">
        <Tabela titulos={colunas} dados={dados} />
      </div>
    </div>
  );
}

export default Notas;