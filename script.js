// Crating variables
let name = document.getElementById('name');
let codeBy = document.getElementById('navA');
let work = document.getElementById('navB');
let about = document.getElementById('navC');
let contact = document.getElementById('navD');
let navigationBar = document.getElementById('navigation');
let image = document.getElementById('portada');


// Random opacity value 0-1
function opacityValue() {
  return (Math.random() * 1);
}
// Applying the random opacity value to a style
function opacityChange(event) {
  let opacityNumber = opacityValue(); 
  event.target.style.opacity = opacityNumber;
  codeBy.style.opacity = opacityNumber;
  work.style.opacity = opacityNumber;
  about.style.opacity = opacityNumber;
  contact.style.opacity = opacityNumber;
}

// Color palettes that matches with background
let colorPalette = ['#FFEAEA', '#B2A2B0', '#878295', '#5B6478', '#2F4858', '#E2CCC0', '#BCB199', '#D19FA0', '#F6C7C8', '#FFE4E4', '#FFC4D5'];

// Random color from the matches
function randomPalette() {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}
// Applying the random color to a style
function randomPaletteChange(event) {
  let randomColorPalette = randomPalette();
  event.target.style.color = randomColorPalette;
  codeBy.style.color = randomColorPalette;
  work.style.color = randomColorPalette;
  about.style.color = randomColorPalette;
  contact.style.color = randomColorPalette;
}

// Creating event listener to name
//QUITAR ESTE COMENTARIO SI NO FUNCIONA LO DE LA IMAGEN
// name.addEventListener('wheel', randomPaletteChange)
// name.addEventListener('wheel', opacityChange)


function colorValue() {
  return Math.floor(Math.random() * 256);
}
function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.color = randomColor;
}

// Blur effect
function blurName(event) {
  event.target.style.background = 'rgba(0, 0, 0, 0.5)';
  event.target.style.backdropFilter = 'blur(10px)';
  event.target.style.color = 'white';
//  event.target.style.borderRadius = '50px'
  event.target.style.filter = 'invert(100%)';
}

// QUITAR ESTE COMENTARIO SI NO FUNCIONA LO DE LA IMAGEN
// name.addEventListener('click', blurName);
// image.addEventListener('wheel', blurName)


// Image filters code
let pixelValue = Math.floor(Math.random() * 100);
let pixelBig = Math.floor(Math.random() * (100 - 50 + 1)+ 50);
let pixelBigger = Math.floor(Math.random() * (100 - 70 + 1)+ 70);
let specificHue = Math.floor(Math.random() * 330);

let blurValue = 'blur(' + pixelValue + 'px)';
let contrastValue = 'contrast(' + pixelBig + '%)';
let grayValue = 'grayscale(' + pixelValue + '%)';
let sepiaValue = 'sepia(' + pixelValue + '%)';
let hueValue = 'hue-rotate(' + specificHue + 'deg)';
let invertValue = 'invert(' + pixelBigger + '%)';

let filters = [blurValue, contrastValue, grayValue, invertValue, hueValue];

function randomFilter() {
  return filters[Math.floor(Math.random() * filters.length)];
}

function filterImage(event) {
  event.target.style.filter = randomFilter();
} 

image.addEventListener('click', filterImage);
