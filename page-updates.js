/* Pretty Accessories — Page Updates v1.0
 * Adds: new images, tournament map section, cruise photo
 * Loads after main page — applies changes dynamically
 */
(function(){
'use strict';

/* ══ 1. IMAGE SWAPS — Use new uploaded photos ══ */
var swaps = {
  // TikTok section: new Ariana photo
  './Ariana4.png': './Ariana6.png',
  // Products: new player images
  './Nailah3.png': './Nailah5.png',
  './Ariana3.png': './Ariana5.png'
};
document.querySelectorAll('img').forEach(function(img){
  var src = img.getAttribute('src');
  if(swaps[src]) img.setAttribute('src', swaps[src]);
});

/* ══ 2. DREAM SECTION — Caribbean Cruise photo ══ */
var dreamImg = document.querySelector('.dream-athlete');
if(dreamImg){
  dreamImg.setAttribute('src', './TravelPhoto_CaribeCruise1.png');
  dreamImg.setAttribute('alt', 'Pretty Accessories — Caribbean Cruise adventure, Puerto Rico volleyball athletes traveling the world');
  dreamImg.style.mixBlendMode = 'normal';
  dreamImg.style.borderRadius = '16px';
  dreamImg.style.border = '2px solid rgba(255,215,0,.25)';
  dreamImg.style.boxShadow = '0 20px 60px rgba(0,0,0,.5)';
  dreamImg.style.objectFit = 'cover';
  dreamImg.style.objectPosition = 'center center';
  dreamImg.classList.remove('player-image');
}

/* ══ 3. TOURNAMENT MAP CSS ══ */
var css = document.createElement('style');
css.textContent = `
.torneos-sec{background:linear-gradient(180deg,var(--dark3,#060610) 0%,#0a0618 50%,var(--dark,#0A0A0F) 100%);position:relative;z-index:10;overflow:hidden;padding:80px 20px}
.torneos-sec::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(0,229,204,.06),transparent 70%)}
.torneos-in{max-width:1120px;margin:0 auto;position:relative;z-index:2}
.torneos-grid{display:flex;flex-direction:column;gap:28px}
.pr-map-wrap{position:relative;width:100%;max-width:560px;margin:0 auto}
.pr-map-svg{width:100%;height:auto}
.pr-island{fill:rgba(255,255,255,.05);stroke:rgba(0,229,204,.35);stroke-width:1.5;transition:fill .3s}
.pr-island:hover{fill:rgba(0,229,204,.08)}
.map-pin{cursor:pointer;transition:transform .2s}
.map-pin:hover{transform:scale(1.3)}
@keyframes pinPulse{0%,100%{r:8;opacity:.3}50%{r:14;opacity:0}}
.pin-pulse{animation:pinPulse 2s ease-in-out infinite}
.torneo-cards{display:flex;flex-direction:column;gap:10px}
.torneo-card{display:flex;align-items:center;gap:14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:14px 16px;transition:all .25s;cursor:pointer}
.torneo-card:hover,.torneo-card.active{background:rgba(255,255,255,.07);border-color:rgba(255,61,127,.3);transform:translateX(4px)}
.torneo-date{font-family:'Bebas Neue','Arial Black',Impact,sans-serif;font-size:1.5rem;line-height:1;color:var(--pink,#FF3D7F);min-width:52px;text-align:center}
.torneo-date small{display:block;font-family:'Plus Jakarta Sans',sans-serif;font-size:.52rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);margin-top:2px}
.torneo-info{flex:1;min-width:0}
.torneo-name{font-family:'Unbounded',sans-serif;font-size:.7rem;font-weight:700;letter-spacing:.5px;color:#fff;margin-bottom:3px}
.torneo-loc{font-size:.7rem;color:rgba(255,255,255,.45);font-weight:500}
.torneo-dist{font-size:.58rem;color:var(--mint,#00E5CC);font-weight:600;margin-top:2px}
.torneo-badge{font-family:'Unbounded',sans-serif;font-size:.46rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:4px 10px;border-radius:50px;white-space:nowrap}
.torneo-badge.live{background:rgba(255,61,127,.2);color:var(--pink,#FF3D7F);border:1px solid rgba(255,61,127,.3)}
.torneo-badge.next{background:rgba(0,229,204,.12);color:var(--mint,#00E5CC);border:1px solid rgba(0,229,204,.2)}
.torneo-badge.soon{background:rgba(255,215,0,.1);color:var(--gold,#FFD700);border:1px solid rgba(255,215,0,.2)}
@media(min-width:768px){.torneos-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start}}
`;
document.head.appendChild(css);

/* ══ 4. TOURNAMENT MAP HTML ══ */
var torneoHTML = `
<section class="torneos-sec" id="torneos">
  <div class="torneos-in">
    <span class="eyebrow t" data-es="Temporada 2025-2026 \ud83c\uddf5\ud83c\uddf7" data-en="Season 2025-2026 \ud83c\uddf5\ud83c\uddf7">Temporada 2025-2026 \ud83c\uddf5\ud83c\uddf7</span>
    <h2 class="s-head t" data-es="D\u00d3NDE NOS VES ESTE A\u00d1O" data-en="WHERE TO FIND US THIS YEAR">D\u00d3NDE NOS VES ESTE A\u00d1O</h2>
    <div class="sdiv"></div>
    <div class="torneos-grid">
      <div class="pr-map-wrap">
        <svg class="pr-map-svg" viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
          <path class="pr-island" d="M45,100 C50,88 65,76 82,70 C105,63 130,58 158,54 C182,51 208,48 235,46 C260,44 285,43 312,42 C338,42 365,44 390,46 C415,49 440,48 465,52 C482,54 500,57 514,64 C528,72 535,80 538,92 C542,102 540,115 535,126 C530,137 522,146 512,154 C502,162 488,168 472,173 C458,178 442,182 425,186 C408,190 390,194 374,199 C358,204 342,209 328,213 C314,217 298,219 280,218 C262,216 244,212 228,207 C212,202 192,196 175,188 C158,180 140,172 123,163 C106,154 88,144 74,134 C60,124 50,112 45,100Z"/>
          <path class="pr-island" d="M544,92 C549,90 556,92 561,96 C566,100 569,105 567,110 C565,115 560,118 555,118 C550,118 545,115 543,110 C541,105 540,98 544,92Z"/>
          <!-- Home: Arecibo -->
          <g class="map-pin" onclick="highlightTorneo(-1)">
            <circle cx="188" cy="62" class="pin-pulse" fill="#FFD700" opacity=".3"/>
            <circle cx="188" cy="62" r="6" fill="#FFD700" stroke="#0A0A0F" stroke-width="2"/>
            <text x="188" y="50" text-anchor="middle" fill="rgba(255,255,255,.7)" font-size="9" font-family="Unbounded,sans-serif" font-weight="700" letter-spacing="1">ARECIBO</text>
          </g>
          <!-- Morovis -->
          <g class="map-pin" data-tidx="0" onclick="highlightTorneo(0)">
            <circle cx="232" cy="98" r="5" fill="#FF3D7F" stroke="#0A0A0F" stroke-width="2"/>
          </g>
          <!-- Bayam\u00f3n -->
          <g class="map-pin" data-tidx="1" onclick="highlightTorneo(1)">
            <circle cx="312" cy="76" r="5" fill="#FF3D7F" stroke="#0A0A0F" stroke-width="2"/>
          </g>
          <!-- Metro Area -->
          <g class="map-pin" data-tidx="2" onclick="highlightTorneo(2)">
            <circle cx="348" cy="66" r="5" fill="#FF3D7F" stroke="#0A0A0F" stroke-width="2"/>
          </g>
          <!-- Bayam\u00f3n (Kids) -->
          <g class="map-pin" data-tidx="3" onclick="highlightTorneo(3)">
            <circle cx="318" cy="82" r="5" fill="#FF3D7F" stroke="#0A0A0F" stroke-width="2"/>
          </g>
          <!-- Cabo Rojo -->
          <g class="map-pin" data-tidx="4" onclick="highlightTorneo(4)">
            <circle cx="76" cy="164" r="5" fill="#FF3D7F" stroke="#0A0A0F" stroke-width="2"/>
          </g>
          <!-- Dashed routes from Arecibo -->
          <line x1="188" y1="62" x2="232" y2="98" stroke="rgba(255,255,255,.1)" stroke-width=".8" stroke-dasharray="4 4"/>
          <line x1="188" y1="62" x2="312" y2="76" stroke="rgba(255,255,255,.1)" stroke-width=".8" stroke-dasharray="4 4"/>
          <line x1="188" y1="62" x2="76" y2="164" stroke="rgba(255,255,255,.1)" stroke-width=".8" stroke-dasharray="4 4"/>
        </svg>
      </div>
      <div class="torneo-cards" id="torneo-cards">
        <div class="torneo-card active" data-tidx="0" onclick="highlightTorneo(0)">
          <div class="torneo-date">MAR 26<small>4 d\u00edas</small></div>
          <div class="torneo-info"><div class="torneo-name t" data-es="TORNEO TITANAS" data-en="TITANAS TOURNAMENT">TORNEO TITANAS</div><div class="torneo-loc">Morovis, PR</div><div class="torneo-dist">40 min desde Arecibo</div></div>
          <span class="torneo-badge live t" data-es="AHORA" data-en="LIVE">AHORA</span>
        </div>
        <div class="torneo-card" data-tidx="1" onclick="highlightTorneo(1)">
          <div class="torneo-date">ABR 17<small>3 d\u00edas</small></div>
          <div class="torneo-info"><div class="torneo-name">ICE CREAM VOLLEY</div><div class="torneo-loc">Bayam\u00f3n, PR</div><div class="torneo-dist">55 min desde Arecibo</div></div>
          <span class="torneo-badge next t" data-es="PR\u00d3XIMO" data-en="NEXT">PR\u00d3XIMO</span>
        </div>
        <div class="torneo-card" data-tidx="2" onclick="highlightTorneo(2)">
          <div class="torneo-date">ABR 23<small>4 d\u00edas</small></div>
          <div class="torneo-info"><div class="torneo-name">THE QUEST</div><div class="torneo-loc">Metro Area, PR</div><div class="torneo-dist">1 hr desde Arecibo</div></div>
          <span class="torneo-badge soon">PRONTO</span>
        </div>
        <div class="torneo-card" data-tidx="3" onclick="highlightTorneo(3)">
          <div class="torneo-date">MAY 1<small>3 d\u00edas</small></div>
          <div class="torneo-info"><div class="torneo-name">KIDS VOLLEY FEST</div><div class="torneo-loc">Bayam\u00f3n, PR</div><div class="torneo-dist">55 min desde Arecibo</div></div>
          <span class="torneo-badge soon">PRONTO</span>
        </div>
        <div class="torneo-card" data-tidx="4" onclick="highlightTorneo(4)">
          <div class="torneo-date">JUL 9<small>4 d\u00edas</small></div>
          <div class="torneo-info"><div class="torneo-name">CABO ROJO CHALLENGE</div><div class="torneo-loc">Cabo Rojo, PR</div><div class="torneo-dist">1 hr 45 min desde Arecibo</div></div>
          <span class="torneo-badge soon">PRONTO</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

/* ══ 5. INJECT TOURNAMENT SECTION before dream section ══ */
var dreamSec = document.querySelector('.dream-sec');
var lastDivider = dreamSec ? dreamSec.previousElementSibling : null;
if(lastDivider && lastDivider.classList.contains('sec-div')){
  var temp = document.createElement('div');
  temp.innerHTML = torneoHTML;
  var newSection = temp.firstElementChild;
  var newDivider = document.createElement('div');
  newDivider.className = 'sec-div';
  newDivider.setAttribute('role', 'separator');
  lastDivider.parentNode.insertBefore(newSection, lastDivider);
  lastDivider.parentNode.insertBefore(newDivider, lastDivider);
}

/* ══ 6. TOURNAMENT INTERACTION ══ */
window.highlightTorneo = function(idx){
  document.querySelectorAll('.torneo-card').forEach(function(c){c.classList.remove('active');});
  document.querySelectorAll('.map-pin[data-tidx] circle').forEach(function(c){c.setAttribute('r','5');});
  if(idx >= 0){
    var card = document.querySelector('.torneo-card[data-tidx="'+idx+'"]');
    if(card) card.classList.add('active');
    var pin = document.querySelector('.map-pin[data-tidx="'+idx+'"] circle');
    if(pin) pin.setAttribute('r','8');
  }
};

/* ══ 7. APPLY LANGUAGE to new elements ══ */
if(typeof lang !== 'undefined' && typeof setLang === 'function'){
  setLang(lang);
}

console.log('Pretty Accessories page-updates.js loaded \u2728');
})();
