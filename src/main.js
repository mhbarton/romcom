// Create variables targetting the relevant DOM elements here 👇
var overall = document.querySelector('.main-cover')
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')


var buttonHome = document.querySelector('.home-button')
var buttonRandom = document.querySelector('.random-cover-button')
var buttonSave = document.querySelector('.save-cover-button')
var buttonView = document.querySelector('.view-saved-button')
var buttonCreate = document.querySelector('.make-new-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover();


// Add your event listeners here 👇
window.addEventListener('load', randomizeCover);
buttonRandom.addEventListener('click', randomizeCover);


// Create your event handlers and other functions here 👇

  function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  return coverTitle.innerHTML = currentCover.title, coverTagline1.innerHTML = currentCover.tagline1, coverTagline2.innerHTML = currentCover.tagline2, coverImage.src = currentCover.cover
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
