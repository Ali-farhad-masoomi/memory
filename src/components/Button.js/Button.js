// Création d'un bouton
const button = document.createElement('button');

// Ajout de texte au bouton
button.textContent = 'Cliquez-moi';

// Ajout d'un gestionnaire d'événement au clic sur le bouton
button.addEventListener('click', () => {
  alert('Le bouton a été cliqué !');
});

// Ajout du bouton au corps de la page (ou à un autre élément)
document.body.appendChild(button);
