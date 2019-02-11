//Créez un cookie lang égal à 'fr'.
document.cookie='lang=fr';

//Créez un cookie previewSeen égal à true qui va expirer le lendement.
document.cookie= `lang=fr;expires=${new Date('2019-02-12')}`;

//Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.
docCookies.setItem('test', 'test', new Date('2019-02-12'));

//Créez un cookie userId égal à 123
docCookies.setItem('userId', 123, new Date('2019-02-12'));
console.log( typeof docCookies.getItem('userId'));

//Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321, new Date('2019-02-12'));

//Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userId'));

//store an object
docCookies.setItem('testObject', JSON.stringify({id :1}));

//get an object
const myObj = docCookies.getItem('testObject');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

//Supprimez le cookie test.
docCookies.removeItem('test');
docCookies.setItem('test','', new Date('2000-01-01'));

//Local Storage

// Vérifiez si l'objet LocalStorage est supporté par le navigateur.
if (localStorage) {
    // Créez une entrée greetingégale à 'Hello World'.
    localStorage.setItem('greeting', 'Hello World');

    // Créez une entrée adIdségale à l'objet {top: 1, bottom: 2}.
    localStorage.setItem('adIds' JSON.stringify({top: 1, bottom: 2}));

    // Récupérez greeting.
    console.log(localStorage.getItem('greeting'));

    // Modifiez cette entrée à 'Welcome'.
    localStorage.setItem('greeting', 'Welcome')

    // Supprimez greetingdu LocalStorage.
    localStorage.removeItem('greeting');

    //delete all entries
    localStorage.clear();
    }