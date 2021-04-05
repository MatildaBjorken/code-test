//spara i localstorage

names = JSON.parse(localStorage.getItem('locname') || '[]');

const saveData = function () {
  const greetUser = document.getElementById('greet-user');
  const showImage = document.querySelector('.modal-wrap');
  let data = document.getElementById('name').value.toLowerCase();

  if (names.length == 0) {
    names.push('Hejpa', 'Dejpa');
  }

  if (data.length == 0) {
    greetUser.textContent = 'ajabajaa, skiv ditt namn ;-) ';
    return false;
  }

  let found = false;
  let i;
  for (i = 0; i < names.length; i++) {
    if (data == names[i]) {
      found = true;
    }
  }
  if (found) {
    greetUser.innerHTML = `välkommen tillbaka <span class="name-input ">${data}</span>`;
    modalBtn.style.visibility = 'visible';
    showImage.innerHTML =
      '<img src="./images/vi-mots-igen.png" alt="bild av händer" class="hands-two">';
  } else {
    names.push(data);
    greetUser.innerHTML = `välkommen <span class="name-input" class="hands">${data}</span>`;
    modalBtn.style.visibility = 'visible';
    showImage.innerHTML =
      '<img src="./images/trevligt-att-traffas.png" alt="bild av händer" class="hands">';
  }
  localStorage.setItem('locname', JSON.stringify(names));
};

const submitName = document.querySelector('.submit');
submitName.onclick = saveData;

//localStorage.clear();

//visa användaren och dölj den första modalen

submitName.addEventListener('click', function () {
  document.querySelector('.nextmodal').style.display = 'block';
  document.querySelector('.card').style.display = 'none';
});

const GoBack = document.querySelector('.go-back');

GoBack.addEventListener('click', function () {
  document.querySelector('.nextmodal').style.display = 'none';
  document.querySelector('.card').style.display = 'block';
});

//visa bubblorna

var num = 20;
var modalBtn = document.querySelector('.open');
var modalContainer = document.querySelector('.modals');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.classList.add('modal-drop');
  div.style.top = Math.floor(Math.random() * 100) + 'vh';
  div.style.left = Math.floor(Math.random() * 100) + 'vw';
  div.style.bottom = Math.floor(Math.random() * 100) + 'vh';
  div.style.right = Math.floor(Math.random() * 100) + 'vw';
  div.style.transitionDelay = Math.random() + 's';
  holdModals.appendChild(div);
}
modalContainer.appendChild(holdModals);

//visa bild

modalBtn.addEventListener('click', function () {
  modalContainer.style.display = 'block';
  window.setTimeout(function () {
    modalContainer.classList.add('active');
  }, 100);
});

