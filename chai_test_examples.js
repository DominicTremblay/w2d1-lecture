const { expect } = require('chai');

describe('arraysAndObjects', () => {
  // testing equality

  context('Testing equality', () => {
    it('test the equality of 2 arrays', () => {
      const first = [1, 2, 3, 4, 5];
      const second = [1, 2, 3, 4, 5];

      // expect(first).to.equal(second); //fails
      expect(first).to.deep.equal(second);
      expect(first).to.eql(second);
    });

    it('tests the equality of 2 objects', () => {
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

      expect(pikachu).to.deep.equal(pikachuTwin);
      expect(pikachu).to.not.deep.equal(charizard);
    });

    // unordered equality
    // eql compares the content and enforces the order

    it('tests the member of the arrays being out of order', () => {
      const first = [1, 2, 3, 4, 5];
      const second = [2, 3, 1, 5, 4];

      // expect(first).to.eql(second);
      expect(first).to.have.members(second);
    });

    it('tests array of objects', () => {
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

      expect(pikachus).to.eql([
        {
          name: 'Pikachu',
          type: 'Electric',
        },
        {
          name: 'Pikachu',
          type: 'Electric',
        },
      ]);

      expect(pokemons).to.have.deep.members([
        {
          name: 'Charizard',
          type: 'Flame',
        },
        {
          name: 'Pikachu',
          type: 'Electric',
        },
      ]);
    });

    it('tests for inclusion in arrays', () => {
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];

      expect(list).include('🐴🐑🐮');
    });

    it('tests for inclusion of an array of obects', () => {
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
        name: 'Pikachu',
        type: 'Electric',
      });
    });

    it('tests the equality of object properties', () => {
      const bulbasaur = {
        name: 'Bulbasaur',
        type: 'Seed',
      };

      expect(bulbasaur).to.have.property('name');
      expect(bulbasaur).to.not.have.property('power');
      expect(bulbasaur).to.have.keys('name', 'type');
    });
  });

  context('various', () => {
    it('tests empty array', () => {

      const emptyArr = [];
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];
      

      expect(emptyArr).to.be.a('array');
      expect(emptyArr).to.be.empty;
      expect(emptyArr[0]).to.be.undefined;
      expect(list).to.have.lengthOf(5);

    });

    // it('tests an error', () => {
    //   const fct = null;
    //   expect(fct().to.throw(/not a function/));
    // });
  });
});
