import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => authService.getUsuario());
  const [autenticado, setAutenticado] = useState(() => !!authService.getToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = authService.getToken();
    const user = authService.getUsuario();

    if (token && user) {
      setAutenticado(true);
      setUsuario(user);
    } else {
      authService.logout();
      setAutenticado(false);
      setUsuario(null);
    }
    setLoading(false);
  }, []);

  async function login(email, senha) {
    try {
      const dados = await authService.login(email, senha);
      setAutenticado(true);
      setUsuario(dados.usuario);
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    authService.logout();
    setAutenticado(false);
    setUsuario(null);
  }

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>Carregando sessão...</div>;
  }

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };