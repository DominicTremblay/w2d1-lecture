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

  return false;
};


// @petName: string - name of the pet
// @gender: String - the gender of the pet
// ...
// @petsArr: array - array of the pets (objects)
// goal: the function should return the petsArr including the new created pet object
const addNewPet = function (petName, gender, breed, type, age, petsArr) {
  const newPetObj = {
    name: petName,
    gender,
    breed,
    type,
    age,
  };

  petsArr.push(newPetObj);

  return petsArr;
};

module.exports = { findPetByName, addNewPet };
