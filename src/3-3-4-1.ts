/*
Інтерфейси як тип функції
*/

interface AddFunc {
  (n1: number, n2: number): number;
}

let add: AddFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

export {};
