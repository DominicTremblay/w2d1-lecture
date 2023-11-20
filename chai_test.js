const { expect } = require('chai');

describe('chaiExamples', function () {
  context('testing strings', function () {
    it('test a string', function () {
      const pokemon = 'Pikachu';
    });
  });

  context('testing arrays', function () {
    it('should be equal arrays', function () {
      const group1 = ['🐵', '🐼', '🐨'];
      const group2 = ['🐵', '🐼', '🐨'];
    });

    it('has the same members of the array out of order', function () {
      const group1 = ['🐵', '🐼', '🐨'];
      const group2 = ['🐵', '🐨', '🐼'];
    });

    it('should include the element of the array', function () {
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];

      const member = '🐶🐱🐭';
    });
  });

  context('testing objects', function () {
    it('should have equal objects', function () {
      const pikachu = {
        name: 'Pikachu',
        type: 'Electric',
      };

      const pikachuTwin = {
        name: 'Pikachu',
        type: 'Electric',
      };

      const charizard = {
        name: 'Charizard',
        type: 'Flame',
      };
    });

    it('tests the equality of object properties', () => {
      const bulbasaur = {
        name: 'Bulbasaur',
        type: 'Seed',
      };
    });
  });

  context('testing array of objects', function () {
    it('test the equality or membership of an array of objects', function () {
      const pikachu = {
        name: 'Pikachu',
        type: 'Electric',
      };

      const pikachuTwin = {
        name: 'Pikachu',
        type: 'Electric',
      };

      const charizard = {
        name: 'Charizard',
        type: 'Flame',
      };

      const pikachus = [pikachu, pikachuTwin];
      const pokemons = [pikachu, charizard];
    });

    it('test that the object is included in the array', function () {
      const pikachu = {
        name: 'Pikachu',
        type: 'Electric',
      };

      const pikachuTwin = {
        name: 'Pikachu',
        type: 'Electric',
      };

      const charizard = {
        name: 'Charizard',
        type: 'Flame',
      };

      const pokemons = [pikachu, charizard];
    });
  });

  context('various', () => {
    it('tests empty array', () => {
      const emptyArr = [];
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];
    });
  });


  context('testing errors', function() {

    it('should throw an error', function() {



    });

  });

});
