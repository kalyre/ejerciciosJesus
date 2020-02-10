const Car = require('./car');


//
// TODO 1
// Declarar en ES6 la clase Persona
// ok

console.log('=== 1 ===');

class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
  };

  haveABirthday(){ 
    this.age++;
  }
}

  const p = new Person('Posti', 34);

  p.haveABirthday();
  p.greet();


//
// TODO 2
// Crear un modulo que contenga una clase coche con dos atributos: make y km.
// El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
// También dispondría de dos métoodos: move(km) que incrementa los km según
// la cantidad y getInfo(), que devuelve un string con el make y el número de km
// ok

console.log('=== 2 ===');

const car = new Car('Ford');
car.move(47);

console.log(car.getInfo());

//
// TODO 3
// Use funciones flecha en vez de las que se indican
// ok

console.log('=== 3 ===');

var array = [1, 2, 3];

array = array.map(x =>x * 2);

console.log(array);

//
// TODO 4
// Declare las variables convenientemente
// ok

console.log('=== 4 ===');

const PI = 3.14;

const getCircleArea = r => {
  return PI * r * r;
}

for(let i = 1; i <= 3; i++) {
  console.log('r = ' + i  + ', area = ' + getCircleArea(i));
}

//
// TODO 5
// Simplifique este objeto usando sintaxis ES6
// ok

console.log('=== 5 ===');

var prop2 = 'value2';

var object1 = {
  prop1: 'value1',
  prop2: prop2,
  function1: (param = 1) => { console.log(param);}
};

console.log(object1.prop1);
console.log(object1.prop2);
object1.function1();

//
// TODO 6
// Simplifique estas asignaciones a variables usando sintaxis ES6
// ok

console.log('=== 6 ===');

var object2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};

var {a,b,c,d,e,f} = object2;

console.log(a, b, c, d, e, f);

//
// TODO 7
// Simplifique las siguientes asignaciones usando el spread operator
// ok

console.log('=== 7 ===');

var a1 = [4, 5, 6, 7, 8, 9, 10];
var a2 = [0, 1, 2, 3];

a2 = [...a2, ...a1 ];

console.log(a2); 

//
// TODO 8
// Convierta los siguientes bucles usando for of y for in
// ok

console.log('=== 8 ===');

var a3 = [0, 1, 2, 3, 4, 5];

for(number of a3) {
  console.log(number);
}

var object3 = {
  a: 1,
  b: 2,
  c: 3
};

for(obj in object3) {
  console.log(`${obj}:${object3[obj]}`);
}
