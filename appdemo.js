'use strict'


// constructor for photos

function Photo(name, fileName) {
  this.name = name;
  this.src = './images' + fileName
  this.clickCount = 0;
  this.displayCount = 0;
}

// array for current displayed photos

var displayedPhotos = [];

// array for previous photos so they will not show up in consecutive iterations
var previousPhotos = [];
var secondToLastPhoto = [];

// array containing all photos to be selected
var photos = [
  new Photo('bag', 'bag.jpg'),
  new Photo('banana', 'banana.jpg'),
  new Photo('bathroom', 'bathroom.jpg'),
  new Photo('boots', 'boots.jpg'),
  new Photo('breakfast', 'breakfast.jpg'),

  new Photo('bubblegum', 'bubblegum.jpg'),
  new Photo('chair', 'chair.jpg'),
  new Photo('cthulhu', 'cthulhu.jpg'),
  new Photo('dog duck', 'dog-duck.jpg'),
  new Photo('dragon', 'dragon.jpg'),

  new Photo('pet sweep', 'pet-sweep.jpg'),
  new Photo('scissors', 'scissors.jpg'),
  new Photo('shark', 'shark.jpg'),
  new Photo('sweep', 'sweep.pnd'),
  new Photo('tauntaun', 'tauntaun.jpg'),

  new Photo('unicorn', 'unicorn.jpg'),
  new Photo('usb', 'usb.gif'),
  new Photo('water can', 'water-can.jpg'),
  new Photo('wineglass', 'wine-glass.jpg'),
  new Photo('pen', 'pen.jpg'),
];


function getRandomIndex(list ) {
  return Math.floor(Math.random() * list.length)
}

// function to get 3 random photos


function generateRandomPhotos() {
  photos = photos.concat(secondToLastPhoto);
  secondToLastPhoto = previousPhotos;
  previousPhotos = displayedPhotos;
  displayedPhotos = [];

  // splicing out photo from array so it is not possible to be selected for
  // 2nd and 3rd photo being grabbed
  var nextPhoto = photos.splice(getRandomIndex(photos), 1);
  //concat the array returned by splice to displayedPhotos
  displayedPhotos = displayedPhotos.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  displayedPhotos = displayedPhotos.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  displayedPhotos = displayedPhotos.concat(nextPhoto);

  previousPhotos = photos.concat(displayedPhotos);
  return displayedPhotos;

}
