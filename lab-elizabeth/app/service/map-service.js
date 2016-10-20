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
    Entry: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Stairs: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Hallway: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Kitchen: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Attic: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Basement: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Bedroom1: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Bedroom2: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Bathroom: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Room1: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Room2: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
    Garage: {
      desc: '',
      north: '',
      south: '',
      east: '',
      west: '',
    },
  };
  //return service
  return service;
}
