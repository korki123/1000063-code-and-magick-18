'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_PLAYERS = 4;

// var SHOW_SETUP = document.querySelector('.setup');
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

var renderWizards = function (wizards) {

  var fragment = document.createDocumentFragment();
  wizards = wizards.forEach(function (wizard) {
    var wizardItem = SETUP_SIMILAR_ITEM.cloneNode(true);

    wizardItem.querySelector('.wizard-coat').style.fill = wizard.coat;
    wizardItem.querySelector('.wizard-head').style.fill = wizard.coat;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eye;
    wizardItem.querySelector('.setup-similar-label').textContent = wizards.name + wizards.surname;

    fragment.appendChild(wizardItem);
  });

  SETUP_SIMILAR_LIST.appendChild(fragment);

  // SHOW_SETUP.classList.remove('hidden');
  SETUP_SIMILAR.classList.remove('hidden');

  return SETUP_SIMILAR;
};

renderWizards(prepareWizardsList());

// +++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onCloseEsc = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    onClosedSetupClick();
  }
};

var onOpenSetupClick = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onCloseEsc);
};

var onOpenEnterKeycode = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onOpenSetupClick();
  }
};
// ============= открыть окно ================================

var openSetupWindows = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');

openSetupWindows.addEventListener('click', onOpenSetupClick);

openSetupWindows.addEventListener('keydown', onOpenEnterKeycode);

// ============= закрыть окно ================================

var onClosedSetupClick = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onCloseEsc);
};

var closeSetupWindow = document.querySelector('.setup-close');

closeSetupWindow.addEventListener('click', onClosedSetupClick);
closeSetupWindow.addEventListener('keydown', onClosedSetupClick);

// ============= input ================================


var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('keydown', function (etv) {
  if (etv.keyCode === ESC_KEYCODE) {
    document.removeEventListener('keydown', onCloseEsc);
  }
});

// userNameInput.removeEventListener('keydown', onCloseEsc);

// var onUserInput = function () {
//   setup.classList.remove('hidden');
//   document.addEventListener('keydown', onCloseEsc);
// };

// ============= отправка формы ================================

// var sendButton = setup.querySelector('.setup-submit');
// var wizardForm = setup.querySelector('.setup-wizard-form');
//
// var onSendSubmitButton = function() {
//   if (sendButton === ENTER_KEYCODE) {
//       wizardForm.addEventListener('submit', function(evt))
//   }
// }
//
// sendButton.addEventListener('submit', onSendSubmitButton);
//


// ============= мантия ================================

// var wizardCustomCoat = document.querySelector('.wizard-coat');
// wizardCustomCoat.addEventListener('click', function(evt) {
//   evt.style.fill = rgb(101, 137, 164)'.coat;
// });
