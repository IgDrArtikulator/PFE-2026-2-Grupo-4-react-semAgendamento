import Cabecalho from "../componentes/Cabecalho";
import LinkAncora from "../componentes/LinkAncora";

// Página 404: aparece em qualquer URL que não existe ("/qualquer-coisa").
// Usa o mesmo header do Hub e leva de volta para o Início.
function NaoEncontrada() {
  return (
    <>
      <title>Página não encontrada | PKZ · One to One</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <Cabecalho marca="hub" />
      <main>
        <section className="pagina" id="inicio">
          <header>
            <p className="eyebrow">Erro 404</p>
            <h1 className="titulo-pagina">Página não encontrada</h1>
            <p className="texto-lead">
              O endereço que você abriu não existe ou mudou de lugar.
            </p>
            <div className="home-botoes">
              <LinkAncora className="btn btn-primario btn-pesado" pagina="/">
                Voltar para o início
              </LinkAncora>
            </div>
          </header>
        </section>
      </main>
    </>
  );
}

export default NaoEncontrada;
