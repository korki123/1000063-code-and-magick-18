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

var getRandomNames = function (random) {
  var randomNumber = Math.floor(Math.random() * random.length);
  return random.splice(randomNumber, 1);
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
};

var renderWizards = function () {

  var fragment = document.createDocumentFragment();
  var wizardsCollect = prepareWizardsList();

  for (var j = 0; j < NUMBER_OF_PLAYERS; j++) {
    var vizardItem = SETUP_SIMILAR_ITEM.cloneNode(true);

    vizardItem.querySelector('.wizard-coat').style.fill = wizardsCollect[j].coat;
    vizardItem.querySelector('.wizard-head').style.fill = wizardsCollect[j].coat;
    vizardItem.querySelector('.wizard-eyes').style.fill = wizardsCollect[j].eye;
    vizardItem.querySelector('.setup-similar-label').textContent = wizardsCollect[j].name + wizardsCollect[j].surname;

    fragment.appendChild(vizardItem);
  }

  SETUP_SIMILAR_LIST.appendChild(fragment);

  SHOW_SETUP.classList.remove('hidden');
  SETUP_SIMILAR.classList.remove('hidden');

  return SETUP_SIMILAR;
};

renderWizards();
