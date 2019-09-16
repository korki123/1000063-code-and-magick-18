'use strict';

var AREA_WIDTH = 420;
var AREA_HEIGHT = 270;
var AREA_X = 100;
var AREA_Y = 10;
var AREA_SHADOW_X = 110;
var AREA_SHADOW_Y = 20;
var COLUMN_WIDTH = 40;
var GAP = 50;
var TEXT_FONTS = '14px PT Mono';
var COLOR_BLACK = 'rgb(0, 0, 0)';

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

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(AREA_SHADOW_X, AREA_SHADOW_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(AREA_X, AREA_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = COLOR_BLACK;
  ctx.font = TEXT_FONTS;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 20);
  ctx.fillText('Список результатов:', 150, 35);

  for (var i = 0; i < times.length; i++) {

    var colorColumn = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : paintRandom(names);

    var columnHeight = 150 / getMaxTimes(times);

    ctx.fillStyle = colorColumn;
    ctx.fillRect(150 + i * (COLUMN_WIDTH + GAP), 90 + (150 - columnHeight * times[i]), COLUMN_WIDTH, columnHeight * times[i]);

    var columnNames = 150 + i * (COLUMN_WIDTH + GAP);
    ctx.fillStyle = COLOR_BLACK;
    ctx.font = TEXT_FONTS;
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], columnNames, 255);

    var gameTimes = 70 + (150 - columnHeight * times[i]);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = TEXT_FONTS;
    ctx.fillText(times[i], columnNames, gameTimes);
  }
};
