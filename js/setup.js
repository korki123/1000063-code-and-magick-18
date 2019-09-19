'use strict';

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WISARD_COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var numberOfPlayers = 4;

var selectedWizardNames = function () {

  for (var i = 0; i < numberOfPlayers; i++) {

    var randNames = Math.floor(Math.random() * WIZARD_NAMES.length);
    console.log(WIZARD_NAMES[randNames]);

    var randSurnames = Math.floor(Math.random() * WIZARD_SURNAMES.length);
    console.log(WIZARD_SURNAMES[randSurnames]);

    var randCoatColors = Math.floor(Math.random() * WISARD_COAT_COLORS.length);
    console.log(WISARD_COAT_COLORS[randCoatColors]);

    var randEyesColor = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);
    console.log(WIZARD_EYES_COLOR[randEyesColor]);

    var wizardReady = [];

    for (var j = 0; j < numberOfPlayers; j++) {
      wizardReady.push({
        name: WIZARD_NAMES[j],
        surname: WIZARD_SURNAMES[j],
        coat: WISARD_COAT_COLORS[j],
        eye: WIZARD_EYES_COLOR[j],
      });
    }

    WIZARD_NAMES.splice(randNames, 1);
    WIZARD_SURNAMES.splice(randSurnames, 1);
    WISARD_COAT_COLORS.splice(randCoatColors, 1);
    WIZARD_EYES_COLOR.splice(randEyesColor, 1);
  }

  return wizardReady;
  console.log(wizardReady);

};

console.log(selectedWizardNames());
