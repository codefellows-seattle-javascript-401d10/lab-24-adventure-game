'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', function($log){
  $log.debug('init mapService');

  let service = {};
  service.mapData = {
    A: {
      desc: 'You are in room Room_A. there are two paths leaving this room. the lights are dim',
      south: 'D',
      east: 'B',
    },
    B: {
      desc: 'You are in room Room_B. you cant see anything', 
      west: 'A',
      east:'C',
    },
    C: {
      desc: 'You are in room Room_C. there is a path to the north. where you see some light', 
      west: 'B',
      south:'E',
    },
    D: {
      desc: 'You are in room Room_D, you here crazy sounds to the south',
      north: 'A',
      south: 'F',
    },
    E: {
      desc: 'You are in room Room_E, you here crazy sounds to the south',
      north: 'C',
      south: 'G',
    },
    F: {
      desc: 'You are in room Room_F, you here crazy sounds to the south',
      north: 'D',
      south: 'H',
    },
    G: {
      desc: 'You are in room Room_G, you here crazy sounds to the south',
      north: 'E',
      south: 'M',
    },
    H: {
      desc: 'You are in room Room_H, you here crazy sounds to the south',
      north: 'F',
      east: 'K',
    },
    K: {
      desc: 'You are in room Room_K, you here crazy sounds to the south',
      west: 'H',
      east: 'M',
    },
    M: {
      desc: 'You are in room Room_M, you here crazy sounds to the south',
      north: 'G',
      west:'K',
    },
    noroom: {
      desc: 'you are stuck in quick sand',
      south: 'X',
      north: 'X',
      east: 'X',
      west: 'A',
    },
  };
  return service;
}]);