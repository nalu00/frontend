const API_URL = "http://localhost:3000/usuarios";

export const authService = {
  async login(email, senha) {
    const response = await fetch(`${API_URL}?email=${email}`);
    
    if (!response.ok) {
      throw new Error("Erro ao conectar com o servidor.");
    }

    const usuarios = await response.json();

    if (usuarios.length === 0 || usuarios[0].senha !== senha) {
      throw new Error("E-mail ou senha inválidos.");
    }

    const usuarioValido = usuarios[0];
    const tokenFake = btoa(JSON.stringify({ id: usuarioValido.id, email: usuarioValido.email }));
    const { senha: _, ...usuarioSemSenha } = usuarioValido;

    localStorage.setItem("@AlunoOnline:token", tokenFake);
    localStorage.setItem("@AlunoOnline:user", JSON.stringify(usuarioSemSenha));

    return { usuario: usuarioSemSenha, token: tokenFake };
  },

  logout() {
    localStorage.removeItem("@AlunoOnline:token");
    localStorage.removeItem("@AlunoOnline:user");
  },

  getToken() {
    return localStorage.getItem("@AlunoOnline:token");
  },

  getUsuario() {
    const user = localStorage.getItem("@AlunoOnline:user");
    return user ? JSON.parse(user) : null;
  }
};