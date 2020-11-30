const { expect } = require('chai');

describe('chaiExamples', () => {
  context('testing a string', () => {
    it('tests a string', () => {
      const str = 'hello gang!';

      expect(str).to.be.a('string');
      expect(str.length).to.equal(11);
      // expect(str).to.be.true; // fails
      expect(str).to.not.be.undefined;
    });
  });

  context('testing arrays', () => {
    it('tests an array for inclusion', () => {
      const list = ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'];
      const item = '🐵🐼🐨';

      expect(list).to.include(item);
    });

    it('tests the equality of an array', () => {
      const list1 = ['🐵🐼🐨', '🐵🐼🐨']
      const list2 = ['🐵🐼🐨', '🐵🐼🐨']

      expect(list1).to.eql(list2);

    });

    
    it('tests the equality of an array out of order', () => {
      const list1 = ['🐵🐼🐨',  '🐶🐱🐭']
      const list2 = [  '🐶🐱🐭', '🐵🐼🐨']

      expect(list1).to.have.members(list2);

    });


  });

  context('testing with objects', () => {


    const pikachu = {
      name: 'Pikachu',
      type: 'Electric'
    }

    const pikachuTwin = {
      name: 'Pikachu',
      type: 'Electric'
    }

    expect(pikachu).to.eql(pikachuTwin);

  })
});
