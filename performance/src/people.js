import faker from 'faker';

const name = faker.name;
let people = [];

for (let i=0; i < 2000; i++) {
  people.push({
    firstName: name.firstName(),
    lastName: name.lastName()
  });
}

export default people;