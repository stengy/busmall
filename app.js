'use strict'

console.log('lets goooo');
var firstOption = document.getElementById('firstOption');
var secondOption = document.getElementById('secondOption');
var thirdOption = document.getElementById('thirdOption');

var catalogProducts = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function voteTheseProducts(name, fileLocation, displayCount, numberClicks) {
  this.name = name;
  this.fileLocation = fileLocation;
  this.displayCount = 0;
  this.numberClicks = 0;
}

voteTheseProducts.prototype.generateRandomPhoto = function() {
  this.name = catalogProducts[Math.floor(Math.random() * catalogProducts.length)];

  this.fileLocation = '<img src="imgs/' + this.name + '" />';

};

var test = new voteTheseProducts();
test.generateRandomPhoto();




// function selectVotePhoto() {
//   var randomPhoto = catalogProducts[Math.floor(Math.random() * catalogProducts.length)];
//    return randomPhoto;
// }

// firstOption.innerHTML = '<img src="imgs/' + selectVotePhoto() + '" />';
// secondOption.innerHTML = '<img src="imgs/' + selectVotePhoto() + '" />';
// thirdOption.innerHTML = '<img src="imgs/' + selectVotePhoto() +'" />';

var numClicks = 0;
function clickCounter() {

}
