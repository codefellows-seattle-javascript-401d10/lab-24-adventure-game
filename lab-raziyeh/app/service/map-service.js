'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', function($log){
  $log.debug('init mapService');

  let service = {};
  service.mapData = {
    Room0: {
      desc: 'You are in room Room_1. there are two paths leaving this room. down and right',
      down: 'D',
      right: 'B',
    },
    Room1: {
      desc: 'You are in room Room_2. there are two paths leaving this room. left and right', 
      left: 'A',
      right:'C',
    },
    Room2: {
      desc: 'You are in room Room_3. there are two paths leaving this room. left and down', 
      left: 'B',
      down:'E',
    },
    Room3: {
      desc: 'You are in room Room_4, there are two paths leaving this room. up and down',
      up: 'A',
      down: 'F',
    },
    Room4: {
      desc: 'You are in room Room_5, there are two paths leaving this room. up and down',
      up: 'C',
      down: 'G',
    },
    Room5: {
      desc: 'You are in room Room_6, there are two paths leaving this room. up and down',
      up: 'D',
      down: 'H',
    },
    Room6: {
      desc: 'You are in room Room_7, there are two paths leaving this room. up and down',
      up: 'E',
      down: 'M',
    },
    Room7: {
      desc: 'You are in room Room_8, there are two paths leaving this room. up and right',
      up: 'F',
      right: 'K',
    },
    Room8: {
      desc: 'You are in room Room_9, there are two paths leaving this room. left and right',
      left: 'H',
      right: 'M',
    },
    Room9: {
      desc: 'You are in room Room_10, there are two paths leaving this room. up and left',
      up: 'G',
      left:'K',
    },
  };
  return service;
}]);