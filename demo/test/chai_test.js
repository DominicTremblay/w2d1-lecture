const { expect } = require('chai');

describe('chaiExamples', function () {
  context('testing strings', function () {
    it('test a string', function () {
      const pokemon = 'Pikachu';

      expect(pokemon).to.be.a('string');
      expect(pokemon).to.be.equal('Pikachu');
      expect(pokemon).to.have.lengthOf(7);
    });
  });

  context('testing arrays', function () {
    it('should be equal arrays', function () {
      const group1 = ['🐵', '🐼', '🐨'];
      const group2 = ['🐵', '🐼', '🐨'];

      expect(group1).to.deep.equal(group2);
    });

    it('has the same members of the array out of order', function () {
      const group1 = ['🐵', '🐼', '🐨'];
      const group2 = ['🐵', '🐨', '🐼'];

      expect(group1).to.have.members(group2);
    });

    it('should include the element of the array', function () {
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];

      const member = '🐶🐱🐭';

      expect(list).to.include(member);
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

      expect({
        name: 'Pikachu',
        type: 'Electric',
      }).to.deep.equal({
        name: 'Pikachu',
        type: 'Electric',
      });

      expect({
        name: 'Pikachu',
        type: 'Electric',
      }).to.not.deep.equal({
        name: 'Charizard',
        type: 'Flame',
      });
    });

    it('tests the equality of object properties', () => {
      const bulbasaur = {
        name: 'Bulbasaur',
        type: 'Seed',
      };

      expect(bulbasaur).to.have.property('name');
      expect(bulbasaur).to.have.property('type');
      expect(bulbasaur).to.have.keys('name', 'type');
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

      expect(pokemons).to.deep.include({
        name: 'Charizard',
        type: 'Flame',
      });
    });
  });

  context('various', () => {
    it('tests empty array', () => {
      const emptyArr = [];
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];
      expect(emptyArr).to.be.empty;
      expect(emptyArr[0]).to.be.undefined;
      expect(list[0]).to.exist;
      expect(list).to.have.lengthOf(5);
    });
  });

  context('testing errors', function () {
    it('should throw an error', function () {
      const badFn = function () {
        throw new TypeError('Illegal salmon!');
      };

      expect(badFn).to.throw(TypeError);
    });
  });
});
