'use strict'

//constructor

function Photo(name, fileLocation) {
  this.name = name;
  this.fileLocation = fileLocation;
  this.clickCount = 0;
  this.displayCount = 0;

}

var photos = [
  new Photo('bag', './imgs/bag.jpg'),
  new Photo('banana', './imgs/banana.jpg'),
  new Photo('bathroom', './imgs/bathroom.jpg'),
  new Photo('boots', './imgs/boots.jpg'),
  new Photo('breakfast', './imgs/breakfast.jpg'),
  new Photo('bubblegum', './imgs/bubblegum.jpg'),
  new Photo('chair', './imgs/chair.jpg'),
  new Photo('cthulhu', './imgs/cthulhu.jpg'),
  new Photo('dog-duck', './imgs/dog-duck.jpg'),
  new Photo('dragon', './imgs/dragon.jpg'),
  new Photo('pen', './imgs/pen.jpg'),
  new Photo('pet-sweep', './imgs/pet-sweep.jpg'),
  new Photo('scissors', './imgs/scissors.jpg'),
  new Photo('shark', './imgs/shark.jpg'),
  new Photo('sweep', './imgs/sweep.png'),
  new Photo('tauntaun', './imgs/tauntaun.jpg'),
  new Photo('unicorn', './imgs/unicorn.jpg'),
  new Photo('usb', './imgs/usb.gif'),
  new Photo('water-can', './imgs/water-can.jpg'),
  new Photo('wine-glass', './imgs/wine-glass.jpg'),

];



var firstOption = document.getElementById('firstOption');
var secondOption = document.getElementById('secondOption');
var thirdOption = document.getElementById('thirdOption');

var firstImg = document.getElementById('firstImg');
var secondImg = document.getElementById('secondImg');
var thirdImg = document.getElementById('thirdImg');

var clicksLeft = 25;

firstImg.addEventListener('click', clickFirstImg);
secondImg.addEventListener('click', clickSecondImg);
thirdImg.addEventListener('click', clickThirdImg);



function clickFirstImg() {
  photos[firstRand].clickCount++;
  generateRandomPhoto();
  clicksLeft--;
}

function clickSecondImg(){
  photos[secondRand].clickCount++;
  generateRandomPhoto();
  clicksLeft--;
}

function clickThirdImg(){
  photos[thirdRand].clickCount++;
  generateRandomPhoto();
  clicksLeft--;
}


function generateRandomIndex() {
  var randomIndex = Math.floor(Math.random() * photos.length);
  return randomIndex;
}

var firstRand, secondRand, thirdRand;


function generateRandomPhoto() {
  firstRand = generateRandomIndex();
  console.log(firstRand);
  secondRand = generateRandomIndex();

  while(firstRand === secondRand) {
    secondRand = generateRandomIndex();
  }
  thirdRand = generateRandomIndex();

  while(thirdRand === firstRand || thirdRand === secondRand){
    thirdRand = generateRandomIndex();
  }
  firstImg.src = photos[firstRand].fileLocation;
  secondImg.src = photos[secondRand].fileLocation;
  thirdImg.src = photos[thirdRand].fileLocation;

}

generateRandomPhoto();
