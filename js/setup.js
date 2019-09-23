'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_PLAYERS = 4;

var SHOW_SETUP = document.querySelector('.setup');
var SETUP_SIMILAR = document.querySelector('.setup-similar');
var SETUP_SIMILAR_LIST = document.querySelector('.setup-similar-list');
var SETUP_SIMILAR_ITEM = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomItem = function (random) {
  var randomNumber = Math.floor(Math.random() * random.length);
  return random.splice(randomNumber, 1);
};

var prepareWizardsList = function () {
  var wizards = [];
  var name = WIZARD_NAMES;
  var surnames = WIZARD_SURNAMES;
  var coatColor = WIZARD_COAT_COLORS;
  var eyesColor = WIZARD_EYES_COLOR;

  for (var i = 0; i < NUMBER_OF_PLAYERS; i++) {
    wizards.push({
      name: getRandomItem(name),
      surname: getRandomItem(surnames),
      coat: getRandomItem(coatColor),
      eye: getRandomItem(eyesColor),
    });
  }
  return wizards;
};

var renderWizards = function () {

  var fragment = document.createDocumentFragment();
  var wizards = prepareWizardsList();

  for (var j = 0; j < NUMBER_OF_PLAYERS; j++) {
    var element = SETUP_SIMILAR_ITEM.cloneNode(true);

    element.querySelector('.wizard-coat').style.fill = wizards[j].coat;
    element.querySelector('.wizard-head').style.fill = wizards[j].coat;
    element.querySelector('.wizard-eyes').style.fill = wizards[j].eye;
    element.querySelector('.setup-similar-label').textContent = wizards[j].name + wizards[j].surname;

    fragment.appendChild(element);
  }

  SETUP_SIMILAR_LIST.appendChild(fragment);

  SHOW_SETUP.classList.remove('hidden');
  SETUP_SIMILAR.classList.remove('hidden');
};

renderWizards();
