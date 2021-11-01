// @petName: string - name of the pet
// @petsArr: array - array of the pets (objects)
// goal: the function should return the pet object in the array with the corresponding name

const findPetByName = function (petName, petsArr) {
  // PUT YOUR CODE HERE
  for (let petObj of petsArr) {
    if (petObj.name === petName) {
      return petObj;
    }
  }
};

const addNewPet = function (name, gender, breed, type, age, petsArr) {
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

module.exports = {findPetByName, addNewPet} ;
