import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Notas() {
    return (
    <Layout titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
        <Tabela />
        <Tabela />
        <Tabela />
    </ Layout>
    );
}

export default Notas;