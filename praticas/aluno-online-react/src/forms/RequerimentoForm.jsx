import "./RequerimentoForm.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function RequerimentoForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    console.log("Requerimento enviado:", {
      ...dados,
      data: new Date().toLocaleDateString("pt-BR"),
    });

    reset();

    navigate("/requerimentos");
  }

  return (
    <div className="form-container">

      <h1 className="form-title">
        Novo Requerimento
      </h1>

      <div className="form-content">

        <form onSubmit={handleSubmit(salvar)}>

          <div className="form-group">

            <label>Tipo de Requerimento</label>

            <select
              {...register("tipo", {
                required: "Tipo é obrigatório",
              })}
            >
              <option value="">
                Selecione um tipo...
              </option>

              <option value="declaracao">
                Declaração Acadêmica
              </option>

              <option value="historico">
                Histórico Escolar
              </option>

            </select>

            {errors.tipo && (
              <p className="erro">
                {errors.tipo.message}
              </p>
            )}

          </div>

          <div className="form-group">

            <label>Descrição</label>

            <textarea
              {...register("descricao", {
                required: "Descrição é obrigatória",

                minLength: {
                  value: 10,
                  message:
                    "Descrição deve ter no mínimo 10 caracteres",
                },
              })}
            />

            {errors.descricao && (
              <p className="erro">
                {errors.descricao.message}
              </p>
            )}

          </div>

          <div className="form-group">

            <label>
              Data do Requerimento
            </label>

            <input
              type="text"
              value={new Date().toLocaleDateString("pt-BR")}
              readOnly
            />

          </div>

          <div className="botoes">

            <button
              type="button"
              className="cancelar"
              onClick={() =>
                navigate("/requerimentos")
              }
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="salvar"
            >
              Salvar
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default RequerimentoForm;