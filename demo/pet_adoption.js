const findPetByName = (petName, petsArr) => {
  for (let pet of petsArr) {
    if (pet.name === petName) {
      return pet;
    }
  }
  return false;
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

const adoptPet = (petName, petsArr) => {
  //filter

  const remainingPets = [];

  for (let petObj of petsArr) {
    if (petObj.name !== petName) {
      remainingPets.push(petObj);
    }
  }

  return remainingPets;
};

module.exports = { findPetByName, addForAdoption, adoptPet };
