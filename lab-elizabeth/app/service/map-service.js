'use strict';

const angular = require('angular');
const textZ = angular.module('textZ');

textZ.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('init mapService');
  //setup service
  let service = {};
  //add features to service
  service.mapData = {
    Outside: {
      desc: '',
      items: [],
      north: 'Entry',
      northDesc: '',
      south: 'Kitchen',
      southDesc: '',
      west: 'Garage',
      westDesc: '',
    },
    Entry: {
      desc: '',
      items: [],
      north: 'Stairs',
      northDesc: '',
      south: 'Outside',
      southDesc: '',
      east: 'Room2',
      eastDesc: '',
      west: 'Room1',
      westDesc: '',
    },
    Stairs: {
      desc: '',
      items: [],
      south: 'Entry',
      southDesc: '',
      west: 'Hallway',
      westDesc: '',
      down: 'Basement',
      downDesc: '',
    },
    Hallway: {
      desc: '',
      items: [],
      north: 'Bedroom1',
      northDesc: '',
      south: 'Bedroom2',
      southDesc: '',
      east: 'Stairs',
      eastDesc: '',
      west: 'Bathroom',
      westDesc: '',
      up: 'Attic',
      upDesc: '',
    },
    Kitchen: {
      desc: '',
      items: [],
      north: 'Outside',
      northDesc: '',
      east: 'Room2',
      eastDesc: '',
      west: 'Room1',
      westDesc: '',
    },
    Attic: {
      desc: '',
      items: [],
      down: 'Hallway',
      downDesc: '',
    },
    Basement: {
      desc: '',
      items: [],
      up: 'Stairs',
      upDesc: '',
    },
    Bedroom1: {
      desc: '',
      items: [],
      south: 'Hallway',
      southDesc: '',
    },
    Bedroom2: {
      desc: '',
      items: [],
      north: 'Hallway',
      northDesc: '',
    },
    Bathroom: {
      desc: '',
      items: [],
      east: 'Hallway',
      eastDesc: '',
    },
    Room1: {
      desc: '',
      items: [],
      north: 'Kitchen',
      northDesc: '',
      south: 'Entry',
      southDesc: '',
    },
    Room2: {
      desc: '',
      items: [],
      north: 'Kitchen',
      northDesc: '',
      south: 'Entry',
      southDesc: '',
    },
    Garage: {
      desc: '',
      items: [],
      south: 'Outside',
      southDesc: '',
      east: 'Outside',
      eastDesc: '',
    },
  };
  //return service
  return service;
}
