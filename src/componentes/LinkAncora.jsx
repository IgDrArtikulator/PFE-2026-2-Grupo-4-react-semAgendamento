import { Link } from "react-router-dom";

// Link interno do site, feito com o <Link> do React Router (sem <a>).
//   pagina → rota de destino ("/", "/pkz", "/one-to-one"); vazio = mesma página
//   secao  → id da seção para rolar até ela ("sobre", "contato"...)
// O <Link> troca a URL sem recarregar a página. Quem rola a tela até a
// seção (ou até o topo) é o <RolarParaSecao /> do App, que observa a URL.
function LinkAncora({ pagina = "", secao, children, ...props }) {
  const destino = secao ? pagina + "#" + secao : pagina || ".";

  return (
    <Link to={destino} {...props}>
      {children}
    </Link>
  );
}

export default LinkAncora;
