import "./Dashboard.css";
import Card from "../../components/Card/Card";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Olá, Aluno 👋</h1>
        <p>Bem-vindo ao seu portal acadêmico</p>
      </div>

      <div className="dashboard-grid">
        <Card
          titulo="📢 Avisos"
          items={[
            "Prova de Frontend amanhã",
            "Entrega do projeto DevOps dia 20",
            "Semana acadêmica aberta",
          ]}
        />

        <Card
          titulo="📚 Disciplinas"
          items={[
            "Frontend",
            "DevOps",
            "Banco de Dados",
            "Arquitetura de Software",
          ]}
        />

        <Card
          titulo="📈 Desempenho"
          items={[
            "Média Geral: 8.7",
            "Frequência: 96%",
            "2 atividades pendentes",
          ]}
        />

        <Card
          titulo="💰 Financeiro"
          items={[
            "Próximo boleto: R$ 500",
            "Vencimento: 10/06/2026",
            "Nenhuma pendência",
          ]}
        />

        <Card
          titulo="📅 Próximas Aulas"
          items={[
            "Frontend - 19h15 até 22h",
          ]}
        />
      </div>
    </div>
  );
}

export default Dashboard;