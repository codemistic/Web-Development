const removeArrayDuplicates = (array = undefined) => {
  if (array === undefined) return console.warn("You may set values");
  if (!(array instanceof Array))
    return console.warn("The value is not an array");
  if (array.length === 0) return console.warn("The array is empty");
  if (array.length === 1)
    return console.warn("The array migth have 2 or more positions");

  let uniqueArray = [...new Set(array)];

  return console.info({
    array,
    uniqueArray,
  });
};

removeArrayDuplicates(["x", 10, "x", 2, "10", 10, true, true]);
