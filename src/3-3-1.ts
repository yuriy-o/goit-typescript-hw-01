/* 
Інтерфейси в TypeScript
Загальні поняття
*/

interface Person {
  firstName: string;
  secondName: string;
  age?: number;
}

function greet(person: Person) {
  if (person.age) {
    return console.log(
      `Hello ${person.firstName} ${person.secondName}. Today you are ${person.age} years old.`
    );
  }

  console.log(`Hello ${person.firstName} ${person.secondName}.`);
}

const john: Person = {
  firstName: 'John',
  secondName: 'Doe',
};
const max: Person = {
  firstName: 'Max',
  secondName: 'Raffy',
  age: 14,
};

greet(john);
greet(max);
