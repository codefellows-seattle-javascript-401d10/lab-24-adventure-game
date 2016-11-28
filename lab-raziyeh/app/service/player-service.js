'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService){
  $log.debug('init playerService');

  let service = {},
    turn = 0,
    player = service.player = {
      name: 'Player 1',
      location: 'Room0',
      hp: 0,
    };

  let history = service.history = [ 
    {
      turn,
      desc: 'welcome to the Room Game',
      location: 'Room0',
      hp: player.hp,
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location,
        newLocation = mapService.mapData[currentLocation][direction];
      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'You hit a wall',
          location: player.location,
          hp: (player.hp)--,
        });
        console.log('history', history);
        return reject('No room in that direction');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}]);