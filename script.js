const clubes = {

  palmeiras: {
    nome: "Palmeiras",
    nomeCompleto: "Sociedade Esportiva Palmeiras",
    logo: "emblemas/clubes/palmeiras.png",
    estrelas: "★★★★☆",
    estadio: "Allianz Parque",
    capacidade: "43.713",
    fundacao: "26/08/1914",
    financas: "Muito Forte",
    reputacao: "Mundial",
    conquistas: ["2023", "2022", "2021", "2014", "2013"]
  },

  flamengo: {
    nome: "Flamengo",
    nomeCompleto: "Clube de Regatas do Flamengo",
    logo: "emblemas/clubes/flamengo.png",
    estrelas: "★★★★★",
    estadio: "Maracanã",
    capacidade: "78.838",
    fundacao: "15/11/1895",
    financas: "Muito Forte",
    reputacao: "Mundial",
    conquistas: ["2025", "2020", "2019", "2009", "1992"]
  },

  corinthians: {
    nome: "Corinthians",
    nomeCompleto: "Sport Club Corinthians Paulista",
    logo: "emblemas/clubes/corinthians.png",
    estrelas: "★★★★☆",
    estadio: "Neo Química Arena",
    capacidade: "49.205",
    fundacao: "01/09/1910",
    financas: "Forte",
    reputacao: "Continental",
    conquistas: ["2017", "2015", "2011", "2005", "1999"]
  },
  
 atleticomg: {
    nome: "Atlétcio-MG",
    nomeCompleto: "Clube Atlético Mineiro",
    logo: "emblemas/clubes/atleticomg.png",
    estrelas: "★★★⯨☆",
    estadio: "Arena MRV",
    capacidade: "44.892",
    fundacao: "25/03/1908",
    financas: "Fraco",
    reputacao: "Continental",
    conquistas: ["2021", "1971", "1937"]
 },
  
saopaulo: {
    nome: "São Paulo",
    nomeCompleto: "São Paulo Futebol Clube",
    logo: "emblemas/clubes/saopaulo.png",
    estrelas: "★★★⯨☆",
    estadio: "MorumBIS",
    capacidade: "66.795",
    fundacao: "25/01/1930",
    financas: "Médio",
    reputacao: "Mundial",
    conquistas: ["2008", "2007", "2006", "1991", "1986"]
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
    estadio: "Vila Belmiro",
    capacidade: "17.923",
    fundacao: "14/04/1912",
    financas: "Fraco",
    reputacao: "Mundial",
    conquistas: ["2004", "2002", "1968", "1965", "1964"]
 },

  
};

let clubeSelecionado = "palmeiras";

function selecionarClube(id) {

  clubeSelecionado = id;

  const clube = clubes[id];

  document.getElementById("clubLogo").src =
    clube.logo;

  document.getElementById("clubLogo").alt =
    clube.nome;

  document.getElementById("clubName").textContent =
    clube.nome;

  document.getElementById("clubFullName").textContent =
    clube.nomeCompleto;

  document.getElementById("clubStars").textContent =
    clube.estrelas;

  document.getElementById("clubStadium").textContent =
    clube.estadio;

  document.getElementById("clubCapacity").textContent =
    clube.capacidade;

  document.getElementById("clubFounded").textContent =
    clube.fundacao;

  document.getElementById("clubFinance").textContent =
    clube.financas;

  document.getElementById("clubReputation").textContent =
    clube.reputacao;

  document.getElementById("clubAchievements").innerHTML =
  clube.conquistas
    .map(ano => `<span>🏆<small>${ano}</small></span>`)
    .join("");
  
  atualizarCards(id);

}

function atualizarCards(idSelecionado) {

  const cards =
    document.querySelectorAll(".club-card");

  cards.forEach(card => {

    card.classList.remove("active");

    if(card.dataset.club === idSelecionado) {
      card.classList.add("active");
    }

  });

}

function iniciarCarreira() {

  localStorage.setItem(
    "clubeSelecionado",
    clubeSelecionado
  );

  window.location.href = "carreira.html";

}

const clubCards =
  document.querySelectorAll(".club-card");

clubCards.forEach(card => {

  card.addEventListener("click", () => {

    const clubeId =
      card.dataset.club;

    selecionarClube(clubeId);

  });

});
