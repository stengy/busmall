'use strict';

var app = document.getElementById('app');
var clicksRemaining = 25;
var secondToLastPhotos = [];
var previousPhotos = [];
var displayedPhotos = [];

var photos = [
  new Photo('bag head', 'bag.jpg'),
  new Photo('banana chopper', 'banana.jpg'),
  new Photo('bathroom party', 'bathroom.jpg'),
  new Photo('rain boots', 'boots.jpg'),
  new Photo('breakfast', 'breakfast.jpg'),

  new Photo('bubblegum', 'bubblegum.jpg'),
  new Photo('chair', 'chair.jpg'),
  new Photo('cthulhu', 'cthulhu.jpg'),
  new Photo('dog-duck', 'dog-duck.jpg'),
  new Photo('dragon', 'dragon.jpg'),

  new Photo('pen', 'pen.jpg'),
  new Photo('pet-sweep', 'pet-sweep.jpg'),
  new Photo('scissors', 'scissors.jpg'),
  new Photo('shark in the dark', 'shark.jpg'),
  new Photo('tauntaun', 'tauntaun.jpg'),

  new Photo('sweep', 'sweep.png'),
  new Photo('unicorn', 'unicorn.jpg'),
  new Photo('usb', 'usb.gif'),
  new Photo('water-can', 'water-can.jpg'),
  new Photo('wine-glass', 'wine-glass.jpg'),
];

renderPhotoChoices();



// make a constructor for photo
function Photo(name, filename){
  this.name = name;
  this.src = './assets/' + filename;
  this.clickCount = 0;
  this.displayCount = 0;
}

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}

// get three random photos
function generateRandomPhotos(){
  photos = photos.concat(secondToLastPhotos);
  secondToLastPhotos = previousPhotos;
  previousPhotos = displayedPhotos;
  displayedPhotos = [];

  // create a var nextPhoto to keep track of the next Photo we take out of photos
  // splice out an photo object (wich removes it from photos)
  var nextPhoto = photos.splice(getRandomIndex(photos), 1);
  // concat the array returned by splice onto photos onScreen
  displayedPhotos = displayedPhotos.concat(nextPhoto);
  // repeat two more times to get three images
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  displayedPhotos = displayedPhotos.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  displayedPhotos = displayedPhotos.concat(nextPhoto);
}

function handlePhotoClick(event){
  var image = event.target;
  var displayedPhotosIndex = image.getAttribute('photos-on-screen-index');
  displayedPhotos[displayedPhotosIndex].clickCount++;
  // console.log('photoClicked', displayedPhotos[displayedPhotosIndex]);

  clicksRemaining--;
  // console.log('clicksRemaining', clicksRemaining);
  if (clicksRemaining > 0){
    renderPhotoChoices();
  } else {
    renderChart();
  }
}

function renderPhotoChoices(){
  // get three new photos
  generateRandomPhotos();

  // empty out the app div
  app.textContent = '';

  // re populate the app div
  var imageElement;
  for(var i=0; i < displayedPhotos.length; i++){
    // incrament
    displayedPhotos[i].displayCount++;

    // create the img element
    imageElement = document.createElement('img');
    // set its source
    imageElement.src = displayedPhotos[i].src;
    // set an atribute for use later in the event handler
    // that tracks which photo object in photosOnScree to
    // incrament clicks on
    imageElement.setAttribute('photos-on-screen-index', i);
    // add event listener
    imageElement.addEventListener('click', handlePhotoClick);
    // render to page
    app.appendChild(imageElement);
  }
}

function renderChart(){
  // refill photos array with the photo objects we took
  // during generateRandomPhotos
  photos = photos.concat(displayedPhotos);
  photos = photos.concat(previousPhotos);
  photos = photos.concat(secondToLastPhotos);

  // empty out the app div
  app.textContent = '';

  var canvas = document.createElement('canvas');
  canvas.width = app.clientWidth;
  canvas.height = app.clientWidth;
  app.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 50, 50);

  // create a data object to make a chart
  var data = {
    labels: [],
    datasets: [
      {
        label: 'click count',
        data: [],
      },
      {
        label: 'display count',
        data: [],
      },
    ],
  };

  var currentPhoto;
  for(var i=0; i< photos.length; i++){
    currentPhoto = photos[i];
    data.labels.push(currentPhoto.name);
    data.datasets[0].data.push(currentPhoto.clickCount);
    data.datasets[1].data.push(currentPhoto.displayCount);
  }

  new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}
