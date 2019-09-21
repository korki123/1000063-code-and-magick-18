'use strict';

var SHOW_SETUP = document.querySelector('.setup');
SHOW_SETUP.classList.remove('hidden');

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_OF_PLAYERS = 4;
var SETUP_SIMILAR = document.querySelector('.setup-similar');
var SETUP_SIMILAR_LIST = document.querySelector('.setup-similar-list');
var SETUP_SIMILAR_ITEM = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var selectedWizard = function (random) {
  var randNames = Math.floor(Math.random() * random.length);
  return random.splice(randNames, 1);
};

var wizardReady = [];

for (var i = 0; i < NUMBER_OF_PLAYERS; i++) {
  wizardReady.push({
    name: selectedWizard(WIZARD_NAMES),
    surname: selectedWizard(WIZARD_SURNAMES),
    coat: selectedWizard(WIZARD_COAT_COLORS),
    eye: selectedWizard(WIZARD_EYES_COLOR),
  });
}
// console.log(wizardReady);
var fragment = document.createDocumentFragment();

for (var j = 0; j < NUMBER_OF_PLAYERS; j++) {
  var vizardItem = SETUP_SIMILAR_ITEM.cloneNode(true);

  vizardItem.querySelector('.wizard-coat').style.fill = wizardReady[j].coat;
  vizardItem.querySelector('.wizard-eyes').style.fill = wizardReady[j].eye;
  vizardItem.querySelector('.setup-similar-label').textContent = wizardReady[j].name + wizardReady[j].surname;

  fragment.appendChild(vizardItem);
}

SETUP_SIMILAR_LIST.appendChild(fragment);

SETUP_SIMILAR.classList.remove('hidden');
