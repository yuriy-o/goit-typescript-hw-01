type PersonInformation = {
  firstName?: string;
  lastName?: string;
};

class Person {
  private personInfo: PersonInformation = {};

  set firstName(value: string) {
    console.log('firstName added');

    this.personInfo.firstName = value;
  }

  set lastName(value: string) {
    console.log('lastName added');

    this.personInfo.lastName = value;
  }

  get info() {
    const { personInfo } = this;

    return `${personInfo.firstName} ${personInfo.lastName}`;
  }
}

const person = new Person();

person.firstName = 'Yuriy';
person.lastName = 'Orekhov';

console.log(person.info);

export {};
