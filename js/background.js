const images = [
  'background1.jpg',
  'background2.jpg',
  'background3.jpg',
  'background4.jpg',
  'background5.jpg',
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImages = images[randomIndex];

const url = `url(assets/${randomImages})`;

const background = document.querySelector('main');
background.style.background = url;
background.style.backgroundPosition = 'center center';
background.style.backgroundRepeat = 'no-repeat';
background.style.backgroundSize = 'cover';
