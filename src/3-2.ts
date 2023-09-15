class A {
  protected someProperty = 'str ';
}

class B extends A {
  showProperty() {
    console.log(this.someProperty);
  }
}

const a = new A();
const b = new B();

// a.someProperty; // error
// b.someProperty; // error
b.showProperty();

export {};
