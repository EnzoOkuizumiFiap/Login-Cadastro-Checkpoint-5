import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav className="menu">
            <Link to="/cadastro">Cadastrar</Link>
            <Link to="/">Entrar</Link>
        </nav>
    );
}