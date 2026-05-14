import "./Boletos.css";
import Tabela from "../../components/Tabela/Tabela";

function Boletos() {
  const colunas = ["Vencimento", "Valor", "Status"];

  const dados = [
    { vencimento: "10/06/2026", valor: "R$ 500", status: "Pago" },
    { vencimento: "10/07/2026", valor: "R$ 500", status: "Pendente" },
    { vencimento: "10/08/2026", valor: "R$ 500", status: "Pendente" },
  ];

  return (
    <div className="boletos-page">
      <div className="page-header">
        <h1>Boletos</h1>
        <p>Controle financeiro acadêmico</p>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <h3>Mensalidade</h3>
          <span>R$ 500</span>
        </div>
      </div>

      <div className="table-container">
        <Tabela titulos={colunas} dados={dados} />
      </div>
    </div>
  );
}

export default Boletos;