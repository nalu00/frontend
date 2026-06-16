import { createContext, useContext, useState } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => authService.getUsuario());
  const [autenticado, setAutenticado] = useState(
    () => !!authService.getToken()
  );

  async function login(email, senha) {
    const dados = await authService.login(email, senha);

    setAutenticado(true);
    setUsuario(dados.usuario);
  }

  function logout() {
    authService.logout();
    setAutenticado(false);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        autenticado,
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };