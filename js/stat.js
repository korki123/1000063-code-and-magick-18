'use strict';

window.renderStatistics = function (ctx, names, times) {

  var AREA_WIDTH = 420;
  var AREA_HEIGHT = 270;
  var AREA_X = 100;
  var AREA_Y = 10;
  var AREA_SHADOW_X = 110;
  var AREA_SHADOW_Y = 20;
  var COLUMN_WIDTH = 40;
  var GAP = 50;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(AREA_SHADOW_X, AREA_SHADOW_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(AREA_X, AREA_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '14px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 20);
  ctx.fillText('Список результатов:', 150, 35);

  var maxTime = 0;

  for (var i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);

    // console.log('время ' + times + ', ');

    if (maxTime < times[i]) {
      maxTime = times[i];
    }

    var colorColumn = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';

    var columnHeight = 150 / maxTime;

    ctx.fillStyle = colorColumn;
    ctx.fillRect(150 + i * (COLUMN_WIDTH + GAP), 90 + (150 - columnHeight * times[i]), COLUMN_WIDTH, columnHeight * times[i]);

    var columnNames = 150 + i * (COLUMN_WIDTH + GAP);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '14px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], columnNames, 255);

    var gameTimes = 70 + (150 - columnHeight * times[i]);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '14px PT Mono';
    ctx.fillText(times[i], columnNames, gameTimes);
  }
  // console.log('время ' + times);
  // console.log('победитель ' + names[carrentIndex] + ' время ' + maxTime);

  // +++++++++++++++++++++++ до сюда пока работает +++++++++++++++++++++++


  // +++++++++++++++++++++++ столбцы +++++++++++++++++++++++
  // for (var i = 0; i < times.length; i++) {
  //
  //   var colorColumn = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
  //
  //   var columnHeight = 270 / maxTime;
  //   console.log('высота колонки ' + columnHeight);
  //
  //   ctx.fillStyle = colorColumn;
  //   ctx.fillRect(130 + i * (COLUMN_WIDTH + GAP), 55 + (270 - columnHeight * times[i]), COLUMN_WIDTH, columnHeight * times[i]);
  //
  //   ctx.fillStyle = 'rgb(0, 0, 0)';
  //   ctx.font = '14px PT Mono';
  //   // ctx.textBaseline = 'hanging';
  //   console.log('игрок такой names[i]')
  //   ctx.fillText('names[i]', (120 + i * (COLUMN_WIDTH + GAP), 262));
  // };
  // +++++++++++++++++++++++ столбцы финиш +++++++++++++++++++++++
};

// +++++++++++++++++++++++ первая колонка +++++++++++++++++++++++

// ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ' )';
// ctx.fillRect(120, 55, COLUMN_WIDTH, 200);
//
// ctx.fillStyle = 'rgb(0, 0, 0)';
// ctx.font = '14px PT Mono';
// ctx.textBaseline = 'hanging';
// ctx.fillText('Игрок1', 120, 262);

// +++++++++++++++++++++++ колонка финиш +++++++++++++++++++++++


// ctx.fillStyle = 'rgb(255, 255, 255)';
// ctx.fillRect(120, 55, COLUMN_WIDTH, 200);
//
// ctx.fillStyle = 'rgb(0, 0, 0)';
// ctx.font = '20px PT Mono';
// ctx.textBaseline = 'hanging';
// ctx.fillText(names[i], 120, 30);
