

const validate = function (str) {

  if(!str) {
    throw new Error("No string provided!")
  }

  return str;
  
}

try {
  validate('');
} catch (err) {
  // console.log((err.name))
  console.dir(err);
  console.log(`Error: ${err.message}`)
}

console.log("Continuing execution here...")