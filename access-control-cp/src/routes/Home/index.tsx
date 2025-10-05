export default function Home() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

    return (
        <main>
            <h1 className="text-center font-bold text-3xl mb-5">Home</h1>

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
