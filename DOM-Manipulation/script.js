//Récupérez et logguez dans la console le contenu du titre de la page.
const title = $('h1').text();
console.log('title', title);
//Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My page title');
//Récupérez et logguez dans la console le HTML de l'article.
const articleContent = $('#js-article').html();
console.log('articleContent', articleContent);
//Changer le contenue de l'article à
$('#js-article').html(`
<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>
`)
//--------------------------------------------------------------------------------------------
//Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue =$('#js-search').val();
console.log('inputValue', inputValue);
//Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagles');
//Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.
//Changez la valeur du placeholder du champ de saisie à 'Search'

//Travail Pratique: search
$('#js-search-form')[0].addEventListener('submit', (event) => {
    //
event.preventDefault();
const text = $('#js-search').val();
if (text === 'chat'){
    $('#js-search-result').text('Miaou');
}else{
    $('#js-search-result').html ('<p>Pas de resultats pour la recherche : <strong>' + text + '</strong></p>')
}
});
//------------------------------------------------------------------------------------------

//Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');
//Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert-primary');
//Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');
//Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')){
    $('#js-alert').removeClass('alert-warning');
}
//En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
$('#js-btn')[0].addEventListener('click', () =>{
$('#js-alert').toggleClass('alert-success');
});
//Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));
//Passez la couleur du fond du bouton en #71b8af.
$('#js-btn').css('background-color', '#71b8af');
//Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px
$('#js-btn').css({
    color: '"fff2d5',
    'border-radius': '100%'
});

//--------------------------------------------------------------------------------------------------------


$('#js-danger-alert-btn')[0].addEventListener('click', () =>{
    $('#js-danger-alert').fadeOut();
    });

//---------------------------------------------------------------------------------



