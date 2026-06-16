import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Faltas() {
  return (
    <Layout titulo="Minhas Faltas" subtitulo="Hitórico de Faltas por Semestre">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Faltas;
