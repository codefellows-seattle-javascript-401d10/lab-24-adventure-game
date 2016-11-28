'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', { 
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', function($log, playerService){
  $log.debug('init gamePadCtrl');

  this.directions = ['up', 'down', 'left', 'right'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.log(`player at new location: ${location}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}]);