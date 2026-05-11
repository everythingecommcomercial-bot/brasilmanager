const clubeSelecionado =
  localStorage.getItem("clubeSelecionado") || "palmeiras";

const clubes = {
  palmeiras: {
    nome: "Palmeiras",
    nomeCompleto: "Sociedade Esportiva Palmeiras",
    logo: "emblemas/clubes/palmeiras.png",
    estrelas: "★★★★★",
    dinheiro: "R$ 125.430.000",
    estadio: "Allianz Parque",
    destaque: "Endrick"
  },

  flamengo: {
    nome: "Flamengo",
    nomeCompleto: "Clube de Regatas do Flamengo",
    logo: "emblemas/clubes/flamengo.png",
    estrelas: "★★★★★",
    dinheiro: "R$ 142.700.000",
    estadio: "Maracanã",
    destaque: "Pedro"
  },

  corinthians: {
    nome: "Corinthians",
    nomeCompleto: "Sport Club Corinthians Paulista",
    logo: "emblemas/clubes/corinthians.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 88.200.000",
    estadio: "Neo Química Arena",
    destaque: "Memphis"
  },

  "atleticomg": {
    nome: "Atlético-MG",
    nomeCompleto: "Clube Atlético Mineiro",
    logo: "emblemas/clubes/atleticomineiro.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 96.500.000",
    estadio: "MRV Arena",
    destaque: "Hulk"
  },

  "saopaulo": {
    nome: "São Paulo",
    nomeCompleto: "São Paulo Futebol Clube",
    logo: "emblemas/clubes/saopaulo.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 78.400.000",
    estadio: "Morumbis",
    destaque: "Lucas Moura"
  },

  gremio: {
    nome: "Grêmio",
    nomeCompleto: "Grêmio Football Porto Alegrense",
    logo: "emblemas/clubes/gremio.png",
    estrelas: "★★★⯨☆",
    estadio: "Arena do Grêmio",
    capacidade: "60.540",
    fundacao: "15/09/1903",
    financas: "Médio",
    reputacao: "Continental",
    conquistas: ["1996", "1981"]
 },

    internacional: {
    nome: "Internacional",
    nomeCompleto: "Sport Club Internacional",
    logo: "emblemas/clubes/internacional.png",
    estrelas: "★★★⯨☆",
    estadio: "Beira Rio",
    capacidade: "50.842",
    fundacao: "04/04/1909",
    financas: "Fraco",
    reputacao: "Continental",
    conquistas: ["1979", "1976", "1975"]
 },

    fluminense: {
    nome: "Fluminense",
    nomeCompleto: "Fluminense Football Club",
    logo: "emblemas/clubes/fluminense.png",
    estrelas: "★★★⯨☆",
    estadio: "Maracanã",
    capacidade: "78.838",
    fundacao: "21/07/1902",
    financas: "Médio",
    reputacao: "Continental",
    conquistas: ["2012", "2010", "1984", "1970"]
 },

    botafogo: {
    nome: "Botafogo",
    nomeCompleto: "Botafogo de Futebol e Regatas",
    logo: "emblemas/clubes/botafogo.png",
    estrelas: "★★★⯨☆",
    estadio: "Nilton Santos",
    capacidade: "44.661",
    fundacao: "08/12/1942",
    financas: "Fraco",
    reputacao: "Continental",
    conquistas: ["2024", "1995", "1968"]
 },

    cruzeiro: {
    nome: "Cruzeiro",
    nomeCompleto: "Cruzeiro Esporte Clube",
    logo: "emblemas/clubes/cruzeiro.png",
    estrelas: "★★★⯨☆",
    estadio: "Mineirão",
    capacidade: "62.170",
    fundacao: "02/01/1921",
    financas: "Forte",
    reputacao: "Continental",
    conquistas: ["2014", "2013", "2003", "1966"]
 },

    athleticopr: {
    nome: "Athletico-PR",
    nomeCompleto: "Club Athletico Paranaense",
    logo: "emblemas/clubes/athleticoparanaense.png",
    estrelas: "★★★☆☆",
    estadio: "Ligga Arena",
    capacidade: "42.372",
    fundacao: "26/03/1924",
    financas: "Médio",
    reputacao: "Nacional",
    conquistas: ["2001"]
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
   estadio: "São Januário",
   capacidade: "21.880",
   fundacao: "21/08/1898",
   financas: "Fraco",
   reputacao: "Continental",
   conquistas: ["2000", "1997", "1989", "1974"]
},

   rbbragantino: {
   nome: "RB Bragantino",
   nomeCompleto: "Red Bull Bragantino",
   logo: "emblemas/clubes/rbbragantino.png",
   estrelas: "★★★☆☆",
   estadio: "Nabi Abi Chedid",
   capacidade: "12.000",
   fundacao: "08/01/1928",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},

   mirassol: {
   nome: "Mirassol",
   nomeCompleto: "Mirassol Futebol Clube",
   logo: "emblemas/clubes/mirassol.png",
   estrelas: "★★⯨☆☆",
   estadio: "Maião",
   capacidade: "15.000",
   fundacao: "09/11/1925",
   financas: "Fraco",
   reputacao: "Nacional",
   conquistas: []
},  

   chapecoense: {
   nome: "Chapecoense",
   nomeCompleto: "Associação Chapecoense de Futebol",
   logo: "emblemas/clubes/chapecoense.png",
   estrelas: "★★☆☆☆",
   estadio: "Arena Condá",
   capacidade: "20.089",
   fundacao: "10/05/1973",
   financas: "Muito Fraco",
   reputacao: "Nacional",
   conquistas: []
},  

   coritiba: {
   nome: "Coritiba",
   nomeCompleto: "Coritiba Football Club",
   logo: "emblemas/clubes/coritiba.png",
   estrelas: "★★☆☆☆",
   estadio: "Couto Pereira",
   capacidade: "40.502",
   fundacao: "12/10/1909",
   financas: "Muito Fraco",
   reputacao: "Nacional",
   conquistas: ["1985"]
},  

   bahia: {
   nome: "Bahia",
   nomeCompleto: "Esporte Clube Bahia",
   logo: "emblemas/clubes/bahia.png",
   estrelas: "★★★⯨☆",
   estadio: "Arena Fonte Nova",
   capacidade: "20.089",
   fundacao: "01/01/1931",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: ["1988", "1959"]
},  

   vitoria: {
   nome: "Vitória",
   nomeCompleto: "Esporte Clube Vitória",
   logo: "emblemas/clubes/vitoria.png",
   estrelas: "★★⯨☆☆",
   estadio: "Barradão",
   capacidade: "34.535",
   fundacao: "13/05/1899",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

   remo: {
   nome: "Remo",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/remo.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  americamg: {
   nome: "América-MG",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/americamineiro.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  crb: {
   nome: "CRB",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/crb.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  fortaleza: {
   nome: "Fortaleza",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/fortaleza.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  nautico: {
   nome: "Náutico",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/nautico.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  criciuma: {
   nome: "Criciúma",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/criciuma.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  operario: {
   nome: "Operário",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/operario.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  vilanova: {
   nome: "Vila Nova",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/vila nova.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  saobernardo: {
   nome: "São Bernardo",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/saobernardo.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  gremionovorizontino: {
   nome: "Grêmio Novorizontino",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/gremionovorizontino.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  goias: {
   nome: "Goiás",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/goias.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  juventude: {
   nome: "Juventude",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/juventude.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  atleticogo: {
   nome: "Atlético-GO",
   nomeCompleto: "Clube do Remo",
   logo: "emblemas/clubes/atleticogoianiense.png",
   estrelas: "★★☆☆☆",
   estadio: "Baenão",
   capacidade: "13.792",
   fundacao: "05/02/1905",
   financas: "Médio",
   reputacao: "Nacional",
   conquistas: []
},  

  sport: {
    nome: "Sport Recife",
    nomeCompleto: "Sport Club do Recife",
    logo: "emblemas/clubes/sport.png",
    estrelas: "★★★☆☆",
    dinheiro: "R$ 38.000.000",
    estadio: "Ilha do Retiro",
    destaque: "Lucas Lima"
  }
};

const clube =
  clubes[clubeSelecionado] || clubes.palmeiras;

function preencherTela() {
  document.getElementById("topClubLogo").src = clube.logo;
  document.getElementById("topClubName").textContent = clube.nome;
  document.getElementById("topMoney").textContent = clube.dinheiro;
  document.getElementById("topStars").textContent = clube.estrelas;

  document.getElementById("clubPanelLogo").src = clube.logo;
  document.getElementById("clubPanelName").textContent = clube.nome;
  document.getElementById("clubPanelFullName").textContent = clube.nomeCompleto;
  document.getElementById("clubStars").textContent = clube.estrelas;

  document.getElementById("nextMatchHomeLogo").src = clube.logo;
  document.getElementById("nextMatchHome").textContent = clube.nome;
  document.getElementById("matchStadium").textContent = "🏟 " + clube.estadio;

  document.getElementById("tableClubName").textContent = clube.nome;
  document.getElementById("financeMoney").textContent = clube.dinheiro;
  document.getElementById("starPlayer").textContent = clube.destaque;
  document.getElementById("clubNews").textContent =
    clube.nome + " renova contrato de promessa da base";
}

preencherTela();
