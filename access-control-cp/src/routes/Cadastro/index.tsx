import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUser";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Cadastro() {

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors} } = useForm<TipoUser>({
        mode:"onChange"
    });

    const onSubmit = handleSubmit(async (data:TipoUser) => {

        await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });

        navigate("/login");
    });


    return(
        <main>
            <h1>Página de Cadastro</h1>

            <div className="mx-auto">
                <form onSubmit={onSubmit} className="frmCadastro">
                    <fieldset>
                        <legend>Cadastro no sistema</legend>
                        <div>
                            <label htmlFor="idNome">Nome:</label>
                            <input type="text" id="idNome" className="bg-amber-200" {...register("nome", { required: "O nome é obrigatório",  minLength: { value: 3, message: "O nome deve ter no mínimo 3 caracteres" } })} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} /> {errors.nome && <span role="alert" id="nome-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.nome.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idNomeUsuario">Nome Usuário:</label>
                            <input type="text" id="idNomeUsuario" className="bg-amber-200" {...register("nomeUsuario", { required: "O nome de usuário é obrigatório", minLength: { value: 3, message: "O nome de usuário deve ter no mínimo 3 caracteres" } })} aria-invalid={!!errors.nomeUsuario} aria-describedby={errors.nomeUsuario ? "nomeUsuario-error" : undefined} /> {errors.nomeUsuario && <span role="alert" id="nomeUsuario-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.nomeUsuario.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" id="idEmail" className="bg-amber-200" {...register("email", { required: "O email é obrigatório", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Formato de email inválido" } })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /> {errors.email && <span role="alert" id="email-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.email.message}</span>}
                        </div>
                        
                        <div>
                        <button type="submit">Cadastrar</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </main>
    );
}
