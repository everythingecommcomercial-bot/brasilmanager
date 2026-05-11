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
    reputacao: "Mundial"
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
    reputacao: "Mundial"
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
    reputacao: "Continental"
  }

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
