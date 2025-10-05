import { Link } from "react-router-dom";

export default function Error(){
    return(
        <main>
            <h1>Not Found - Erro 404</h1>
            <Link to="/Home"> Voltar para a Página Inicial</Link>
        </main>
    );
}