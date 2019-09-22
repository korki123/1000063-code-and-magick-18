'use strict';

var SHOW_SETUP = document.querySelector('.setup');
SHOW_SETUP.classList.remove('hidden');

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_OF_PLAYERS = 4;

var getRandomNames = function (random) {
  var randomNames = Math.floor(Math.random() * random.length);
  return random.splice(randomNames, 1);
};

var prepareWizardsList = function () {
  var wizards = [];

  for (var i = 0; i < NUMBER_OF_PLAYERS; i++) {
    wizards.push({
      name: getRandomNames(WIZARD_NAMES),
      surname: getRandomNames(WIZARD_SURNAMES),
      coat: getRandomNames(WIZARD_COAT_COLORS),
      eye: getRandomNames(WIZARD_EYES_COLOR),
    });
  }
  return wizards;
  // console.log(wizards);
};

// console.log(prepareWizardsList);

var SETUP_SIMILAR = document.querySelector('.setup-similar');

SETUP_SIMILAR.classList.remove('hidden');

var SETUP_SIMILAR_LIST = document.querySelector('.setup-similar-list');
var SETUP_SIMILAR_ITEM = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var j = 0; j < NUMBER_OF_PLAYERS; j++) {
  var vizardItem = SETUP_SIMILAR_ITEM.cloneNode(true);

  vizardItem.querySelector('.wizard-coat').style.fill = prepareWizardsList()[j].coat;
  vizardItem.querySelector('.wizard-head').style.fill = prepareWizardsList()[j].coat;
  vizardItem.querySelector('.wizard-eyes').style.fill = prepareWizardsList()[j].eye;
  vizardItem.querySelector('.setup-similar-label').textContent = prepareWizardsList()[j].name + prepareWizardsList()[j].surname;

  SETUP_SIMILAR_LIST.appendChild(vizardItem);
}
