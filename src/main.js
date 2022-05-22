var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')
var homeView = document.querySelector('.home-view')
var mainCoverPage = document.querySelector('.main-cover')
var formPage = document.querySelector('.form-view')
var savedCoversPage = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')
var miniCover = document.querySelector('.mini-cover');
var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')
var descriptor1Input = document.querySelector('.user-desc1')
var descriptor2Input = document.querySelector('.user-desc2')
var buttonHome = document.querySelector('.home-button')
var buttonSave = document.querySelector('.save-cover-button')
var buttonViewSaved = document.querySelector('.view-saved-button')
var buttonMake = document.querySelector('.make-new-button')
var buttonRandom = document.querySelector('.random-cover-button')
var buttonMakeMyBook = document.querySelector('.create-new-book-button')
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(cover, title, descriptor1, descriptor2);

window.addEventListener('load', randomizeCover);
buttonRandom.addEventListener('click', randomizeCover);
buttonMake.addEventListener('click', seeForm);
buttonViewSaved.addEventListener('click', seeSavedCovers);
buttonHome.addEventListener('click', seeHome);
buttonMakeMyBook.addEventListener('click', makeMyBook);
buttonSave.addEventListener('click', saveCustomCover);
savedCoversSection.addEventListener('dblclick', deleteSavedCovers);

function deleteSavedCovers(event){
  for(var i = 0; i < savedCovers.length; i++){
    if(savedCovers[i].id == event.target.id){
    savedCovers.splice(i, 1);
    }
  }
  seeSavedCovers();
};

function makeMyBook(event){
  event.preventDefault();
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value, descriptor2Input.value);
  currentCover = new Cover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value);
  buttonHome.classList.add('hidden');
  buttonRandom.classList.remove('hidden');
  homeView.classList.remove('hidden');
  formPage.classList.add('hidden');
  buttonSave.classList.remove('hidden');
  coverTitle.innerHTML = currentCover.title, coverTagline1.innerHTML = currentCover.tagline1, coverTagline2.innerHTML = currentCover.tagline2, coverImage.src = currentCover.cover
  seeHome();
};

function seeHome(){
  homeView.classList.remove('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  buttonRandom.classList.remove('hidden');
  buttonSave.classList.remove('hidden');
  buttonHome.classList.add('hidden')
};

function seeForm(){
  formPage.classList.remove('hidden');
  buttonHome.classList.remove('hidden');    savedCoversPage.classList.toggle('hidden');
  homeView.classList.add('hidden');
  buttonRandom.classList.add('hidden');    buttonSave.classList.add('hidden');
  document.querySelector('form').reset();
};

function saveCustomCover(){
  if(!savedCovers.includes(currentCover)){
    savedCovers.push(currentCover);
  }
};

function seeSavedCovers(){
  savedCoversPage.classList.remove('hidden');
  buttonHome.classList.remove('hidden');
  formPage.classList.add('hidden');
  homeView.classList.add('hidden');
  buttonRandom.classList.add('hidden');
  buttonSave.classList.add('hidden');
  savedCoversSection.innerHTML = '';
  for(var i = 0; i < savedCovers.length; i++){
    if(!savedCovers.includes(savedCovers)){
      savedCoversSection.innerHTML +=
      `<section class = "mini-cover">
      <img class="cover-image" id = "${savedCovers[i].id}" src="${savedCovers[i].cover}">
      <h2 class="cover-title" > ${savedCovers[i].title} </h2>
      <h3 class="tagline">A tale of <span class="tagline-1" >${savedCovers[i].tagline1}</span> and <span class="tagline-2" >${savedCovers[i].tagline2}</span></h3>
      </section>`
    } else {
      savedCovers.splice(savedCovers.indexOf(savedCovers))
    }
  }
};

function randomizeCover(){
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  return coverTitle.innerHTML = currentCover.title, coverTagline1.innerHTML = currentCover.tagline1, coverTagline2.innerHTML = currentCover.tagline2, coverImage.src = currentCover.cover
};

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
};
