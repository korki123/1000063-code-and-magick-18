'use strict';

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WISARD_COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_OF_PLAYERS = 4;

var selectedWizard = function (random) {
  var randNames = Math.floor (Math.random() * random.length);
  return random [randNames];
  random.splice (random, 1);
};

var wizardReady = [];

for (var i = 0; i < NUMBER_OF_PLAYERS; i++) {
  wizardReady.push ({
    name: selectedWizard(WIZARD_NAMES),
    surname: selectedWizard(WIZARD_SURNAMES),
    coat: selectedWizard(WISARD_COAT_COLORS),
    eye: selectedWizard(WIZARD_EYES_COLOR),
  });
}
console.log(wizardReady);
