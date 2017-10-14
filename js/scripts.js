//Populate Year options for Date of Birth dropdown menu
(() => {
  var year = (new Date()).getFullYear() - 1,
      birthYearDropdown = document.querySelectorAll('.form-dropdowns__dropdown')[2];

  for (var i = 99; i >= 0; i--) {
    let newOption = document.createElement('option');
    newOption.setAttribute('label', year);
    newOption.setAttribute('value', "number:" + year);
    newOption.innerHTML = i;
    birthYearDropdown.appendChild(newOption);
    year--;
  }
})();


//Sort between 28, 30, or 31 days for Month dropdown
let populateDaysDropdown = () => {
  let daysInMonth = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
      month = document.querySelectorAll('.form-dropdowns__dropdown')[0].value.slice(7),
      birthDayDropdown = document.querySelectorAll('.form-dropdowns__dropdown')[1]; 
      numDays = birthDayDropdown.children.length;
      console.log(month);

  while (numDays > 1){
    birthDayDropdown.removeChild(birthDayDropdown.childNodes[numDays+1]);
    numDays--;
  }

  let firstOption = document.createElement('option');
  firstOption.setAttribute('label', i);
  firstOption.setAttribute('value', "?");
  firstOption.innerHTML = i;
  for (var i = 1; i <= daysInMonth[month-1]; i++){
    let newOption = document.createElement('option');
    newOption.setAttribute('label', i);
    newOption.setAttribute('value', "number:" + i);
    newOption.innerHTML = i;
    birthDayDropdown.appendChild(newOption);
  }
};


//Play "BL For Gamers" video on section click
let videoContainer = document.querySelector('.video-container'),
    videoOverlay = document.querySelector('.overlay'),
    videoBait = document.querySelector('.video-container__bait'),
    videoCallToAction = document.querySelector('.video-cta');
    blExplainer = document.querySelector('.video-container__iframe');
    

videoContainer.addEventListener('click', () => {
  videoOverlay.style.display = 'none';
  videoBait.style.display = 'none';
  videoCallToAction.style.display = 'none';

  blExplainer.setAttribute('src','https://www.youtube.com/embed/3qMqpHPdOqs?rel=0&autoplay=1');
}, false);


//Facebook sharing
document.querySelector('.sharing__link--facebook').onclick = function() {
  FB.ui({
    method: 'share',
    display: 'popup',
    mobile_iframe: true,
    href: 'https://brightlocker.com',
  }, function(response){});
}


