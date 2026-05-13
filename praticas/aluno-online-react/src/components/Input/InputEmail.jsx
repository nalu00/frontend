import "./InputEmail.css";

function InputEmail({ value, onChange, erro }) {
  return (
    <div className="input-group">
      <label>Email</label>

      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Digite seu email"
      />

      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}

export default InputEmail;