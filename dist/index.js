"use strict";
// basic types
let id = 5;
let company = 'Esteem Designs';
let isPublished = true;
let x = 'hello';
let age;
age = 30;
// array
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let names = ['John', 'Brad', 'Mary', 'Alice'];
names.push('Chris');
let arr1 = [1, true, 'Hello'];
let arr2 = [10, true, 'Hello'];
// tUple
let person = [1, 'John', true];
// tUpple array
let employee;
employee = [
  [1, 'John'],
  [2, 'Brad'],
  [3, 'Jill'],
];
// union
let pid = 33;
pid = '33';
// enum
var Direction1;
(function (Direction1) {
  Direction1[Direction1["Up"] = 1] = "Up";
  Direction1[Direction1["Down"] = 2] = "Down";
  Direction1[Direction1["Left"] = 3] = "Left";
  Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
Direction1.Up;
var Direction2;
(function (Direction2) {
  Direction2["Up"] = "Up";
  Direction2["Down"] = "Down";
  Direction2["Left"] = "Left";
  Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
Direction2.Left;
const user = {
  id: 1,
  name: 'John',
};
// type assertion
let cid = 1;
let customerId = cid;
customerId = cid;
// functions
function addNum(x, y) {
  return x + y;
}
addNum(1, 2);
// void
function log(messsage) {
  console.log(messsage);
}
const p1 = 1;
const user1 = {
  id: 1,
  name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person1 {
  constructor(id, name) {
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
  constructor(id, name, position) {
    super(id, name);
    this.position = position;
  }
}
const emp1 = new Employee1(3, 'Emmanuel Adebayo', 'Software Developer');
emp1.id;
emp1.name;
emp1.position;
console.log(emp1.register());
class Person2 {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const john = new Person2(1, 'John Doe');
console.log(john.id);
console.log(john.name);
console.log(john.register());
class Employee2 extends Person2 {
  constructor(userId, userName, position) {
    super(userId, userName);
    this.userId = userId;
    this.userName = userName;
    this.position = position;
    this.position = position;
  }
}
const emp2 = new Employee2(2, 'Mary Doe', 'Frontend Developer');
console.log(emp2.userId);
console.log(emp2.userName);
console.log(emp2.position);
console.log(emp2.register());
// generics
function getArray1(items) {
  return new Array().concat(items);
}
const numArray = getArray1([1, 2, 3, 4, 5]);
console.log(numArray);
const strArray = getArray1(['John', 'Mary', 'Alice', 'Brad', 'Chris']);
console.log(strArray);
function getArray2(items) {
  return new Array().concat(items);
}
const nArr = getArray2([1, 2, 3]);
console.log(nArr);
