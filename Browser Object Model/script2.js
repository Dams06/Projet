//=================================================================================================

// =====================
//      NAAAAVIGATOR
// =====================

// Affichier le nom du navigateur
const navApp = navigator.appName;
console.log(navApp);

const myBody = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.innerText = 'Nom du navigateur: '+ navigator.appName;
myBody.appendChild(newDiv);

// Affichier la langue du nav
const navLangage = navigator.language;
console.log(navLangage);

const myBody2 = document.querySelector('body');
const newDiv2 = document.createElement('div');
newDiv2.innerText = 'Nom du navigateur: '+ navigator.language;
myBody2.appendChild(newDiv2);

// Affiche la plateform
const navPlat = navigator.platform;
console.log(navPlat);

// Affiche si les cookie sont activés
const navCookie = navigator.cookieEnabled;
console.log(navCookie);


// =====================
//      SCREEEEEN
// =====================

// affiche la largeur de l'écran
const affLarg = screen.width;
console.log(affLarg);

// Affiche la hauteur du le écran
const affHauteur = screen.height;
console.log(affHauteur);

// Affiche l'oriantation de l'écran
const affOrientation = screen.orientation;
console.log(affOrientation);

// =====================
//      Windows
// =====================

// Affiche la largeur de la fenetre
const affTaillelar = window.innerWidth;
console.log(affTaillelar);

// Affiche la hauteur de la fenetre
const affTaillehaut = window.innerHeight;
console.log(affTaillelar);

// Affiche la largeur du navigateur
const affNavLar = window.outerWidth;
console.log(affNavLar);


// Affiche la hauteur du navigateur
const affNavHauteur = window.outerHeight;
console.log(affNavHauteur);

// ========================
//      Location
// ========================
