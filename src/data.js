const animals = [
  { name: "cat", sound: "meow", feedingReq: {
    food: 2,
    water: 3
  } },
  { name: "dog", sound: "woof", feedingReq: {
    food: 3,
    water: 4
  } }
];

// For deconstructing arrays, you can directly give random keys in arrays
const [cat, dog] = animals;

// For deconstructing objects, you cannot directly give random keys in objects
// Since feedingReq section omitted, it is will not be deconstructed.
// const { name, sound } = cat;

// You can also assign a special key variable names for name and sound.
const { name: catName, sound: catSound } = cat;

// You can also assign a special key names for name and sound.
// This one means that assign "Fluffy" and sound "Purr" if it is not assigned.
// Since in these case, the values were already assigned as "cat" and "meow"
// They will not change.
// const { name: "Fluffy", sound: "Purr" } = cat;

// This one further desconstructs the feedingReq section and assigning new variables
// const { name, sound, feedingReq: {food, water} } = cat;

// You can also only deconstruct feedingReq section
// const { feedingReq: {food, water} } = cat;

// You can desconstruct like this
// rest corresponds with sound and feedingReq section.
// const { name, ...rest } = cat;

export default animals;
export { cat, dog, catName, catSound };