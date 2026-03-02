/* ============================================
   SCRIPT INTERACTIF - CARTE
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initializeMap();
});

// Initialisation de la carte
function initializeMap() {
  const gouvernoratElements = document.querySelectorAll('.gouvernorat');
  const infoPanel = document.querySelector('.info-panel');
  
  // Ajouter les événements aux gouvernorats
  gouvernoratElements.forEach(element => {
    const gouvernoratId = element.getAttribute('data-gouvernorat');
    const gouvernorat = getGouvernoratById(parseInt(gouvernoratId));
    
    // Survol
    element.addEventListener('mouseenter', function() {
      displayGouvInfo(gouvernorat, infoPanel);
      element.style.opacity = '0.8';
    });
    
    // Sortie du survol
    element.addEventListener('mouseleave', function() {
      element.style.opacity = '1';
      clearGouvInfo(infoPanel);
    });
    
    // Clic pour redirection
    element.addEventListener('click', function() {
      const nomKey = Object.keys(gouvernorats).find(key => gouvernorats[key].id === parseInt(gouvernoratId));
      if (nomKey) {
        navigateToGouverat(nomKey);
      }
    });
  });
}

// Afficher les informations d'un gouvernorat
function displayGouvInfo(gouvernorat, panel) {
  if (!panel) return;
  
  const html = `
    <h3>${gouvernorat.nom}</h3>
    <div class="info-item">
      <label>Région</label>
      <value>${gouvernorat.region}</value>
    </div>
    <div class="info-item">
      <label>Chef-lieu</label>
      <value>${gouvernorat.chef_lieu}</value>
    </div>
    <div class="info-item">
      <label>Population</label>
      <value>${gouvernorat.population.toLocaleString('fr-FR')} hab.</value>
    </div>
    <div class="info-item">
      <label>Superficie</label>
      <value>${gouvernorat.superficie.toLocaleString('fr-FR')} km²</value>
    </div>
    <div class="info-item">
      <label>Densité</label>
      <value>${gouvernorat.densite} hab./km²</value>
    </div>
    <div class="info-item">
      <label>Code Postal</label>
      <value>${gouvernorat.code_postal}</value>
    </div>
    <div class="info-item">
      <label>Délégations</label>
      <value>${gouvernorat.delegations}</value>
    </div>
  `;
  
  panel.innerHTML = html;
}

// Effacer les informations
function clearGouvInfo(panel) {
  if (!panel) return;
  panel.innerHTML = '<p class="info-panel-empty">Survolez un gouvernorat pour voir les détails</p>';
}

// Naviguer vers une page gouvernorat
function navigateToGouverat(nomKey) {
  window.location.href = `pages/gouvernorats/${nomKey}.html`;
}

// Formater les nombres
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Initialiser les statistiques globales si la section existe
document.addEventListener('DOMContentLoaded', function() {
  const statsContainer = document.querySelector('.stats-container');
  if (statsContainer) {
    initializeStats();
  }
});

function initializeStats() {
  const statsContainer = document.querySelector('.stats-grid');
  if (!statsContainer) return;
  
  const statsHTML = `
    <div class="stat-card">
      <div class="stat-label">Population Totale</div>
      <div class="stat-value">${(tunisieStats.population_totale / 1000000).toFixed(1)}M</div>
    </div>
    <div class="stat-card vert">
      <div class="stat-label">Gouvernorats</div>
      <div class="stat-value">${tunisieStats.gouvernorats_total}</div>
    </div>
    <div class="stat-card bleu">
      <div class="stat-label">Superficie</div>
      <div class="stat-value">${(tunisieStats.superficie_totale / 1000).toFixed(0)}k km²</div>
    </div>
    <div class="stat-card orange">
      <div class="stat-label">Densité Moyenne</div>
      <div class="stat-value">${tunisieStats.densite_moyenne}/km²</div>
    </div>
  `;
  
  statsContainer.innerHTML = statsHTML;
}

// Fonction pour colorer les gouvernorats selon leur région
function colorizeGouvernorats() {
  const gouvernoratElements = document.querySelectorAll('.gouvernorat');
  
  gouvernoratElements.forEach(element => {
    const gouvernoratId = element.getAttribute('data-gouvernorat');
    const gouvernorat = getGouvernoratById(parseInt(gouvernoratId));
    
    if (gouvernorat) {
      // Ajouter la classe CSS correspondante à la région
      const regionClass = gouvernorat.region.toLowerCase()
        .replace(/\s+/g, '-')
        .replace('é', 'e')
        .replace('è', 'e')
        .replace('ê', 'e');
      
      element.classList.add(regionClass);
    }
  });
}

// Initialiser la coloration
document.addEventListener('DOMContentLoaded', colorizeGouvernorats);
