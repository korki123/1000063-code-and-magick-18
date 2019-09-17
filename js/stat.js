'use strict';

var AREA_WIDTH = 420;
var AREA_HEIGHT = 270;
var AREA_X = 100;
var AREA_Y = 10;
var OFFSET_EDGE_X = 10;
var OFFSET_EDGE_Y = 10;
var AREA_SHADOW_X = AREA_X + OFFSET_EDGE_X;
var AREA_SHADOW_Y = AREA_Y + OFFSET_EDGE_Y;
var COLUMN_WIDTH = 40;
var MAX_COLUMN_HEIGHT = 150;
var LOCATION_X = 150;
var LOCATION_Y_WINNER = 20;
var LOCATION_Y_RESULT = 35;
var LOCATION_Y_GAMERS_ROW = 255;
var GAP = 50;
var WIDTH_COLUMN_SHIFT = COLUMN_WIDTH + GAP;
var OFFSET_Y_GAMERS_TIMES = 70;
var TEXT_FONTS = '14px PT Mono';
var COLOR_BLACK = 'rgb(0, 0, 0)';
var COLOR_WHITE = 'rgb(255, 255, 255)';
var MAIN_COLOR = 'rgba(255, 0, 0, 1)';
var COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';

var paintRandom = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

window.renderStatistics = function (ctx, names, times) {

  var maxTime = Math.max.apply(null, times);

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

    var divisionValue = MAX_COLUMN_HEIGHT / maxTime;
    times[i] = Math.round(times[i]);
    var columnHeight = divisionValue * times[i];

    var locationXGamersI = i * WIDTH_COLUMN_SHIFT + LOCATION_X;

    ctx.fillStyle = colorColumn;
    ctx.fillRect(locationXGamersI, WIDTH_COLUMN_SHIFT + (MAX_COLUMN_HEIGHT - columnHeight), COLUMN_WIDTH, columnHeight);

    var columnName = locationXGamersI;
    ctx.fillStyle = COLOR_BLACK;
    ctx.font = TEXT_FONTS;
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], columnName, LOCATION_Y_GAMERS_ROW);

    var gameTime = OFFSET_Y_GAMERS_TIMES + (LOCATION_X - columnHeight);
    ctx.fillStyle = COLOR_BLACK;
    ctx.font = TEXT_FONTS;
    ctx.fillText(times[i], columnName, gameTime);
  }
};
