# Conteúdo fictício dos sites: PKZ · One to One

**Sites analisados**
- Versão sem agendamento: https://pfe-2026-2-grupo-4-react-sem-agenda-plum.vercel.app/
- Versão com agendamento: https://pfe-2026-2-grupo-4-react-qyqb.vercel.app/

**Fonte:** código dos repositórios `PFE-2026-2-Grupo-4-react-semAgendamento` e `PFE-2026-2-Grupo-4-react` (os sites são SPAs em React e só renderizam com JavaScript).

> As duas versões usam **os mesmos** contatos, redes sociais e planos. A única diferença está no fluxo de agendamento (seção 6).

---

## 1. Redes sociais e canais de contato

### Instagram (placeholder)
| Marca | Handle exibido | Link | Onde aparece |
|---|---|---|---|
| Play Makerz (PKZ) | `@playmakerz` | `https://www.instagram.com/playmakerz/` | Contato (`Contato.jsx`), rodapé da PKZ (`Rodape.jsx`), rodapé do Hub (`HubRodape.jsx`), contato da Fisioterapia (coluna "Jovens") |
| One to One Studio | `@onetoonestudio` | `https://www.instagram.com/onetoonestudio/` | Contato, rodapé da One to One, rodapé do Hub, contato da Fisioterapia (coluna "Adultos") |

### E-mail (placeholder)
| Marca | Valor | Onde aparece |
|---|---|---|
| Play Makerz | `contato@playmakerz.com` (`mailto:`) | Contato da PKZ, rodapé da PKZ, contato da Fisioterapia |
| One to One | Falso / a definir | O código atual dos dois repositórios não exibe nenhum e-mail da One to One. Qualquer e-mail usado para ela é placeholder até o cliente passar o real |

### WhatsApp
| Marca | Número exibido | Link real do botão | Situação |
|---|---|---|---|
| One to One | (21) 97106-7347 | `https://wa.me/5521971067347` | Número real, link correto |
| Play Makerz | (21) 97265-7266 | `https://wa.me/` **sem número** | ⚠️ O texto mostra um número, mas o link não leva a ele: abre o WhatsApp sem contato. Precisa ser corrigido para `https://wa.me/5521972657266` (se esse número for o real) |

### Outras redes
O site **não tem** Facebook, TikTok, YouTube, LinkedIn nem X/Twitter. As únicas redes são Instagram e WhatsApp (mais o e-mail da PKZ).

---

## 2. Planos (fictícios)

Ficam em `src/dados/planos.js` e aparecem na seção **"Nossos planos"** (`NossosPlanos.jsx` + `CardPlano.jsx`). Nenhum plano mostra preço: todos os botões levam ao Contato (ou ao Agendamento).

### Play Makerz
| Plano | Chamada | Itens |
|---|---|---|
| **Plano Performance** (em destaque) | Para quem busca evolução acelerada | 2 treinos por semana · Nutrição e psicologia com acompanhamento contínuo · Fisioterapia com foco em recovery e prevenção · Avaliação completa |
| **Plano Desenvolvimento** | Para construir uma base sólida | 1 treino por semana · Nutrição e psicologia com acompanhamento contínuo · Fisioterapia com foco em recovery e prevenção · Avaliação completa |
| **Flexibilidade** | Um plano que se adapta ao atleta | Serviços contratados de forma individual (botão "Montar meu plano") |

### One to One
| Plano | Chamada | Itens |
|---|---|---|
| **Plano Express** | Para quem tem pouco tempo, mas não abre mão de se cuidar | Treinos de 30 min até 5x/semana · Fisio: avaliação inclusa · Nutri: avaliação inclusa |
| **Plano One Move** | Constância é chave! | Treinos de 60 min 3x/semana · Fisio: avaliação inclusa · Nutri: avaliação inclusa |
| **Plano One Power** | O ideal para quem busca evolução mais próxima | Treinos de 60 min 6x/semana · Fisio: avaliação inclusa · Nutri: avaliação mensal e planejamento alimentar personalizado |
| **Plano Be The One** (em destaque) | O mais completo do Studio | Treinos de 60 min, até 2 por dia · Fisio: 2 sessões semanais · Nutri: avaliação mensal e planejamento personalizado · Selo "Prioridade no agendamento" |

### Cards de planos da PKZ (seção "Venha experimentar")
Também em `Planos.jsx`, com textos genéricos de exemplo:
- "Fale com a equipe para receber o orçamento"
- "Venha fazer uma aula experimental gratuita" (destaque)
- "Escolha um pacote customizado para suas necessidades"

---

## 3. Imagens (fictícias)

Todas as fotos dos sites são fictícias e precisam ser trocadas por fotos reais do cliente. Os logos (`logo-playmakerz.png` e `logo-one-to-one.png`) não entram nesta lista.

