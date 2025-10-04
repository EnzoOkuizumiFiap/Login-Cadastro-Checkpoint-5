export default function Cadastro() {
  return (
    <main>
      <h1>Criar uma conta</h1>
      <div className="mx-auto w-[40%]">
        <form className="cadastrarUser">
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
              <label htmlFor="idSenha2">Repita a senha:</label>
              <input type="text" id="idSenha2" className="bg-amber-50" />
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
