const findTheOldest = function(people) {
    people.map((person) => {
        const currentYear = new Date().getFullYear();
        if ("yearOfDeath" in person) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = currentYear - person.yearOfBirth;
        }
    })

    return people.sort((a, b) => {
        if (a.age > b.age) {
            return 1;
        } else {
            return -1;
        }
    }).pop();
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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
  ]

// Do not edit below this line
module.exports = findTheOldest;
