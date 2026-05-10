const clubs = [
  {
    id: "palmeiras",
    name: "Palmeiras",
    logo: "assets/palmeiras.webp",
    prestige: "★★★★★",
    squad: 83,
    finance: "Muito Bom",
    structure: "Excelente",
    money: "R$ 125.430.000"
  },
  {
    id: "corinthians",
    name: "Corinthians",
    logo: "assets/corinthians.png",
    prestige: "★★★★☆",
    squad: 80,
    finance: "Bom",
    structure: "Muito Bom",
    money: "R$ 88.200.000"
  },
  {
    id: "flamengo",
    name: "Flamengo",
    logo: "assets/flamengo.png",
    prestige: "★★★★★",
    squad: 84,
    finance: "Muito Bom",
    structure: "Excelente",
    money: "R$ 142.700.000"
  }
];

const table = [
  { pos: 1, club: "Palmeiras", logo: "assets/palmeiras.webp", j: 5, v: 4, e: 1, d: 0, gp: 10, gc: 2, sg: 8, pts: 13 },
  { pos: 2, club: "Flamengo", logo: "assets/flamengo.png", j: 5, v: 4, e: 0, d: 1, gp: 11, gc: 4, sg: 7, pts: 12 },
  { pos: 3, club: "Corinthians", logo: "assets/corinthians.png", j: 5, v: 3, e: 1, d: 1, gp: 8, gc: 4, sg: 4, pts: 10 },
  { pos: 4, club: "Atlético-MG", logo: "assets/atletico.svg", j: 5, v: 3, e: 1, d: 1, gp: 7, gc: 5, sg: 2, pts: 10 },
  { pos: 5, club: "São Paulo", logo: "assets/saopaulo.svg", j: 5, v: 2, e: 2, d: 1, gp: 6, gc: 4, sg: 2, pts: 8 }
];

let currentClub = clubs[0];

function renderClubs() {
  const grid = document.getElementById("clubGrid");
  grid.innerHTML = "";

  clubs.forEach((club) => {
    const card = document.createElement("div");
    card.className = `club-card ${club.id === currentClub.id ? "active" : ""}`;

    card.innerHTML = `
      <img src="${club.logo}" alt="${club.name}">
      <h2>${club.name.toUpperCase()}</h2>
      <div class="info-row"><span>Prestígio</span><span class="stars">${club.prestige}</span></div>
      <div class="info-row"><span>Elenco</span><b>${club.squad}</b></div>
      <div class="info-row"><span>Finanças</span><b>${club.finance}</b></div>
      <div class="info-row"><span>Estrutura</span><b>${club.structure}</b></div>
      <button>ESCOLHER CLUBE</button>
    `;

    card.querySelector("button").addEventListener("click", () => selectClub(club.id));
    grid.appendChild(card);
  });
}

function renderTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  table.forEach((row) => {
    const tr = document.createElement("tr");
    if (row.club.toLowerCase() === currentClub.name.toLowerCase()) tr.classList.add("active");

    tr.innerHTML = `
      <td>${row.pos}</td>
      <td><div class="league-club"><img src="${row.logo}" alt="">${row.club}</div></td>
      <td>${row.j}</td>
      <td>${row.v}</td>
      <td>${row.e}</td>
      <td>${row.d}</td>
      <td>${row.gp}</td>
      <td>${row.gc}</td>
      <td>${row.sg}</td>
      <td>${row.pts}</td>
    `;
    tbody.appendChild(tr);
  });
}

function selectClub(id) {
  currentClub = clubs.find((club) => club.id === id);

  document.getElementById("currentClub").textContent = currentClub.name;
  document.getElementById("currentLogo").src = currentClub.logo;
  document.getElementById("money").textContent = currentClub.money;
  document.getElementById("matchHome").textContent = currentClub.name.toUpperCase();
  document.getElementById("matchHomeLogo").src = currentClub.logo;

  renderClubs();
  renderTable();
}

document.querySelectorAll(".menu button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".menu button").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
  });
});

renderClubs();
renderTable();
