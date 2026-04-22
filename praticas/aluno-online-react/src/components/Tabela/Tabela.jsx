import "./Tabela.css";

function Tabela({ titulos = [], dados = [] }) {
  return (
    <table className="tabela">
      <thead>
        <tr>
          {titulos.map((titulo, index) => (
            <th key={index}>{titulo}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((valor, i) => (
              <td key={i}>{valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;