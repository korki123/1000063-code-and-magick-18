'use strict'

window.renderStatistics = function(ctx, names, times) {

  var AREA_WIDTH = 420;
  var AREA_HEIGHT = 270;
  var AREA_X = 100;
  var AREA_Y = 10;
  var AREA_SHADOW_X = 110;
  var AREA_SHADOW_Y = 20;
  var GAP = 50;
  var COLON_WIDTH = 40;
  var MAX_RESULT_HEIGHT = 270;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(AREA_SHADOW_X, AREA_SHADOW_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(AREA_X, AREA_Y, AREA_WIDTH, AREA_HEIGHT);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '14px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 20);
  ctx.fillText('Список результатов:', 120, 35);

   ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
   ctx.fillRect(120, 60, 40, 200);

   ctx.fillStyle = 'rgb(0, 0, 0)';
   ctx.font = '14px PT Mono';
   ctx.textBaseline = 'hanging';
   ctx.fillText('Игрок1', 120, 270);



  // var names = [];
  // var times = [];
  //
  // var maxTime  = 0;
  // // var carrentIndex = 0;
  //
  // for (var i = 0; i < times.length; i++) {
  //   if (maxTime < times[i]) {
  //     maxTime = times[i];
  //     var carrentIndex = i;
  //     console.log(maxTime);
  //     console.log(carrentIndex);
  //   }
  //   {
  //     maxTime = maxTime;
  //   };
  //
  //   for (var j = 0; j < array.length; i++) {
  //     names[j];
  //     times[j];
  //
  //     ctx.fillStyle = 'rgb(255, 255, 255)';
  //     ctx.fillRect(AREA_X, AREA_Y, AREA_WIDTH, AREA_HEIGHT);
  //
  //     ctx.fillStyle = 'rgb(0, 0, 0)';
  //     ctx.font = '20px PT Mono';
  //     ctx.textBaseline = 'hanging';
  //     ctx.fillText(names[j], 120, 30);
  //   };
  // };
};
