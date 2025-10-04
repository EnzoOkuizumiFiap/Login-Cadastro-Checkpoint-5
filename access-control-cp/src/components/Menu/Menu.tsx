import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav className="menu">
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/">Entrar</Link>
        </nav>
    );
}