const clubeSelecionado =
  localStorage.getItem("clubeSelecionado") || "palmeiras";

const clubes = {
  palmeiras: {
    nome: "Palmeiras",
    nomeCompleto: "Sociedade Esportiva Palmeiras",
    logo: "emblemas/clubes/palmeiras.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 125.430.000",
    estadio: "Allianz Parque",
    destaque: "Gustavo Gómez"
  },

  flamengo: {
    nome: "Flamengo",
    nomeCompleto: "Clube de Regatas do Flamengo",
    logo: "emblemas/clubes/flamengo.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 142.700.000",
    estadio: "Maracanã",
    destaque: "Giorgian De Arrascaeta",
    fotojogador: "jogadoresbra/arrascaeta.png"
  },

  corinthians: {
    nome: "Corinthians",
    nomeCompleto: "Sport Club Corinthians Paulista",
    logo: "emblemas/clubes/corinthians.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 88.200.000",
    estadio: "Neo Química Arena",
    destaque: "Memphis"
  },

  atleticomg: {
    nome: "Atlético-MG",
    nomeCompleto: "Clube Atlético Mineiro",
    logo: "emblemas/clubes/atleticomineiro.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 96.500.000",
    estadio: "Arena MRV",
    destaque: "Everson"
  },

  saopaulo: {
    nome: "São Paulo",
    nomeCompleto: "São Paulo Futebol Clube",
    logo: "emblemas/clubes/saopaulo.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 78.400.000",
    estadio: "Morumbis",
    destaque: "Luciano"
  },

  gremio: {
    nome: "Grêmio",
    nomeCompleto: "Grêmio Football Porto Alegrense",
    logo: "emblemas/clubes/gremio.png",
    estrelas: "★★★⯨☆",
    estadio: "Arena do Grêmio",
    dinheiro: "R$ 18.400.000",
    estadio: "Arena do Grêmio",
    destaque: "Arthur Melo"
 },

    internacional: {
    nome: "Internacional",
    nomeCompleto: "Sport Club Internacional",
    logo: "emblemas/clubes/internacional.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 18.400.000",
    estadio: "Beira Rio",
    destaque: "Rafael Borré"
 },

    fluminense: {
    nome: "Fluminense",
    nomeCompleto: "Fluminense Football Club",
    logo: "emblemas/clubes/fluminense.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 28.400.000",
    estadio: "Maracanã",
    destaque: "Martinelli"
 },

    botafogo: {
    nome: "Botafogo",
    nomeCompleto: "Botafogo de Futebol e Regatas",
    logo: "emblemas/clubes/botafogo.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 78.400.000",
    estadio: "Nilton Santos",
    destaque: "Danilo Santos"
 },

    cruzeiro: {
    nome: "Cruzeiro",
    nomeCompleto: "Cruzeiro Esporte Clube",
    logo: "emblemas/clubes/cruzeiro.png",
    estrelas: "★★★⯨☆",
    dinheiro: "R$ 78.400.000",
    estadio: "Mineirão",
    destaque: "Kaio Jorge"
 },

    athleticopr: {
    nome: "Athletico-PR",
    nomeCompleto: "Club Athletico Paranaense",
    logo: "emblemas/clubes/athleticoparanaense.png",
    estrelas: "★★★☆☆",
    dinheiro: "R$ 78.400.000",
    estadio: "Ligga Arena",
    destaque: "Kevin Viveros"
 },


  santos: {
    nome: "Santos",
    nomeCompleto: "Santos Futebol Clube",
    logo: "emblemas/clubes/santos.png",
    estrelas: "★★★☆☆",
    dinheiro: "R$ 51.000.000",
    estadio: "Vila Belmiro",
    destaque: "Neymar"
  },

  vasco: {
   nome: "Vasco",
   nomeCompleto: "Club de Regatas Vasco da Gama",
   logo: "emblemas/clubes/vasco.png",
   estrelas: "★★★☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "São Januário",
   destaque: "Léo Jardim"
},

   rbbragantino: {
   nome: "RB Bragantino",
   nomeCompleto: "Red Bull Bragantino",
   logo: "emblemas/clubes/rbbragantino.png",
   estrelas: "★★★☆☆",
   dinheiro: "R$ 78.400.000",
    estadio: "Nabi Abi Chedid",
    destaque: "Juninho Capixaba"
},

   mirassol: {
   nome: "Mirassol",
   nomeCompleto: "Mirassol Futebol Clube",
   logo: "emblemas/clubes/mirassol.png",
   estrelas: "★★⯨☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Maião",
   destaque: "Reinaldo"
},  

   chapecoense: {
   nome: "Chapecoense",
   nomeCompleto: "Associação Chapecoense de Futebol",
   logo: "emblemas/clubes/chapecoense.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Arena Condá",
   destaque: "Carvalheira"
},  

   coritiba: {
   nome: "Coritiba",
   nomeCompleto: "Coritiba Football Club",
   logo: "emblemas/clubes/coritiba.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Couto Pereira",
   destaque: "Pedro Morisco"
},  

   bahia: {
   nome: "Bahia",
   nomeCompleto: "Esporte Clube Bahia",
   logo: "emblemas/clubes/bahia.png",
   estrelas: "★★★⯨☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Arena Fonte Nova",
   destaque: "Everton Ribeiro"
},  

   vitoria: {
   nome: "Vitória",
   nomeCompleto: "Esporte Clube Vitória",
   logo: "emblemas/clubes/vitoria.png",
   estrelas: "★★⯨☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Barradão",
   destaque: "Luan Cândido"
},  

   remo: {
   nome: "Remo",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/remo.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  americamg: {
   nome: "América-MG",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/americamineiro.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  crb: {
   nome: "CRB",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/crb.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  fortaleza: {
   nome: "Fortaleza",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/fortaleza.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

   sport: {
   nome: "Sport Recife",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/sport.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  
  
  nautico: {
   nome: "Náutico",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/nautico.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  criciuma: {
   nome: "Criciúma",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/criciuma.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  operario: {
   nome: "Operário",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/operario.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  vilanova: {
   nome: "Vila Nova",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/vila nova.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  saobernardo: {
   nome: "São Bernardo",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/saobernardo.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  gremionovorizontino: {
   nome: "Grêmio Novorizontino",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/gremionovorizontino.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  goias: {
   nome: "Goiás",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/goias.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  juventude: {
   nome: "Juventude",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/juventude.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
},  

  atleticogo: {
   nome: "Atlético-GO",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/atleticogoianiense.png",
   estrelas: "★★☆☆☆",
   dinheiro: "R$ 78.400.000",
   estadio: "Baenão",
   destaque: "Patrick de Paula"
  },
};

function embaralharLista(lista) {
  const novaLista = [...lista];

  for (let i = novaLista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [novaLista[i], novaLista[j]] =
      [novaLista[j], novaLista[i]];
  }

  return novaLista;
}

function gerarCalendarioLiga(clubesDaLiga) {
  let times = embaralharLista(clubesDaLiga);

  if (times.length % 2 !== 0) {
    times.push("folga");
  }

  const totalTimes = times.length;
  const rodadasIda = totalTimes - 1;
  const jogosPorRodada = totalTimes / 2;

  let calendario = [];

  for (let rodada = 0; rodada < rodadasIda; rodada++) {
    let jogos = [];

    for (let i = 0; i < jogosPorRodada; i++) {
      let mandante = times[i];
      let visitante = times[totalTimes - 1 - i];

      if (mandante !== "folga" && visitante !== "folga") {
        if (rodada % 2 === 0) {
          jogos.push({
            rodada: rodada + 1,
            mandante,
            visitante
          });
        } else {
          jogos.push({
            rodada: rodada + 1,
            mandante: visitante,
            visitante: mandante
          });
        }
      }
    }

    calendario.push(jogos);

    const fixo = times[0];
    const restante = times.slice(1);
    restante.unshift(restante.pop());
    times = [fixo, ...restante];
  }

  const returno = calendario.map((rodada, index) => {
    return rodada.map(jogo => ({
      rodada: index + 20,
      mandante: jogo.visitante,
      visitante: jogo.mandante
    }));
  });

  return [...calendario, ...returno];
}

const clubesbrasileiraoseriea = [
  "flamengo",
  "vasco",
  "fluminense",
  "botafogo",
  "saopaulo",
  "palmeiras",
  "corinthians",
  "santos",
  "mirassol",
  "rbbragantino",
  "internacional",
  "gremio",
  "athleticopr",
  "coritiba",
  "chapecoense",
  "atleticomg",
  "cruzeiro",
  "remo",
  "bahia",
  "vitoria"
];

const clubesbrasileiraoserieb = [
  "americamg",
  "crb",
  "fortaleza",
  "sport",
  "nautico",
  "criciuma",
  "operario",
  "vilanova",
  "saobernardo",
  "gremionovorizontino",
  "goias",
  "juventude",
  "atleticogo"
];

const calendariobrasileiraoseriea =
  gerarCalendarioLiga(clubesbrasileiraoseriea);

const calendariobrasileiraoserieb =
  gerarCalendarioLiga(clubesbrasileiraoserieb);

localStorage.setItem(
  "calendariobrasileiraoseriea",
  JSON.stringify(calendariobrasileiraoseriea)
);

localStorage.setItem(
  "calendariobrasileiraoserieb",
  JSON.stringify(calendariobrasileiraoserieb)
);

const clube =
  clubes[clubeSelecionado] || clubes.palmeiras;

const calendario =
  JSON.parse(
    localStorage.getItem(
      clubesbrasileiraoserieb.includes(clubeSelecionado)
        ? "calendariobrasileiraoserieb"
        : "calendariobrasileiraoseriea"
    )
  );

function buscarJogosDoClube() {

  return calendario.flat().filter(jogo =>

    jogo.mandante === clubeSelecionado ||
    jogo.visitante === clubeSelecionado

  );

}

const jogosDoClube =
  buscarJogosDoClube();

const proximoJogo =
  jogosDoClube[0];

function preencherTela() {
  document.getElementById("topClubLogo").src = clube.logo;
  document.getElementById("topClubName").textContent = clube.nome;
  document.getElementById("topMoney").textContent = clube.dinheiro;
  document.getElementById("topStars").textContent = clube.estrelas;

  document.getElementById("clubPanelLogo").src = clube.logo;
  document.getElementById("clubPanelName").textContent = clube.nome;
  document.getElementById("clubPanelFullName").textContent = clube.nomeCompleto;
  document.getElementById("clubStars").textContent = clube.estrelas;

  const mandante =
  clubes[proximoJogo.mandante];

  document.getElementById("nextMatchHomeLogo").src =
  mandante.logo;

  document.getElementById("nextMatchHome").textContent =
  mandante.nome;
  document.getElementById("matchStadium").textContent = "🏟 " + clube.estadio;

  document.getElementById("tableClubName").textContent = clube.nome;
  document.getElementById("financeMoney").textContent = clube.dinheiro;
  document.getElementById("starPlayer").textContent = clube.destaque;
  document.getElementById("starPlayerImage").src = clube.fotoJogador;
  document.getElementById("clubNews").textContent =
    clube.nome + " renova contrato de promessa da base";
}

function preencherTela() {
  document.getElementById("topClubLogo").src = clube.logo;
  document.getElementById("topClubName").textContent = clube.nome;
  document.getElementById("topMoney").textContent = clube.dinheiro;
  document.getElementById("topStars").textContent = clube.estrelas;

  document.getElementById("clubPanelLogo").src = clube.logo;
  document.getElementById("clubPanelName").textContent = clube.nome;
  document.getElementById("clubPanelFullName").textContent = clube.nomeCompleto;
  document.getElementById("clubStars").textContent = clube.estrelas;

  if (proximoJogo) {
    const mandante = clubes[proximoJogo.mandante];
    const visitante = clubes[proximoJogo.visitante];

    if (mandante && visitante) {
      document.getElementById("nextMatchHomeLogo").src = mandante.logo;
      document.getElementById("nextMatchHome").textContent = mandante.nome;

      document.getElementById("nextMatchAwayLogo").src = visitante.logo;
      document.getElementById("nextMatchAway").textContent = visitante.nome;

      document.getElementById("matchStadium").textContent =
        "🏟 " + mandante.estadio;
    }
  }

  document.getElementById("tableClubName").textContent = clube.nome;
  document.getElementById("financeMoney").textContent = clube.dinheiro;
  document.getElementById("starPlayer").textContent = clube.destaque;

  document.getElementById("clubNews").textContent =
    clube.nome + " renova contrato de promessa da base";
}

preencherTela();
