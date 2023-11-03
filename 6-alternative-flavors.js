module.exports.items = ['item1', 'item2']

const person = {
  name: 'bob',
  age: 18,
}


const persons = [
  {
    name:'alice',
    age: 20,
  },
  {
    name:'lisa',
    age: 22,
  }
]

persons.push(person);

module.exports.singlePerson = person;

module.exports.multiplePersons = persons;
