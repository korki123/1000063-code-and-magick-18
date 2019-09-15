'use strict'

window.renderStatistics = function(ctx, names, times) {

  var AREA_WIDTH = 420;
  var AREA_HEIGHT = 270;
  var AREA_X = 100;
  var AREA_Y = 10;
  var AREA_SHADOW_X = 110;
  var AREA_SHADOW_Y = 20;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(AREA_SHADOW_X, AREA_SHADOW_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(AREA_X, AREA_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '14px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 20);
  ctx.fillText('Список результатов:', 120, 35);





// +++++++++++++++++++++++ первая колонка +++++++++++++++++++++++

   // ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ' )';
   // ctx.fillRect(120, 55, COLUMN_WIDTH, 200);
   //
   // ctx.fillStyle = 'rgb(0, 0, 0)';
   // ctx.font = '14px PT Mono';
   // ctx.textBaseline = 'hanging';
   // ctx.fillText('Игрок1', 120, 262);

   // +++++++++++++++++++++++ колонка финиш +++++++++++++++++++++++



  var gamers = [];
  var gameTimes = [];
  var ctxTimes = [];

  gamers = names;
  gameTimes = times;

  console.log('имена' + gamers);
  console.log('время' + gameTimes);

  var maxTime  = 0;

  for (var i = 0; i < gameTimes.length; i++) {
    gameTimes[i] = Math.round(gameTimes[i]);

    if (maxTime < gameTimes[i]) {
      maxTime = gameTimes[i];
      var carrentIndex = i;

      console.log('максимальное время ' + maxTime);
      console.log('индекс' + carrentIndex);
      console.log('лучший игрок ' + gamers[carrentIndex]);
    }
    console.log('победитель ' + gamers[carrentIndex] + 'время ' + maxTime);


    for (var j = 0; j < gamers.length; i++) {

      var COLOR_COLUMN = gamers[j] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ' ');
      var GAP = 50;
      var COLUMN_WIDTH = 40;
      var COLUMN_HEIGHT = 270 / maxTime;

      // +++++++++++++++++++++++ первая колонка +++++++++++++++++++++++

         ctx.fillStyle = 'COLOR_COLUMN';
         ctx.fillRect(120 + j * (COLUMN_WIDTH + GAP), 55 + (270 - COLUMN_HEIGHT * gameTimes[j]), COLUMN_WIDTH, COLUMN_HEIGHT * gameTimes[j]);

         ctx.fillStyle = 'rgb(0, 0, 0)';
         ctx.font = '14px PT Mono';
         ctx.textBaseline = 'hanging';
         ctx.fillText('gamers[]', (120 + j * (COLUMN_WIDTH + GAP), 262));

         // +++++++++++++++++++++++ колонка финиш +++++++++++++++++++++++

      };


      // ctx.fillStyle = 'rgb(255, 255, 255)';
      // ctx.fillRect(120, 55, COLUMN_WIDTH, 200);
      //
      // ctx.fillStyle = 'rgb(0, 0, 0)';
      // ctx.font = '20px PT Mono';
      // ctx.textBaseline = 'hanging';
      // ctx.fillText(names[j], 120, 30);
    };
  };
