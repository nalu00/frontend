import "./Requerimentos.css";
import Tabela from "../../components/Tabela/Tabela";

import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  listarRequerimentos,
} from "../../services/requerimentoService";

function Requerimentos() {
  const navigate = useNavigate();

  const [requerimentos, setRequerimentos] =
    useState([]);

  const colunas = [
    "Tipo",
    "Data",
    "Status",
  ];

  useEffect(() => {
    async function carregar() {
      try {
        const dados =
          await listarRequerimentos();

        const formatados =
          dados.map((item) => ({
            Tipo: item.tipo,
            Data: item.data,
            Status: item.status,
          }));

        setRequerimentos(
          formatados
        );
      } catch (erro) {
        console.error(erro);
      }
    }

    carregar();
  }, []);

  return (
    <div className="requerimentos-page">

      <div className="page-header">
        <h1>Requerimentos</h1>

        <p>
          Solicitações acadêmicas
        </p>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <h3>Total</h3>

          <span>
            {requerimentos.length}
          </span>

        </div>
      </div>

      <div className="table-container">
        <Tabela
          titulos={colunas}
          dados={requerimentos}
        />
      </div>

      <div className="novo-requerimento-container">
        <button
          className="novo-requerimento-btn"
          onClick={() =>
            navigate(
              "/requerimentos/novo"
            )
          }
        >
          ➕ Novo Requerimento
        </button>
      </div>

    </div>
  );
}

export default Requerimentos;