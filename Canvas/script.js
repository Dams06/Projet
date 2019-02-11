'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = '#ffff';
ctx.fillStyle = '#ffff';

//HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//Body
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//HAT
ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';

ctx.fillRect(123, 130, 150, 30);
ctx.fillRect(152, 47, 90, 100);

//LEFT ARM
ctx.lineWidth = 5;  
ctx.beginPath();
ctx.moveTo(132, 301);
ctx.lineTo(30, 254);
ctx.stroke();

//Rigth ARM
ctx.lineWidth = 5;  
ctx.beginPath();
ctx.moveTo(256, 305);
ctx.lineTo(331, 267);
ctx.lineTo(351, 336);
ctx.stroke();

//eyes
ctx.beginPath();
ctx.arc(177, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//eyes 2
ctx.beginPath();
ctx.arc(224, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//NOSE
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';

ctx.beginPath();
ctx.moveTo(199, 186);
ctx.lineTo(124, 211);
ctx.lineTo(199, 210);
ctx.quadraticCurveTo(203, 195, 197, 186)
ctx.stroke();
ctx.fill();

//SCARF
ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';

ctx.fillRect(164, 230, 150, 30);



