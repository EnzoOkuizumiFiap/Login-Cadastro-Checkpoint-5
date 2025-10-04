import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUser";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS as string;

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

            <div className="mx-auto w-[40%]">
                <form onSubmit={onSubmit} className="frmCadastro">
                    <fieldset>
                        <legend>Se Cadastre no sistema</legend>
                        <div>
                            <label htmlFor="idNome">Nome:</label>
                            <input type="text" id="idNome" className="bg-amber-200" {...register("nome", { required: true ,maxLength: 200})} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} /> {errors.nome && <span role="alert" id="nome-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.nome.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idNomeUsuario">Nome Usuário:</label>
                            <input type="text" id="idNomeUsuario" className="bg-amber-200" {...register("nome", { required: true ,maxLength: 200})} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} /> {errors.nome && <span role="alert" id="nome-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.nome.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" id="idEmail" className="bg-amber-200" {...register("email", { required: true ,maxLength: 200})} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /> {errors.email && <span role="alert" id="email-error" className="text-red-600 bg-red-300 border-[1px] border-red-600 rounded-md p-2">{errors.email.message}</span>}
                        </div>
                        
                        <div>
                        <button type="submit">Entrar</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </main>
    );
}
