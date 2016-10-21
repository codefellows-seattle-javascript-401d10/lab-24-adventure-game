'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('testing gamePad', function(){
  beforeEach(() => {
    angular.mock.module('textZ');
    angular.mock.inject($controller => {
      this.gamePadCtrl = new $controller('GamePadController');
    });
  });

  describe('testing initial properties', () => {
    it('directions should be an array', () => {

    });
  });
});
