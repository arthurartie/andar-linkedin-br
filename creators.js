// =====================================================================
//  CREATORS DO ANDAR
//  Cada item desta lista vira um quarto. A ordem da lista = a ordem dos
//  quartos (do fundo para a frente).
//
//  Campos básicos:
//    nome, titulo, linkedin, resumo   -> textos do painel lateral
//    temas      -> assuntos principais
//    frases     -> ideias/bordões dos posts (aparecem no balão de fala)
//    objetos    -> o que tem no quarto. Opções:
//       parede:  janela, quadro, banner, neon, poster, destaques
//       chão:    estante, trofeu, cerebro, planta, violao, halteres,
//                camera, livros, cadeira, tapete
//       mesa:    mesa, computador, notebook, cafe, microfone, contador
//    tema       -> cores: parede, piso, pisoTipo ('madeira'|'placas'),
//                  destaque, escuro, claro, tapete, mesa, livros[]
//    personagem -> pele, cabelo, cabeloTipo ('curto'|'longo'|'cacheado'),
//                  barba, oculos, roupa, calca, sapato
//
//  Campos personalizados (opcionais, usados por alguns objetos):
//    banner     -> linhas do banner do perfil  [{ t, forte }]
//    neon       -> texto do letreiro neon
//    quadro     -> { tipo: 'venn', titulo, itens: [3 itens] }
//    destaques  -> até 3 quadros dos "Destaques" do perfil
//                  { topo, l1, l2, botao, escuro }
//    contador   -> número no display da mesa (ex.: seguidores)
//    tela       -> 'perfil' mostra um perfil do LinkedIn no monitor
// =====================================================================

window.CREATORS = [
  {
    nome: "Arthur Martins",
    titulo: "Founder & CMO @ Artië · Founder-Led Growth para startups B2B",
    linkedin: "",
    resumo: "Ajuda founders de startups B2B a transformar o perfil do LinkedIn no melhor canal de aquisição da empresa. São Paulo · 5.172 seguidores.",
    temas: ["Founder-Led Growth", "marca pessoal", "conteúdo B2B", "perfil que converte"],
    frases: [
      "Não tente ser genial. Seja consistente e útil!",
      "Pessoas compram de pessoas.",
      "Marca pessoal = Autoridade + Pipeline de vendas.",
      "Menos é mais. Deixe o conteúdo respirar.",
      "Design não é só enfeite."
    ],
    objetos: ["janela", "banner", "neon", "quadro", "destaques",
              "estante", "cerebro", "planta", "cadeira", "tapete", "livros",
              "mesa", "computador", "notebook", "cafe", "contador"],
    banner: [
      { t: "Transforme seu perfil no", forte: false },
      { t: "melhor canal de aquisição", forte: true },
      { t: "da sua Startup", forte: false }
    ],
    neon: "FOUNDER-LED GROWTH",
    quadro: { tipo: "venn", titulo: "3 PILARES", itens: ["Tese Tática", "Arquitetura", "Conversão"] },
    destaques: [
      { topo: "Assessoria de Founder-Led Growth", l1: "Escale a sua", l2: "Autoridade!", botao: "Aplicar Agora" },
      { topo: "Para Founders sem tempo", l1: "Sistema de", l2: "Conteúdo!", botao: "Baixar Grátis", escuro: true },
      { topo: "Minha Newsletter no Substack", l1: "Bastidores da", l2: "Estratégia!", botao: "Assinar Grátis" }
    ],
    contador: "5.172",
    tela: "perfil",
    // paleta da identidade visual: Founder's Blue, Growth Blue, Lead's Blue, Design White...
    tema: {
      parede: "#E8EEFF", piso: "#d6b088", pisoTipo: "madeira",
      destaque: "#0F2DBD", escuro: "#0A1D79", claro: "#BACBFF",
      tapete: "#0F2DBD", mesa: "#f4f6fb",
      livros: ["#0A1D79", "#0F2DBD", "#BACBFF", "#000B40", "#E8EEFF", "#5b74e8"]
    },
    personagem: { pele: "#eec4a0", cabelo: "#3a2416", cabeloTipo: "cacheado", barba: true,
                  roupa: "#f5f7ff", calca: "#1f2b5e", sapato: "#f2f2f2" }
  },

  // ---- exemplos FICTÍCIOS, só para o andar não ficar vazio ----
  {
    nome: "Ana Exemplo",
    titulo: "Carreira em tecnologia · Dev Front-end",
    linkedin: "",
    resumo: "Exemplo fictício: fala sobre transição de carreira para tecnologia.",
    temas: ["carreira tech", "front-end", "primeiro emprego"],
    frases: ["Ninguém nasce sabendo programar.", "Portfólio vale mais que certificado."],
    objetos: ["janela", "quadro", "poster", "estante", "planta", "violao", "mesa", "computador", "cafe"],
    tema: { parede: "#dfe9f5", piso: "#b98a5e", destaque: "#7b4bc4", tapete: "#5b3a8c" },
    personagem: { pele: "#c68642", cabelo: "#1f1410", cabeloTipo: "longo", roupa: "#7b4bc4", sapato: "#333" }
  },
  {
    nome: "Bruno Exemplo",
    titulo: "Vendas B2B · Podcast semanal",
    linkedin: "",
    resumo: "Exemplo fictício: bastidores de vendas consultivas e podcast com líderes comerciais.",
    temas: ["vendas", "negociação", "podcast"],
    frases: ["Venda é sobre ouvir, não falar.", "Episódio novo toda segunda!"],
    objetos: ["quadro", "poster", "estante", "trofeu", "camera", "halteres", "cadeira", "mesa", "notebook", "microfone", "cafe"],
    tema: { parede: "#f3e3c9", piso: "#8a6040", pisoTipo: "placas", destaque: "#e0663a", tapete: "#2e7d5b" },
    personagem: { pele: "#f1c27d", cabelo: "#6b3e1f", roupa: "#2e7d5b", oculos: true }
  }
];
