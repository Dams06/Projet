/*
// Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);
const myDivs2 = document.querySelectorAll('div');
console.log('myDivs2', myDivs);

// Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.
const myParagraphs = document.getElementsByClassName
('my-paragraph');
const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('myParagraphs2', myParagraphs2);

// Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element
const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2 = document.querySelector('#js-unique-el');

// Trouvez toutes les balises p qui se trouvent dans un div.
const myParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs);

// Trouvez toutes les balises span qui sont précédées par un div.
const spansPreceedByDivs = document.querySelectorAll('div~span');
console.log('spansPreceedByDivs', spansPreceedByDivs);



// Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
const firstP = document.querySelector('p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP > text', firstP.innerText);

// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
const secondP = document.querySelectorAll('.second-p');
secondP[0].innerHTML = '<span>Hello</span>';
console.log('secondP > html', secondP[0].innerHTML);

// Modifiez les attributs width à 50% et height à 'auto' de l'image.
const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%')
myImg.setAttribute('width', 'auto')

// Ajoutez un attribut alt non vide à l'image.
myImg.setAttribute('alt', 'Random image');

// Donnez la couleur 'blue' au premier
firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

// Ajoutez la classe img à l'image.
myImg.className = 'my-img';
myImg.classList.add('my-img');
myImg.classList.remove('my-img');
*/

//suprimer une node
const parent = document.querySelector('div');
const nodeToDelete = document.querySelector('div p');
parent.removeChild(nodeToDelete);

//créer une node
const myBody = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello!';
myBody.appendChild(newDiv);

const anotherDiv = document.createElement('div');
anotherDiv.innerText = 'first child';
anotherDiv.style.color = 'red';
myBody.prepend(anotherDiv);