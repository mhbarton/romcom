// Create variables targetting the relevant DOM elements here 👇


//randomizer variables.
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')

// pages
var mainCoverPage = document.querySelector('.main-cover')
var formPage = document.querySelector('.form-view')
var savedCoversPage = document.querySelector('.saved-view')

//inputs for makeMyBook
var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')
var descriptor1Input = document.querySelector('.user-desc1')
var descriptor2Input = document.querySelector('.user-desc2')

// buttons
var buttonHome = document.querySelector('.home-button')
var buttonSave = document.querySelector('.save-cover-button')
var buttonViewSaved = document.querySelector('.view-saved-button')
var buttonMake = document.querySelector('.make-new-button')
var buttonRandom = document.querySelector('.random-cover-button')
var buttonMakeMyBook = document.querySelector('.create-new-book-button')


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover();

// Add your event listeners here 👇
window.addEventListener('load', randomizeCover);
buttonRandom.addEventListener('click', randomizeCover);
buttonMake.addEventListener('click', seeCreationForm);
buttonViewSaved.addEventListener('click', seeSavedCovers);
buttonHome.addEventListener('click', seeHome);
buttonMakeMyBook.addEventListener('click', makeMyBook)

// Create your event handlers and other functions here 👇
// console.log(homePage);
function makeMyBook(){
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value, descriptor2Input.value);
}

function seeHome (){
  mainCoverPage.classList.remove('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  buttonRandom.classList.remove('hidden');
  buttonSave.classList.remove('hidden');
  buttonHome.classList.add('hidden')
}

function seeCreationForm(){
    formPage.classList.remove('hidden');
    buttonHome.classList.remove('hidden');
    savedCoversPage.classList.toggle('hidden');
    mainCoverPage.classList.add('hidden');
    buttonRandom.classList.add('hidden');
    buttonSave.classList.add('hidden');
}

function seeSavedCovers(){
  savedCoversPage.classList.remove('hidden');
  buttonHome.classList.remove('hidden');
  formPage.classList.add('hidden');
  mainCoverPage.classList.add('hidden');
  buttonRandom.classList.add('hidden');
  buttonSave.classList.add('hidden');
}

//
// function toggleForms() {
//   mainCoverPage.classList.add('hidden');
//   buttonRandom.classList.add('hidden');
//   buttonSave.classList.add('hidden');
//   buttonHome.classList.remove('hidden');
// }



//
//   function switchViews(){
//     if (buttCreate)
//   buttonCreate.setAttribute("hidden");
//   buttonCreate.removeAttribute("hidden")
//   // buttonCreate.setAttribute( "");
// }

  function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  return coverTitle.innerHTML = currentCover.title, coverTagline1.innerHTML = currentCover.tagline1, coverTagline2.innerHTML = currentCover.tagline2, coverImage.src = currentCover.cover
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
