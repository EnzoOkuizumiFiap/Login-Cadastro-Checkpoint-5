export default function Login() {
  return (
    <main>
      <h1>Entrar em sua conta</h1>
      <div className="mx-auto w-[40%]">
        <form className="logarUser">
          <fieldset>
            <legend>Informações</legend>
            <div>
              <label htmlFor="nomeUsuario">Nome de usuário:</label>
              <input type="text" id="nomeUsuario" className="bg-amber-50" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="bg-amber-50" />
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
