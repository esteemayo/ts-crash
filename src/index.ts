// basic types
let id: number = 5;
let company: string = 'Esteem Designs';
let isPublished: boolean = true;
let x: any = 'hello';
let age;
age = 30;

// array
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(6);

let names: Array<string> = ['John', 'Brad', 'Mary', 'Alice'];
names.push('Chris');

let arr1: any[] = [1, true, 'Hello'];

let arr2: (string | number | boolean)[] = [10, true, 'Hello'];

// tUple
let person: [number, string, boolean] = [1, 'John', true];

// tUpple array
let employee: [number, string][];

employee = [
  [1, 'John'],
  [2, 'Brad'],
  [3, 'Jill'],
];

// union
let pid: string | number = 33;
pid = '33';

// enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

Direction1.Up;

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

Direction2.Left;

// object

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// type assertion
let cid: any = 1;
let customerId = <number>cid;
customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}

addNum(1, 2);

// void
function log(messsage: string | number): void {
  console.log(messsage);
}

// type
type Point = number | string;
const p1: Point = 1;

// interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person1(1, 'Brad Traversy');
const mike = new Person1(2, 'Mike Jordan');
brad.id;
brad.name;
console.log(brad.register());

class Employee1 extends Person1 {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee1(3, 'Emmanuel Adebayo', 'Software Developer');
emp1.id;
emp1.name;
emp1.position;
console.log(emp1.register());

class Person2 implements PersonInterface {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
    return `${this.name} is now registered`;
  }
}

const john = new Person2(1, 'John Doe');
console.log(john.id);
console.log(john.name);
console.log(john.register());

class Employee2 extends Person2 {
  constructor(
    public userId: number,
    public userName: string,
    public position: string
  ) {
    super(userId, userName);
    this.position = position;
  }
}

const emp2 = new Employee2(2, 'Mary Doe', 'Frontend Developer');
console.log(emp2.userId);
console.log(emp2.userName);
console.log(emp2.position);
console.log(emp2.register());

// generics
function getArray1<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numArray = getArray1<number>([1, 2, 3, 4, 5]);
console.log(numArray);

const strArray = getArray1<string>(['John', 'Mary', 'Alice', 'Brad', 'Chris']);
console.log(strArray);

function getArray2<T extends number>(items: Array<T>): Array<T> {
  return new Array().concat(items);
}

const nArr = getArray2([1, 2, 3]);
console.log(nArr);
