export default function Home() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

    return (
        <main>
            <h1>Home</h1>

            <div className="logado">
                {usuarioLogado ? (
                    <p>Bem-vindo, {usuarioLogado.nomeUsuario} com email: {usuarioLogado.email}</p>
                ) : (
                    <p>Você não está logado.</p>
                )}
            </div>
        </main>
    );
}
