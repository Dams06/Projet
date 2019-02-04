//Boutton Click me
const btn = document.querySelector('#js-btn');
btn.addEventListener('click', (event) => {
    console.log('Clicked') 
});

/* window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
}) */

//Boutton My button
let isClickedTwice = false;

const grayBtn = document.querySelector('#js-gray-btn');
grayBtn.addEventListener('click', () => {
    isClickedTwice =!isClickedTwice;
    if (isClickedTwice){
        grayBtn.style.backgroundColor = 'green';
    }else{
        grayBtn.style.backgroundColor = 'gray';
    }
})

//Boutton Hover me 
const hoveredBtn = document.querySelector('#hovered-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
})

hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'inherit';
})

//Button Submit

const myForm = document.querySelector('#js-form');
const myInput = document.querySelector('#js-text');

myInput.addEventListener('keyup', () => {
    console.log('input value : ', myInput.value);
})

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(myInput.value);
})

