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
  );
}

export default Requerimentos;