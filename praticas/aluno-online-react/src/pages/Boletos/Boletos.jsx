import "./Boletos.css";
import Layout from "../../components/Layout/Layout";
import Tabela from "../../components/Tabela/Tabela";

function Boletos() {
  const colunas = ["Vencimento", "Valor"];

  const dados = [
    { vencimento: "01/04", valor: 500 },
    { vencimento: "01/05", valor: 500 },
  ];

  return (
    <Layout titulo="Boletos" subtitulo="Pagamentos">
      <Tabela titulos={colunas} dados={dados} />
    </Layout>
  );
}

export default Boletos;