'use strict';

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WISARD_COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var numberOfPlayers = 4;

var selectedWizardNames = function () {

  for (WIZARD_NAMES.length; WIZARD_NAMES.length > numberOfPlayers; WIZARD_NAMES.length += 0) {

    var randNames = Math.floor(Math.random() * WIZARD_NAMES.length);
    WIZARD_NAMES.splice(randNames, 1);
  }

  for (WIZARD_SURNAMES.length; WIZARD_SURNAMES.length > numberOfPlayers; WIZARD_SURNAMES.length += 0) {
    var randSurnames = Math.floor(Math.random() * WIZARD_SURNAMES.length);
    WIZARD_SURNAMES.splice(randSurnames, 1);
  }

  for (WISARD_COAT_COLORS.length; WISARD_COAT_COLORS.length > numberOfPlayers; WISARD_COAT_COLORS.length += 0) {
    var randCoatColors = Math.floor(Math.random() * WISARD_COAT_COLORS.length);
    WISARD_COAT_COLORS.splice(randCoatColors, 1);
  }

  for (WIZARD_EYES_COLOR.length; WIZARD_EYES_COLOR.length > numberOfPlayers; WIZARD_EYES_COLOR.length += 0) {
    var randEyesColor = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);
    WIZARD_EYES_COLOR.splice(randEyesColor, 1);
  }

  // console.log('имена ' + WIZARD_NAMES + '; фамилии ' + WIZARD_SURNAMES + '; плащи ' + WISARD_COAT_COLORS + '; глаза' + WIZARD_EYES_COLOR);

  var wizardReady = [];

  for (var i = 0; i < numberOfPlayers; i++) {
    wizardReady[i] = {
      name: WIZARD_NAMES[i],
      surname: WIZARD_SURNAMES[i],
      coat: WISARD_COAT_COLORS[i],
      eye: WIZARD_EYES_COLOR[i],
    };
  }

  return wizardReady;
};

// console.log(selectedWizardNames());
