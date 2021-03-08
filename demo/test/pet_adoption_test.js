const { expect } = require('chai');
const { findPetByName, addForAdoption, adoptPet } = require('../pet_adoption');

// const petAdoption = require('../pet_adoption');

// - FindPetByName
//   - deep.equal
//   - to.be.false

// - addNewPet
//   - to.have.length
//   - to.have.keys
//   - to.deep.equal

// - adoptPet
//   - to.have.length
//   - to.not.deep.equal

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
  it('finds the pet by its name', () => {
    const result = findPetByName('Coco', pets);

    expect(result).to.deep.equal({
      name: 'Coco',
      gender: 'Female',
      breed: 'Russell Terrier',
      type: '🐶',
      age: 5,
    });
  });

  it('return false if the pet is not found', () => {
    const result = findPetByName('Bobie', pets);

    expect(result).to.be.false;
  });
});

describe('addForAdoption', () => {
  const pets = [];

  it('adds a new pet for adoption', () => {
    const result = addForAdoption('Bobo', 'Male', 'House Cat', '🐱', 3, pets);

    expect(result).to.have.length(1);
    expect(result).to.deep.equal([
      {
        name: 'Bobo',
        gender: 'Male',
        breed: 'House Cat',
        type: '🐱',
        age: 3,
      },
    ]);
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
