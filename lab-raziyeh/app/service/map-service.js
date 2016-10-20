'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', function($log){
  $log.debug('init mapService');

  let service = {};
  service.mapData = {
    Room_A: {
      desc: 'You are in room Room_A. there are two paths leaving this room. the lights are dim',
      south: 'D',
      east: 'B',
    },
    Room_B: {
      desc: 'You are in room Room_B. you cant see anything', 
      west: 'A',
	  east:'C',
    },
    Room_C: {
      desc: 'You are in room Room_C. there is a path to the north. where you see some light', 
      west: 'B',
	  south:'E',
    },
    Room_D: {
      desc: 'You are in room Room_D, you here crazy sounds to the south',
      north: 'A',
      south: 'F',
    },
	 Room_E: {
      desc: 'You are in room Room_E, you here crazy sounds to the south',
      north: 'C',
      south: 'G',
    },
	 Room_F: {
      desc: 'You are in room Room_F, you here crazy sounds to the south',
      north: 'D',
      south: 'H',
    },
	 Room_G: {
      desc: 'You are in room Room_G, you here crazy sounds to the south',
      north: 'E',
      south: 'M',
    },
	 Room_H: {
      desc: 'You are in room Room_H, you here crazy sounds to the south',
      north: 'F',
      east: 'K',
    },
	 Room_K: {
      desc: 'You are in room Room_K, you here crazy sounds to the south',
      west: 'H',
      east: 'M',
    },
	 Room_M: {
      desc: 'You are in room Room_M, you here crazy sounds to the south',
      north: 'G',
      west:'K',
    },
    Room_null: {
      desc: 'you are stuck in quick sand',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'A',
    },
  };
  return service;
}]);