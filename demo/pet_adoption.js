// find pet by name
const findPetByName = function (name, petsArr) {
  for (let petObj of petsArr) {
    if (petObj.name === name) {
      return petObj;
    }
  }

  return false;
};

// add a pet for adoption
const addPetForAdoption = function (name, gender, breed, type, age, petsArr) {
  const newPet = {
    name,
    gender,
    breed,
    type,
    age,
  };

  petsArr.push(newPet);
};

// adopte a pet -> remove it from the list
const adoptPet = function (name, petsArr) {
  let success = false;



  petsArr.forEach((petObj, index) => {
    if (petObj.name === name) {
      petsArr.splice(index, 1);
      console.log('Removing Pet');
      success = true;
    }
  });

  return success;
};

module.exports = {
  findPetByName,
  addPetForAdoption,
  adoptPet,
};
