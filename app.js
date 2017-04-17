'use strict'

console.log('lets goooo');


var catalogProducts = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg'];

var firstOption = document.getElementById('firstOption');
var secondOption = document.getElementById('secondOption');
var thirdOption = document.getElementById('thirdOption');

function selectVotePhoto() {
  var randomPhoto = catalogProducts[Math.floor(Math.random() * catalogProducts.length)];
   return randomPhoto;
}

firstOption.innerHTML = '<img src="imgs/' + selectVotePhoto() + '" />';
secondOption.innerHTML = '<img src="imgs/' + selectVotePhoto() + '" />';
thirdOption.innerHTML = '<img src="imgs/' + selectVotePhoto() +'" />';
