class House {
  // private street: string;
  private tenants: string[] = [];

  constructor(private street: string) {
    this.street = street;
  }

  public showAddress(this: House) {
    console.log('Address: ' + this.street);
  }

  public addTenants(tenant: string) {
    this.tenants.push(tenant);
  }
  public showTenants() {
    console.log(this.tenants);
    console.log('Tenants: ' + this.tenants);
  }
}

const house = new House('Kyivska str.');
house.showAddress();

house.addTenants('Yuriy');
house.addTenants('Olga');

house.showTenants();

// house.tenants.push('Nastya'); //! буде помилка, т.як властивість tenants приватна

// const houseCopy = { street: 'Demmiy 23', showAddress: house.showAddress };
// houseCopy.showAddress();
