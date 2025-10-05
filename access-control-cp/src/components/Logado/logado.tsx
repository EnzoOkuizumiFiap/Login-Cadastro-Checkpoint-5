export default function Logado() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

    return (
        <div className="logado">
            {usuarioLogado ? (
                <p>Bem-vindo, {usuarioLogado.nomeUsuario} com email: {usuarioLogado.email}</p>
            ) : (
                <p>Você não está logado.</p>
            )}
        </div>
    );
}