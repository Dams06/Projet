 'use strict'
 
 //Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.
//document.querySelector('#btn').addEventListener('click', () => {}); // JS
//$('#btn').click(() => {}); // jQuery
//$('#btn').on('click', () => {}); // jQuery

let counter = 0;
$('#js-btn').click(() => {
    counter++; // counter = counter + 1
    if (counter > 4) {
        $('#js-btn').off('click');
    }
    console.log('counter', counter);
})
 
//-----------------------------------------------------------------------
//Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes 
$('#js-hovered').mouseenter(() => {
    changeBgColor('green')
});

$('#js-hovered').mouseleave(() => {
    changeBgColor('blue')
});

function changeBgColor(color){
    $('#js-hovered').css('background-color', color);
}

//--------------------------------------------------------------------------
// Travail pratique : tooltip
$('#js-tooltip-wrapper').mouseenter(() => { 
    $('#js-tooltip').css('display', 'block');
});

$('#js-tooltip-wrapper').mouseleave(() => { 
    $('#js-tooltip').css('display', 'none');
});




