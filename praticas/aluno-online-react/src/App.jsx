import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';

function App() {
  const pagina = 3; 

  return (
    <>
      {pagina === 1 && <Dashboard />}
      {pagina === 2 && <Notas />}
      {pagina === 3 && <Faltas />}
      {pagina === 4 && <Boletos />}
      {pagina === 5 && <Requerimentos />}
    </>
  );
}

export default App;