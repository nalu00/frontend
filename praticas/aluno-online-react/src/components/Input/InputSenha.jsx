import "./InputSenha.css";

function InputSenha({ value, onChange, erro }) {
  return (
    <div className="input-group">
      <label>Senha</label>

      <input
        type="password"
        value={value}
        onChange={onChange}
        placeholder="Digite sua senha"
      />

      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}

export default InputSenha;