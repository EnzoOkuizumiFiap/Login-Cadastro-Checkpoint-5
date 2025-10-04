export default function Login() {
  return (
    <main>
      <h1>Entrar em sua conta</h1>
      <div className="mx-auto w-[40%]">
        <form className="logarUser">
          <fieldset>
            <legend>Informações</legend>
            <div>
              <label htmlFor="idNome">Nome de usuário:</label>
              <input type="text" id="idNome" className="bg-amber-50" />
            </div>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input type="text" id="idEmail" className="bg-amber-50" />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input type="text" id="idSenha" className="bg-amber-50" />
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
