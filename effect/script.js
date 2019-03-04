//Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.
$('#js-show-alert').click(() => {
    //$('#js-alert').show(); //afficher
    //$('#js-alert').toggle(); //afficher/cacher
    //$('#js-alert').slideDown(); //afficher avec l'animation glissé
    $('#js-alert').fadeIn();
});

$('#js-hide-alert').click(() => {
    //$('#js-alert').hide(); //cacher
    //$('#js-alert').slideUp(); // cacher l'animation   
    $('#js-alert').fadeOut();

})

//--------------------------------------------------------------------------------------
//Exos Pratique
$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
});

$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
});

//---------------------------------------------------------------------------------------

// Appliquez une animation au div #js-animation-1: ce <div> se deplace à 300px de gauche à droit en 700 millisecondes 3 secondes
// après la fin du rendu de la page. Utilisez les méthodes delay et animate.
$('#js-animation-1')
    .delay(1000)
    .animate({
        left: '300px'
    }, 700)
    .animate({
        width: '200px'
    },500)
    .animate({
        height: '700px'
    });
//Créez un <div> de taille 5rem sur 5rem et un bouton qui déclenche les animations suivantes :

//La hauteur et la longeur du div s'elargissent jusque 8rem en 500 millisecondes.
//Ensuite le div se deplace à 10rem vers la droite et 5rem vers le bas par rapport à sa position actuelle en 700 millisecondes.
//Ensuite l'opacité du div descend à 50% en 300 millisecondes.
//Ensuite la largeur de la bordure du div passe de 0 à 5 pixels en 400 milisecondes.
//Créez un autre bouton qui arrete l'animation en cours et annule toutes les autres animations.