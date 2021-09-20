const { expect } = require('chai');
const { assert } = require('console');

const {
  findPetByName,
  addPetForAdoption,
  adoptPet,
} = require('../pet_adoption');

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
  it('finds the corresponding pet', () => {
    const result = findPetByName('Coco', pets);

    expect(result).to.deep.equal({
      name: 'Coco',
      gender: 'Female',
      breed: 'Russell Terrier',
      type: '🐶',
      age: 5,
    });
  });

  it('returns false when it does not find the pet', () => {
    const result = findPetByName('Bob', pets);

    expect(result).to.be.false;
  });
});

describe('addPetForAdoption', () => {
  it('adds a new pet for adoption', () => {
    const newPet = {
      name: 'Rosie',
      gender: 'Female',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 2,
    };

    addPetForAdoption('Rosie', 'Female', 'Domestic Cat', '🐱', 2, pets);

    expect(pets).to.have.length(3);
    expect(pets).to.deep.include(newPet);
  });
});

describe('adoptPet', () => {
  it('removes the pet from the adoption list', () => {
    const result = adoptPet('Gus', pets);

    console.log({result});
    // console.log(pets);

    expect(result).to.be.true;
    expect(pets).to.have.length(2);
    expect(pets).to.not.deep.include({
      name: 'Gus',
      gender: 'Male',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 8,
    });
  });

  it('should return false if the pet is not there', () => {
    const result = adoptPet('Bob', pets);

    expect(result).to.be.false;

  });
});
