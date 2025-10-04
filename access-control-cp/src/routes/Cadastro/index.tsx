import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUser";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:3000/users";

export default function Cadastro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TipoUser>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data: TipoUser) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Produto cadastrado com sucesso!");
    navigate("/produtos");
  });

  return (
    <main>
      <h1>Criar uma conta</h1>
      <div className="mx-auto w-[40%]">
        <form className="cadastrarUser" onSubmit={onSubmit}>
          <fieldset>
            <legend>Informações</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                className="bg-amber-50"
                {...register("nome", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                aria-invalid={!!errors.nome}
                aria-describedby={errors.nome ? "nome-error" : undefined}
              />
              {errors.nome && (
                <div id="nome-error" role="alert">
                  {errors.nome.type === "required" && (
                    <span className="text-red-900">*O nome é obrigatório.</span>
                  )}
                  {errors.nome.type === "minLength" && (
                    <span className="text-red-900">
                      *O nome deve ter no mínimo 2 caracteres.
                    </span>
                  )}
                  {errors.nome.type === "maxLength" && (
                    <span className="text-red-900">
                      *O nome deve ter no máximo 200 caracteres.
                    </span>
                  )}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="nomeUsuario">Nome de usuário:</label>
              <input
                type="text"
                id="nomeUsuario"
                className="bg-amber-50"
                {...register("nomeUsuario", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                })}
                aria-invalid={!!errors.nomeUsuario}
                aria-describedby={
                  errors.nomeUsuario ? "nome-usuario-error" : undefined
                }
              />
              {errors.nomeUsuario && (
                <div id="nome-usuario-error" role="alert">
                  {errors.nomeUsuario.type === "required" && (
                    <span className="text-red-900">*O nome é obrigatório.</span>
                  )}
                  {errors.nomeUsuario.type === "minLength" && (
                    <span className="text-red-900">
                      *O nome deve ter no mínimo 2 caracteres.
                    </span>
                  )}
                  {errors.nomeUsuario.type === "maxLength" && (
                    <span className="text-red-900">
                      *O nome deve ter no máximo 200 caracteres.
                    </span>
                  )}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="bg-amber-50"
                {...register("email", {
                  required: true,
                  maxLength: 200,
                  minLength: 2,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <div id="email-error" role="alert">
                  {errors.email.type === "required" && (
                    <span className="text-red-900">
                      *O email é obrigatório.
                    </span>
                  )}
                  {errors.email.type === "minLength" && (
                    <span className="text-red-900">
                      *O email deve ter no mínimo 2 caracteres.
                    </span>
                  )}
                  {errors.email.type === "maxLength" && (
                    <span className="text-red-900">
                      *O nome deve ter no máximo 200 caracteres.
                    </span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span className="text-red-900">
                      *O email deve seguir um padrão de email válido (Ex:
                      ...@gmail.com).
                    </span>
                  )}
                </div>
              )}
            </div>
            <div>
              <button type="submit">Criar conta</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
