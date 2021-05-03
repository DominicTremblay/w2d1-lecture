const { expect } = require('chai');
const { findPetByName, addForAdoption, adoptPet } = require('../pet_adoption');

const pets = [
  {
    name: 'Gus',
    gender: 'Male',
    breed: 'Domestic Cat',
    type: '🐱',
    age: 8,
  },
  {
    name: 'Coco',
    gender: 'Female',
    breed: 'Russell Terrier',
    type: '🐶',
    age: 5,
  },
];

describe('findPetByName', () => {
  it('Finds the pet by name', () => {
    const result = findPetByName('Coco', pets);

    // its going to equal to the object in the array
    expect(result).to.deep.equal({
      name: 'Coco',
      gender: 'Female',
      breed: 'Russell Terrier',
      type: '🐶',
      age: 5,
    });
  });

  // it should return false if it does not find it
  it('returns false if it does not find it', () => {
    const result = findPetByName('Bob', pets);

    expect(result).to.be.false;
  });
});

describe('addForAdoption', () => {
  it('adds a new pet for adoption', () => {
    const pets = [];

    const newPet = {
      name: 'Rosie',
      gender: 'Female',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 2,
    };

    const result = addForAdoption(
      'Rosie',
      'Female',
      'Domestic Cat',
      '🐱',
      2,
      pets
    );

    // length of the array
    expect(result).to.have.length(1);

    // deepEqual
    expect(result).to.deep.equal([
      {
        name: 'Rosie',
        gender: 'Female',
        breed: 'Domestic Cat',
        type: '🐱',
        age: 2,
      },
    ]);
    // inclusion?
    expect(result).to.deep.include({
      name: 'Rosie',
      gender: 'Female',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 2,
    });
  });
});
describe('adoptPet', () => {
  it('removes the pet from the list', () => {
    const result = adoptPet('Gus', pets);

    expect(result).to.have.length(1);
    expect(result).to.not.deep.include({
      name: 'Gus',
      gender: 'Male',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 8,
    });
  });
});
