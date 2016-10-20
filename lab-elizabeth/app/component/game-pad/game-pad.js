'use strict';

const angular = require('angular');
const textZ = angular.module('textZ');

textZ.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

textZ.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService){
  $log.debug('init gamePadCtrl');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then(location => {
      $log.log(`player at new location: ${location}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
