'use strict';

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WISARD_COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var selectedWizardNames = function () {

  for (WIZARD_NAMES.length; WIZARD_NAMES.length > 4; WIZARD_NAMES.length += 0) {

    var rand = Math.floor(Math.random() * WIZARD_NAMES.length);
    WIZARD_NAMES.splice(rand, 1);
  }
  return WIZARD_NAMES;
};
console.log(selectedWizardNames());

var selectedWizardNamesSurnames = function () {

  for (WIZARD_SURNAMES.length; WIZARD_SURNAMES.length > 4; WIZARD_SURNAMES.length += 0) {

    var rand = Math.floor(Math.random() * WIZARD_SURNAMES.length);
    WIZARD_SURNAMES.splice(rand, 1);
  }

  return WIZARD_SURNAMES;
};
console.log(selectedWizardNamesSurnames());


var selectedWisardCoatColors = function () {

  for (WISARD_COAT_COLORS.length; WISARD_COAT_COLORS.length > 4; WISARD_COAT_COLORS.length += 0) {

    var rand = Math.floor(Math.random() * WISARD_COAT_COLORS.length);
    WISARD_COAT_COLORS.splice(rand, 1);
  }

  return WISARD_COAT_COLORS;
};
console.log(selectedWisardCoatColors());

var selectedWizardEyesColor = function () {

  for (WIZARD_EYES_COLOR.length; WIZARD_EYES_COLOR.length > 4; WIZARD_EYES_COLOR.length += 0) {

    var rand = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);
    WIZARD_EYES_COLOR.splice(rand, 1);
  }

  return WIZARD_EYES_COLOR;
};
console.log(selectedWizardEyesColor());

var wizard = {
  wizardCoat: selectedWisardCoatColors,
  wizardEyes: selectedWizardEyesColor,
  wizardName: selectedWizardNames,
  wizardSurname: selectedWizardNamesSurnames,
};
console.log(wizard);
