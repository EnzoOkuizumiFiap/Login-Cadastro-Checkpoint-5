import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav className="menu">
            <Link to="/">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
        </nav>
    );
}