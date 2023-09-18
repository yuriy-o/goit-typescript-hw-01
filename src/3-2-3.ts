class House3 {
  constructor(
    // private readonly type: string,

    public readonly tenants: string[]
  ) {}

  // changeType(type: string) {
  //   this.type = type; // буде помилка: Неможливо змінити властивість "type", оскільки вона "readonly".
  // }

  addTenants(tenant: string) {
    this.tenants.push(tenant); // Не виникне жодних помилок, навіть якщо 'tenants' є 'readonly'.
  }

  showTenants() {
    console.log(this.tenants);
  }
}

const house3 = new House3([]);
house3.addTenants('Tampere str.');
house3.addTenants('Mira str.');
house3.addTenants('Shlihtera str.');

house3.showTenants();

export {};