### Hub (página inicial `/`)
| Arquivo | Onde aparece | Descrição (alt) |
|---|---|---|
| `hub/hub-hero.webp` | Slider do hero | Atleta jovem e atleta adulto treinando lado a lado |
| `hub/hub-pkz.webp` | Slider do hero + card "Playmakerz" | Jovens atletas da Playmakerz em treino de agilidade |
| `hub/hub-oto.webp` | Slider do hero + card "One to One" | Aluna do One to One treinando com kettlebell |
| `hub/hub-fisio.webp` | Card "Fisioterapia" | Fisioterapeuta tratando o joelho de um atleta na maca |
| `hub/hub-video-principal.webp` | Slider do hero + foto grande de "Em fotos" | Um dia de treino no centro de treinamento |
| `hub/hub-video-pkz.webp` | "Em fotos": Preparação de atletas | Jovens atletas alongando antes do treino |
| `hub/hub-video-oto.webp` | "Em fotos": Treino individual | Aluna fazendo afundo com kettlebells |
| `hub/hub-video-bastidores.webp` | "Em fotos": Bastidores | Treinadores montando os equipamentos antes da aula |

### Play Makerz (`/pkz`)
| Arquivo | Onde aparece | Descrição (alt) |
|---|---|---|
| `pkz/pkz-hero.webp` | Hero | Jovem atleta correndo na escada de agilidade |
| `pkz/pkz-equipe.webp` | Sobre nós | Equipe de treinadores no espaço de treino |
| `pkz/pkz-galeria-1.webp` | Galeria | Atleta saltando no box durante o treino |
| `pkz/pkz-galeria-2.webp` | Galeria | Cones e escada de agilidade prontos para o treino |
| `pkz/pkz-galeria-video.webp` | Galeria | Jovem atleta driblando a bola de basquete |
| `pkz/pkz-galeria-4.webp` | Galeria | Escada de agilidade e barreiras no piso de treino |

### One to One (`/one-to-one`)
| Arquivo | Onde aparece | Descrição (alt) |
|---|---|---|
| `oto/oto-hero.webp` | Hero | Aluno fazendo agachamento com barra |
| `oto/oto-equipe.webp` | Sobre nós | Equipe de personal trainers no estúdio |
| `oto/oto-galeria-1.webp` | Galeria | Aluna segurando um kettlebell durante o treino |
| `oto/oto-galeria-2.webp` | Galeria | Personal trainer anotando a evolução do aluno |
| `oto/oto-galeria-video.webp` | Galeria | Aluno treinando com cordas navais |
| `oto/oto-galeria-4.webp` | Galeria | Personal trainer acompanhando o treino pelo celular |

### Fisioterapia (`/fisioterapia`)
| Arquivo | Onde aparece | Descrição (alt) |
|---|---|---|
| `fisio/fisio-hero.webp` | Hero | Fisioterapeuta tratando o joelho de um atleta na maca |
| `fisio/fisio-equipe.webp` | Sobre nós | Equipe de fisioterapeutas na área de reabilitação |

Todos os arquivos ficam em `src/assets/`. O mesmo conjunto de imagens é usado nas duas versões do site.

---

## 4. Outros pontos que provavelmente são placeholder

| Item | Onde | Observação |
|---|---|---|
| Horário de atendimento "Segunda a sábado, por horário marcado" | Contato da One to One | Confirmar com o cliente |
| "Respondemos em horário comercial" | Contato das três marcas | Texto genérico |
| Nome "Unidade 1" | Unidades da PKZ | A One to One usa "Unidade 1 - Armando Lombardi". O endereço (Av. Armando Lombardi, 949, Loja G) é real, de acordo com o Documento de Visão |
| Unidades Vogue Square e Oasis | Ausentes | O Documento de Visão prevê as duas para a próxima fase |
| Logo da Fisioterapia | Hub (`HubEscolha.jsx`) | Não existe ainda: o card mostra o nome escrito |
| Copyright "© 2026 PKZ · One to One Studio" | Rodapés | Sem CNPJ ou razão social |

---

## 5. Dados que são reais (não mexer)
- WhatsApp da One to One: (21) 97106-7347
- Endereço: Av. Armando Lombardi, 949, Loja G, Barra da Tijuca, Rio de Janeiro, RJ, CEP 22640-020 (e o mapa do Google embutido)

---

## 6. Diferença entre as duas versões

| | Sem agendamento | Com agendamento |
|---|---|---|
| Botões "Agendar" | Levam ao Contato / WhatsApp ("Agendar pelo WhatsApp") | Levam à seção `#agendamento` do site |
| Passo 1 na One to One | "Fale com a equipe: combine pelo WhatsApp ou Instagram…" | "Agende pelo site" |
| Agenda | Não existe | **Fictícia:** horários fixos (07:00–12:00 e 15:00–20:00) em `utils/agenda.js`, reservas salvas só no `localStorage` do navegador, sem envio para a equipe |
| Exemplo de telefone no formulário | — | `(21) 99999-9999` (placeholder do campo) |

---

## Checklist para substituir
- [ ] Instagram real da Play Makerz
- [ ] Instagram real da One to One
- [ ] E-mail real da Play Makerz
- [ ] E-mail real da One to One
- [ ] Corrigir o link `wa.me/` da PKZ com o número
- [ ] Planos reais da PKZ (nomes e itens)
- [ ] Planos reais da One to One (nomes e itens)
- [ ] Horário de atendimento real
- [ ] Trocar as 22 fotos fictícias por fotos reais do cliente
- [ ] Logo da Fisioterapia
- [ ] (Versão com agendamento) integração real da agenda
