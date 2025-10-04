import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { TipoUser } from "../../types/tipoUser";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_USUARIOS;

export default function Login() {

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors} } = useForm<TipoUser>({
        mode:"onChange"
    });

    const onSubmit = handleSubmit(async (data:TipoUser) => {

        {/*Agora falta adicionar a lógica do login... */}

        navigate("/home");
    });


    return(
        <main>
            <h1>Página de Login</h1>

            <div className="mx-auto">
                <form onSubmit={onSubmit} className="frmLogin">
                    <fieldset>
                        <legend>Entrar no sistema</legend>
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

                        <div>
                            <p>Caso não tenha um Usuário, clique em <Link to="/cadastro">Cadastrar-se</Link></p>
                        </div>
                    </fieldset>
                </form>
            </div>

        </main>
    );
}