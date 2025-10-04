export default function Cadastro() {
  return (
    <main>
      <h1>Criar uma conta</h1>
      <div className="mx-auto w-[40%]">
        <form className="cadastrarUser">
          <fieldset>
            <legend>Informações</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" className="bg-amber-50" />
            </div>
            <div>
              <label htmlFor="nomeUsuario">Nome de usuário:</label>
              <input type="text" id="nomeUsuario" className="bg-amber-50" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="bg-amber-50" />
            </div>
            <div>
              <button type="submit">Criar conta</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
