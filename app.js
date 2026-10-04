const apps=[
 {name:'EMTizzle AI',group:'FIELD',desc:'Field-medic guide, portfolio and public home base.',url:'https://emtizzleai.github.io/'},
 {name:'Codebabe',group:'BUILD',desc:'Operator deck for builds, repos and deployments.',url:'https://github.com/EMTizzleAI'},
 {name:'Virion Network',group:'SYSTEMS',desc:'Local AI, machines, agents and network infrastructure.',url:'#',local:true},
 {name:'Frenchbot',group:'SYSTEMS',desc:'Local Mistral-7B brain running on VirionForge.',url:'http://127.0.0.1:8080/#/',local:true},
 {name:'Pontoufle Intercom',group:'COMMS',desc:'Push-to-talk speech-to-text intercom for Muse.',url:'#',local:true},
 {name:'Port Goblin',group:'GOBLINS',desc:'Linux desktop creature watching ports and speaking alerts.',url:'https://github.com/EMTizzleAI/Port-Goblin'},
 {name:'Job Goblin',group:'GOBLINS',desc:'Local-first autonomous job-hunting copilot.',url:'#',local:true},
 {name:'Pantry Goblin V2',group:'GOBLINS',desc:'Pantry intelligence from the creature lab.',url:'#',local:true},
 {name:'DropShip Goblin',group:'GOBLINS',desc:'Commerce experiment from Goblin Network.',url:'#',local:true},
 {name:'Glitchbot',group:'TRANSMISSIONS',desc:'Magazine, visuals, stories and transmissions.',url:'https://emtizzleai.github.io/glitchbot-magazine/'},
 {name:'GitHub',group:'BUILD',desc:'EMTizzleAI source control and creature repositories.',url:'https://github.com/EMTizzleAI'},
 {name:'Vercel',group:'BUILD',desc:'Deployments and live web nodes.',url:'https://vercel.com/dashboard'},
 {name:'LinkedIn',group:'TRANSMISSIONS',desc:'Professional broadcast channel.',url:'https://www.linkedin.com/'}
];
const groups=['ALL',...new Set(apps.map(x=>x.group))];let active='ALL';const grid=document.querySelector('#grid'),filters=document.querySelector('#filters');
function render(){filters.innerHTML=groups.map(g=>`<button class='${g===active?'active':''}' data-g='${g}'>${g}</button>`).join('');grid.innerHTML=apps.filter(a=>active==='ALL'||a.group===active).map(a=>`<a class='card ${a.local?'offline':''}' href='${a.url}' ${a.url==='#'?'onclick="return false"':'target="_blank" rel="noopener"'}><div><span class='tag'>${a.group} // ${a.local?'LOCAL NODE':'WEB NODE'}</span><h2>${a.name}</h2><p>${a.desc}</p></div><span class='launch'>${a.local?(a.url==='#'?'LOCAL LINK // CONFIGURE':'OPEN LOCAL ↗'):'OPEN NODE ↗'}</span></a>`).join('');document.querySelectorAll('button').forEach(b=>b.onclick=()=>{active=b.dataset.g;render()})}render();
setInterval(()=>document.querySelector('#clock').textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),1000);
if('serviceWorker'in navigator)navigator.serviceWorker.register('/sw.js');
