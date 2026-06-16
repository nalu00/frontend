import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Boletos() {
    const colunas = [
        "Vencimento",
        "Valor",
        "Situação"
    ];

    const boletos = [
        {Vencimento: "01/04/2026", valor:500, situação: "Pago"},
        {Vencimento: "01/05/2026", valor:500, situação: "A vencer"},
        {Vencimento: "01/06/2026", valor:500, situação: "A vencer"},
        {Vencimento: "01/07/2026", valor:500, situação: "A vencer"},
        {Vencimento: "01/08/2026", valor:500, situação: "A vencer"},
    ];

  return (
    <Layout titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
      <Tabela titulos={colunas} dados={boletos}/>
    </Layout>
  );
}

export default Boletos;
