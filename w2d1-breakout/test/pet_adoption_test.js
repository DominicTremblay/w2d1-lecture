const { expect } = require('chai');
const { findPetByName, addNewPet } = require('../pet_adoption');

// const addNewPet = require('../pet_adoption').addNewPet;
// const findPetByName = require('../pet_adoption').findPetByName

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

// Create a describe block for the FindByPetName function
// Create 'it' blocks for testing that the function returns the expected result
// Ex.: findPetByName('Coco', pets) should return the following object:
// {
//   name: 'Coco',
//   gender: 'Female',
//   breed: 'Russell Terrier',
//   type: '🐶',
//   age: 5,
// }
// use node assert to create your assertion. Look up the doc here as needed: (https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html
// Think about testing potential edge cases. What is we provide empty string as the pet name, what if we provide an empty array as the petsArr

describe('findPetByName()', () => {
  it('Should return the pet object that matches the pet name `Coco`', () => {
    const result = findPetByName('Coco', pets);

    expect(result).to.deep.equal({
      name: 'Coco',
      gender: 'Female',
      breed: 'Russell Terrier',
      type: '🐶',
      age: 5,
    });
  });
});

describe('addNewPet()', () => {
  it('should add a new pet for adoption', () => {
    const result = addNewPet('Rosie', 'Female', 'Domestic Cat', '🐱', 2, pets);

    expect(result).to.have.length(3);
    expect(result).to.deep.include({
      name: 'Rosie',
      gender: 'Female',
      breed: 'Domestic Cat',
      type: '🐱',
      age: 2,
    });
  });
});
