const clubs = {
  Flamengo: {
    badge: '🔴⚫', overall: 81, coach: 'Leonardo Jardim',
    players: [
      ['Rossi','GOL','🇦🇷',80],['Varela','LD','🇺🇾',79],['Léo Ortiz','ZAG','🇧🇷',80],['Léo Pereira','ZAG','🇧🇷',81],['Alex Sandro','LE','🇧🇷',78],
      ['Evertton Araújo','VOL','🇧🇷',77],['Jorginho','MC','🇮🇹',82],['Arrascaeta','MEI','🇺🇾',84],['Lucas Paquetá','MD','🇧🇷',82],['Samuel Lino','ME','🇧🇷',80],['Pedro','ATA','🇧🇷',81],
      ['Saúl Ñíguez','MC','🇪🇸',79],['Gonzalo Plata','PD','🇪🇨',78],['Luiz Araújo','ATA','🇧🇷',78]
    ]
  },
  Palmeiras: {
    badge: '🟢⚪', overall: 80, coach: 'Abel Ferreira',
    players: [
      ['Carlos Miguel','GOL','🇧🇷',76],['Agustín Giay','LD','🇦🇷',76],['Gustavo Gómez','ZAG','🇵🇾',83],['Murilo','ZAG','🇧🇷',75],['Piquerez','LE','🇺🇾',81],
      ['Marlon Freitas','MC','🇧🇷',79],['Andreas Pereira','MC','🇧🇷',81],['Allan','MD','🇧🇷',77],['Paulinho','ME','🇧🇷',78],['Flaco López','ATA','🇦🇷',80],['Vitor Roque','ATA','🇧🇷',80],
      ['Jhon Arias','ME','🇨🇴',79],['Felipe Anderson','ME','🇧🇷',78],['Maurício','MC','🇧🇷',77]
    ]
  },
  Corinthians: {
    badge: '⚫⚪', overall: 77, coach: 'Fernando Diniz',
    players: [
      ['Hugo Souza','GOL','🇧🇷',78],['Matheuzinho','LD','🇧🇷',77],['Gabriel Paulista','ZAG','🇧🇷',78],['Gustavo Henrique','ZAG','🇧🇷',78],['Matheus Bidu','LE','🇧🇷',79],
      ['Raniele','VOL','🇧🇷',75],['André Carrillo','MC','🇵🇪',76],['Breno Bidon','MC','🇧🇷',75],['Rodrigo Garro','MEI','🇦🇷',77],['Memphis','ATA','🇳🇱',80],['Yuri Alberto','ATA','🇧🇷',78],
      ['Jesse Lingard','MEI','🏴',76],['Kaio César','ATA','🇧🇷',75],['Vitinho','ATA','🇧🇷',74]
    ]
  }
};

let selectedClub = 'Flamengo';
let round = 0;
let table = Object.keys(clubs).map(name => ({ name, J:0,V:0,E:0,D:0,GP:0,GC:0,Pts:0 }));

const linePositions = [
  [44,84],[72,68],[50,68],[28,68],[8,68],
  [50,47],[35,38],[65,38],[78,24],[18,24],[50,18]
];

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active', b.dataset.screen===id));
}

document.querySelectorAll('.nav').forEach(btn => btn.onclick = () => showScreen(btn.dataset.screen));

function renderClubs(){
  const box = document.getElementById('clubCards');
  box.innerHTML = '';
  Object.entries(clubs).forEach(([name, club]) => {
    const div = document.createElement('div');
    div.className = 'clubCard';
    div.innerHTML = `<div class="badge">${club.badge}</div><h3>${name}</h3><p>Técnico: ${club.coach}</p><p>Overall</p><div class="overall">${club.overall}</div>`;
    div.onclick = () => { selectedClub = name; renderAll(); showScreen('elenco'); };
    box.appendChild(div);
  });
}

function renderSquad(){
  const club = clubs[selectedClub];
  document.getElementById('squadInfo').innerHTML = `<p><b>${club.badge} ${selectedClub}</b> | Técnico: ${club.coach} | Overall: ${club.overall}</p>`;
  document.getElementById('squadTable').innerHTML = club.players.map(p => `<tr><td>${p[2]} ${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td><b>${p[3]}</b></td></tr>`).join('');
}

function renderLineup(){
  const players = clubs[selectedClub].players.slice(0,11);
  const pitch = document.getElementById('lineup');
  pitch.innerHTML = players.map((p,i)=>{
    const [x,y] = linePositions[i];
    return `<div class="player" style="left:${x}%;top:${y}%;transform:translate(-50%,-50%)"><div class="pos">${p[1]}</div><b>${p[2]} ${p[0]}</b><div class="rating">${p[3]}</div></div>`;
  }).join('');
}

function renderTable(){
  const sorted = [...table].sort((a,b)=>b.Pts-a.Pts || (b.GP-b.GC)-(a.GP-a.GC));
  document.getElementById('leagueTable').innerHTML = sorted.map(t => `<tr><td>${clubs[t.name].badge} ${t.name}</td><td>${t.J}</td><td>${t.V}</td><td>${t.E}</td><td>${t.D}</td><td>${t.GP}</td><td>${t.GC}</td><td><b>${t.Pts}</b></td></tr>`).join('');
}

function goalsFor(power){
  const r = Math.random()*100;
  if(r < power-45) return 3;
  if(r < power-25) return 2;
  if(r < power) return 1;
  return 0;
}

function simulate(){
  const opponents = Object.keys(clubs).filter(c=>c!==selectedClub);
  const opponent = opponents[round % opponents.length];
  const a = clubs[selectedClub], b = clubs[opponent];
  let homeGoals = goalsFor(a.overall + Math.random()*10);
  let awayGoals = goalsFor(b.overall + Math.random()*10);
  if(Math.random()<0.2 && a.overall>b.overall) homeGoals++;
  updateTable(selectedClub, opponent, homeGoals, awayGoals);
  round++;
  document.getElementById('matchTitle').innerHTML = `${a.badge} ${selectedClub} x ${b.badge} ${opponent}`;
  document.getElementById('matchResult').innerHTML = `<h3>${selectedClub} <span class="goal">${homeGoals}</span> x <span class="goal">${awayGoals}</span> ${opponent}</h3><p>Posse: ${50 + Math.round((a.overall-b.overall)*1.5)}% x ${50 - Math.round((a.overall-b.overall)*1.5)}%</p><p>Destaque da partida: ${a.players[Math.floor(Math.random()*11)][0]}</p>`;
  renderTable();
}

function updateTable(a,b,ga,gb){
  const A = table.find(t=>t.name===a), B = table.find(t=>t.name===b);
  A.J++; B.J++; A.GP+=ga; A.GC+=gb; B.GP+=gb; B.GC+=ga;
  if(ga>gb){A.V++;B.D++;A.Pts+=3}else if(ga<gb){B.V++;A.D++;B.Pts+=3}else{A.E++;B.E++;A.Pts++;B.Pts++}
}

function renderAll(){ renderSquad(); renderLineup(); renderTable(); }
document.getElementById('simulateBtn').onclick = simulate;
renderClubs(); renderAll();
