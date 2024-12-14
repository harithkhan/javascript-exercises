const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

const findTheOldest = function(obj) {
    const currentYear = new Date().getFullYear();
    const objWithAge = obj
        .map(item => ({
            name: item.name,
            age: (!item.yearOfDeath ? currentYear : item.yearOfDeath) - item.yearOfBirth
        }))
        .reduce((oldest, comparitor) => {
            return oldest.age > comparitor.age ? oldest : comparitor;
        });
    return objWithAge;
};      

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
