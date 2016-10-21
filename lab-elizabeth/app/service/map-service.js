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
      desc: 'It\'s raining, you can barely move through all the mud and you feel as though you\'re being watched. It might be better to get inside for now.',
      north: 'Garage',
      south: 'Kitchen',
      east: 'Entry',
    },
    Entry: {
      desc: 'You stand at the entrance to a practically demolished house.',
      north: 'Stairs',
      south: 'Outside',
      east: 'Room2',
      west: 'Room1',
    },
    Stairs: {
      desc: 'You look at the stairs and you can hear faint noises from both upstairs and below. Maybe it\'s all just in your head.',
      south: 'Entry',
      west: 'Hallway',
      down: 'Basement',
    },
    Hallway: {
      desc: 'You can see three doorways leading to other rooms. Despite it being mid-day, there isn\'t much light to see around you.',
      north: 'Bedroom1',
      south: 'Bedroom2',
      east: 'Stairs',
      west: 'Bathroom',
      up: 'Attic',
    },
    Kitchen: {
      desc: 'You look in the kitchen to find a mess of filthy cookware and rotten food, the smell of mould and mildew permiate your nostrils. It is very unlikely that there is anything useful in this mess.',
      north: 'Outside',
      east: 'Room2',
      west: 'Room1',
    },
    Attic: {
      desc: 'This attic is tiny and feels as though it is closing-in on you. You never thought you were claustrophobic, but stranger things have happened lately. You never thought you would see your deceased aunt Murel again, but she recently tried to have you for dinner.',
      down: 'Hallway',
    },
    Basement: {
      desc: 'The low light prevents you from seeing that there are no steps. You\'ve fallen in several feet of water and can no longer reach the door you came in.',
      north: 'Outside',
    },
    Bedroom1: {
      desc: 'This room is practically empty, except for a lone chair with a doll sitting on it in the corner... creepy.',
      south: 'Hallway',
    },
    Bedroom2: {
      desc: 'This bedroom is wrecked, but you suspect it wasn\'t in much better shape when someone lived here. You find a computer, it has some usable parts for your project back home.',
      north: 'Hallway',
    },
    Bathroom: {
      desc: 'You find some drinkable water! you have a firm "don\'t ask, don\'t tell" policy on food and drink, now.',
      east: 'Hallway',
    },
    Room1: {
      desc: 'This was once a living-room, there is a crumbling fireplace in the far wall and several wrecked chairs laying on the floor.',
      north: 'Kitchen',
      south: 'Entry',
      west: 'Garage',
    },
    Room2: {
      desc: 'You see an old desk and chair, both missing legs and ripped. There are books all over the floor and splatters of... something on the wall.',
      north: 'Kitchen',
      south: 'Entry',
    },
    Garage: {
      desc: 'It\'s empty, looks like someone got to all the good stuff before you.',
      south: 'Outside',
      east: 'Room1',
    },
  };
  //return service
  return service;
}
