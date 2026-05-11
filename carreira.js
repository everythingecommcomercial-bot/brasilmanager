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

  "atletico-mg": {
    nome: "Atlético-MG",
    nomeCompleto: "Clube Atlético Mineiro",
    logo: "emblemas/clubes/atleticomineiro.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 96.500.000",
    estadio: "MRV Arena",
    destaque: "Hulk"
  },

  "sao-paulo": {
    nome: "São Paulo",
    nomeCompleto: "São Paulo Futebol Clube",
    logo: "emblemas/clubes/saopaulo.png",
    estrelas: "★★★★☆",
    dinheiro: "R$ 78.400.000",
    estadio: "Morumbis",
    destaque: "Lucas Moura"
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
