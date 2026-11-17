import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Cuida da rolagem sempre que a URL muda (não desenha nada na tela).
//   URL com #secao ("/pkz#contato")     → rola até a seção com esse id
//   URL sem #secao                       → volta para o topo
// Como roda depois de o React desenhar a página, funciona também quando a
// pessoa abre um link com #secao direto (link compartilhado, F5).
// location.key muda a cada clique, então clicar de novo no mesmo link
// também rola (ex.: rolou para baixo e clicou em "Agendar aula grátis" de novo).
function RolarParaSecao() {
  const { pathname, hash, key } = useLocation();
  const primeiraVez = useRef(true);

  useEffect(() => {
    const ehPrimeiraVez = primeiraVez.current;
    primeiraVez.current = false;

    if (hash) {
      // decodeURIComponent: ids com acento chegam codificados na URL
      const alvo = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (alvo) {
        alvo.scrollIntoView();
        return;
      }
    }

    // Ao abrir/recarregar a página sem #secao, o navegador decide a rolagem
    // (no F5 ele volta para onde a pessoa estava); nas outras vezes, topo.
    if (!ehPrimeiraVez) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

export default RolarParaSecao;
