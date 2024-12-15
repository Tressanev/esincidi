let implicit = {};  // Initialize an empty object
let filter = {
  field: 'name'
};

// Assign the string 'string' to the property 'name' on the implicit object
implicit[filter.field] = 'string';

console.log(implicit);  // Output: { name: 'string' }
