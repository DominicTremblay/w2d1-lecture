const findPetByName = (petName, petsArr) => {
  // use the Array.find or

  // loop throuhg the petArrs
  for (let petObj of petsArr) {
    // if the name of the pet === petName return that pet
    if (petObj.name === petName) {
      return petObj;
    }
  }

  // return false if not found
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
