// const assert = require('chai').assert;
const { expect } = require('chai');

const { findPetByName, addForAdoption, adoptPet } = require('../pet_adoption');

describe('findPetByName', () => {
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

  it('throws an error if the pet is not found', () => {

    // don't execute the function. A function definition needs to passed to result!

    const result = () => findPetByName('Bobo', pets);

    expect(result).to.throw(Error);
  });
});

describe('addForAdoption', () => {
  const pets = [];

  it('put a new pet for adoption', () => {
    const result = addForAdoption('Dora', 'Female', 'House Cat', '🐱', 6, pets);

    expect(result).to.have.length(1);
    expect(result).to.deep.include({
      name: 'Dora',
      gender: 'Female',
      breed: 'House Cat',
      type: '🐱',
      age: 6,
    });
  });
});

describe('adoptPet', () => {
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

  it('removes the pet from the adoption list', () => {
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
