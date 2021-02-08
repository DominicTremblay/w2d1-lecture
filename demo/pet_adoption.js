const findPetByName = (name, petsArr) => {
  for (let petObj of petsArr) {
    if (petObj.name === name) {
      return petObj;
    }
  }

  throw new Error('Name cannot be found!');
};

const addForAdoption = (name, gender, breed, type, age, petsArr) => {
  const newPet = {
    name,
    gender,
    breed,
    type,
    age,
  };

  petsArr.push(newPet);

  return petsArr;
};

const adoptPet = (name, petsArr) => {
  const remainingPet = [];

  for (let petObj of petsArr) {
    if (petObj.name !== name) {
      remainingPet.push(petObj);
    }
  }

  return remainingPet;
};

module.exports = { findPetByName, addForAdoption, adoptPet };
