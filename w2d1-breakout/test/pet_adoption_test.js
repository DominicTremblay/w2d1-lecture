const { findPetByName, addNewPet } = require('../pet_adoption');
const { expect } = require('chai');

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

describe('FindByPetName()', () => {
  it('returns the pet object with the corresponding pet name from the list', () => {
    // AAA
    // Arrange
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

    const petFound = {
      name: 'Coco',
      gender: 'Female',
      breed: 'Russell Terrier',
      type: '🐶',
      age: 5,
    };

    // Act

    const result = findPetByName('Coco', pets);

    // Assert => Chai

    expect(result).to.be.deep.equal(petFound);
  });

  it("return false when it's not found", () => {
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

    const result = findPetByName('Channel', pets);

    expect(result).to.be.false;
  });

  describe('addNewPet()', () => {
    it('adds a new pet for adoption', () => {
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

      const newPet = {
        name: 'Rosie',
        gender: 'Female',
        breed: 'House Cat',
        type: '🐱',
        age: 10,
      };

      const result = addNewPet(
        newPet.name,
        newPet.gender,
        newPet.breed,
        newPet.type,
        newPet.age,
        pets
      );

      expect(result).to.deep.include(newPet);
      expect(result).to.have.length(3);

    });
  });
});
