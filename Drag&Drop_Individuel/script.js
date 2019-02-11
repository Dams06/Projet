'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
const dropZone = document.querySelector('#js-drop-to');
const filesList = document.querySelector('#js-file-list');

dropZone.addEventListener('dragover', (e) => onDragOver(e)); //élément ou une sélection de texte est glissé sur une cible de dépôt valide
dropZone.addEventListener('drop', (e) => onDrop(e)); //Tirée lorsqu'un élément ou une sélection de texte est déposé sur une cible de dépôt valide.
dropZone.addEventListener('dragstart', () => changeDropZoneState(true)); //glisser un élément ou une sélection de texte
dropZone.addEventListener('dragleave', () => changeDropZoneState(false)); //élément glissé ou une sélection de texte quitte une cible de dépôt valide.

function onDragOver(event) { //élément ou une sélection de texte est glissé sur une cible de dépôt valide
  event.stopPropagation(); //Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
  event.preventDefault(); //indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
}

function onDrop(e) { //Tirée lorsqu'un élément ou une sélection de texte est déposé sur une cible de dépôt valide.
  e.stopPropagation(); //Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
  e.preventDefault(); //indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
  filesList.innerHTML = ''; //rajoute un élémznt html
  const filesUploaded = Array.from(e.dataTransfer.files);//champ dataTransfer avec un sous-champ de tableau de fichiers, qui contient les fichiers déposée
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index)); //detecte tout les objets qui sont drop dans une zone definie
  changeDropZoneState(false); // appel la fonction changeDropZoneState
}

function changeDropZoneState(isDragging) { //Créer une fonction 
  isDragging ? // ect-ce que c'est ok ?
    dropZone.classList.add('js-is-dragged-over') : //Créer la class
    dropZone.classList.remove('js-is-dragged-over'); // supprime la class
}

function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}