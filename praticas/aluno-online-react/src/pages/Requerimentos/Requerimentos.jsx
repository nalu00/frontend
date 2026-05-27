import "./Requerimentos.css";
import Tabela from "../../components/Tabela/Tabela";
import { useNavigate } from "react-router-dom";

function Requerimentos() {

  const navigate = useNavigate();

  const colunas = [
    "Tipo",
    "Data",
    "Status",
  ];

  const dados = [
    {
      Tipo: "Declaração Acadêmica",
      Data: "01/06/2026",
      Status: "Em análise",
    },
    {
      Tipo: "Histórico Escolar",
      Data: "20/05/2026",
      Status: "Concluído",
    },
  ];

  return (
    <div className="requerimentos-page">

      <div className="page-header">
        <h1>Requerimentos</h1>

        <p>
          Solicitações acadêmicas
        </p>

        <button
          onClick={() =>
            navigate(
              "/requerimentos/novo"
            )
          }
        >
          ➕ Novo Requerimento
        </button>

      </div>

      <div className="info-cards">
        <div className="info-card">
          <h3>Total</h3>
          <span>2</span>
        </div>
      </div>

      <div className="table-container">
        <Tabela
          titulos={colunas}
          dados={dados}
        />
      </div>

    </div>
  );
}

export default Requerimentos;