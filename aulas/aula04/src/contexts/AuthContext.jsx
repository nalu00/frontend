import { createContext, useState } from "react";

// Criar o contexto
const  AuthContext = createContext();

// Criar provedor
function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({});

    const login = (dados) => {
        // chamar a API passando dados
        setUsuario({ id: 0, nome: "Ana Luísa", email: "a.oliveira4@iesb.edu.br" });
        setLogado(true);
    }

    const logout = () => {
        setUsuario({});
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {/* value = estado compartilado */}
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }