'use strict';

var AREA_WIDTH = 420;
var AREA_HEIGHT = 270;
var AREA_X = 100;
var AREA_Y = 10;
var AREA_SHADOW_X = 110;
var AREA_SHADOW_Y = 20;
var COLUMN_WIDTH = 40;
var MAX_COLUMN_HEIGHT = 150;
var LOCATION_X = 150;
var LOCATION_Y_WINNER = 20;
var LOCATION_Y_RESULT = 35;
var LOCATION_Y_GAMERS_ROW = 255;
var GAP = 50;
var OFFSET_Y_GAMERS_TIMES = 70;
var TEXT_FONTS = '14px PT Mono';
var COLOR_BLACK = 'rgb(0, 0, 0)';
var COLOR_WHITE = 'rgb(255, 255, 255)';
var MAIN_COLOR = 'rgba(255, 0, 0, 1)';
var COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';

var getMaxTimes = function (times) {
  var maxTime = 0;

  for (var i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);

    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

var paintRandom = function (names) {
  for (var i = 0; i < names.length; i++) {
    var gamersColors = [i];
    gamersColors[i] = names[i];
  }
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = COLOR_SHADOW;
  ctx.fillRect(AREA_SHADOW_X, AREA_SHADOW_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = COLOR_WHITE;
  ctx.fillRect(AREA_X, AREA_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = COLOR_BLACK;
  ctx.font = TEXT_FONTS;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', LOCATION_X, LOCATION_Y_WINNER);
  ctx.fillText('Список результатов:', LOCATION_X, LOCATION_Y_RESULT);

  for (var i = 0; i < times.length; i++) {

    var colorColumn = names[i] === 'Вы' ? MAIN_COLOR : paintRandom(names);

    var columnHeight = MAX_COLUMN_HEIGHT / getMaxTimes(times);

    ctx.fillStyle = colorColumn;
    ctx.fillRect(LOCATION_X + i * (COLUMN_WIDTH + GAP), COLUMN_WIDTH + GAP + (MAX_COLUMN_HEIGHT - columnHeight * times[i]), COLUMN_WIDTH, columnHeight * times[i]);

    var columnNames = LOCATION_X + i * (COLUMN_WIDTH + GAP);
    ctx.fillStyle = COLOR_BLACK;
    ctx.font = TEXT_FONTS;
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], columnNames, LOCATION_Y_GAMERS_ROW);

    var gameTimes = OFFSET_Y_GAMERS_TIMES + (LOCATION_X - columnHeight * times[i]);
    ctx.fillStyle = COLOR_BLACK;
    ctx.font = TEXT_FONTS;
    ctx.fillText(times[i], columnNames, gameTimes);
  }
};
