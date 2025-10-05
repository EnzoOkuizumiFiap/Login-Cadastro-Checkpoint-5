export default function Home(){

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

    return(
        <main>
            <h1>Home</h1>
            {/* Aqui vamos exibir o nome do Usuário e email */}

            <p>Bem-vindo, {usuarioLogado.nomeUsuario} com email: {usuarioLogado.email}</p>
        </main>
    );
}