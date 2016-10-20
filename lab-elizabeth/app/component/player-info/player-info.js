'use strict';

// require('./_player-info.scss');

const angular = require('angular');
const textZ = angular.module('textZ');

textZ.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl',
});

textZ.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService){
  this.player = playerService.player;
}
