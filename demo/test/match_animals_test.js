const assert = require('assert').strict;
const matchAnimals = require('../match_animals');

describe('matchAnimals', () => {
  it("['🐟🐠','🐙'] should appear [1,2] times", () => {
    const result = matchAnimals(
      ['🐟🐠', '🐳 🐋 🐬', '🐙', '🐙'],
      ['🐟🐠', '🐙']
    );

    // assertion
    assert.deepEqual(result, [1, 2]);
  });

  it("['🐭 🐹', '🐇🐢'] should appear [2, 3] times", () => {
    const result = matchAnimals(
      ['🐇🐢', '🐭 🐹', '🐇🐢', '🐇🐢', '🐭 🐹'],
      ['🐭 🐹', '🐇🐢']
    );

    assert.deepEqual(result, [2, 3]);
  });

  it("['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫'] should appear [2,1,0] times", () => {
    const result = matchAnimals(
      ['🐵🐼🐨', '🐵🐼🐨', '🐶🐱🐭', '🐴🐑🐮', '🐰🐺🐔'],
      ['🐵🐼🐨', '🐴🐑🐮', '🐘🐯🐫']
    );

    assert.deepEqual(result, [2, 1, 0]);
  });
});
