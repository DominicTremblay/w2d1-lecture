const findPetByName = (name, petsArr) => {
  for (let petObj of petsArr) {
    if (petObj.petName === name) {
      return name;
    }
  }

  return false;
};

module.exports = {findPetByName};