// src/data/javascript-questions.js
export const javascriptQuestions = [
    {
      code: `let name = 'Lydia';
  function sayHi() {
    console.log(name);
    let name = 'Sarah';
  }
  sayHi();`,
      options: ["Lydia", "Sarah", "undefined", "ReferenceError"],
      correct: 3
    },
    {
      code: `const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());`,
      options: ["20 and 62.83", "20 and NaN", "NaN and 62.83", "20 and undefined"],
      correct: 1
    },
    {
      code: `+true;
  !'Lydia';`,
      options: ["1 and false", "false and NaN", "false and false", "1 and true"],
      correct: 0
    },
    {
      code: `let c = { greeting: 'Hey!' };
  let d;
  d = c;
  c.greeting = 'Hello';
  console.log(d.greeting);`,
      options: ["Hello", "Hey!", "undefined", "ReferenceError"],
      correct: 0
    },
    {
      code: `console.log(typeof typeof 1);`,
      options: ["number", "string", "object", "undefined"],
      correct: 1
    },
    {
      code: `class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' });
  console.log(freddie.colorChange('orange'));`,
      options: ["orange", "purple", "green", "TypeError"],
      correct: 3
    },
    {
      code: `function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  
  console.log(lydia);
  console.log(sarah);`,
      options: [
        "Person object and undefined",
        "Person object and Person object",
        "Person object and {}",
        "Person object and ReferenceError"
      ],
      correct: 0
    },
    {
      code: `function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(1, '2'));`,
      options: ["NaN", "TypeError", "'12'", "3"],
      correct: 2
    },
    {
      code: `let number = 0;
  console.log(number++);
  console.log(++number);
  console.log(number);`,
      options: ["1 1 2", "1 2 2", "0 2 2", "0 1 2"],
      correct: 2
    },
    {
      code: `const one = false || {} || null;
  const two = null || false || '';
  const three = [] || 0 || true;
  
  console.log(one, two, three);`,
      options: [
        "false null []", 
        "null '' true", 
        "{} '' []", 
        "null null true"
      ],
      correct: 2
    },
    {
      code: `function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log('Hmm.. You dont have an age I guess');
    }
  }
  
  checkAge({ age: 18 });`,
      options: [
        "You are an adult!",
        "You are still an adult.",
        "Hmm.. You dont have an age I guess",
        "TypeError"
      ],
      correct: 2
    },
    {
      code: `const myPromise = Promise.resolve(5);
  console.log(myPromise);`,
      options: [
        "5",
        "Promise {<pending>: 5}",
        "Promise {<fulfilled>: 5}",
        "Error"
      ],
      correct: 2
    },
    {
      code: `let config = {
    alert: setInterval(() => {
      console.log('Alert!');
    }, 1000)
  };
  
  config = null;`,
      options: [
        "The interval will stop",
        "The interval will run once",
        "The interval will continue running",
        "Nothing happens"
      ],
      correct: 2
    },
    {
      code: `const myMap = new Map();
  const myFunc = () => 'greeting';
  myMap.set(myFunc, 'Hello world!');
  
  // How to access 'Hello world!'?`,
      options: [
        "myMap.get('greeting')",
        "myMap.get(myFunc)",
        "myMap.get(() => 'greeting')",
        "myMap.get(myFunc())"
      ],
      correct: 1
    },
    {
      code: `async function getData() {
    return await Promise.resolve('I made it!');
  }
  
  const data = getData();
  console.log(data);`,
      options: [
        "'I made it!'",
        "Promise {<pending>}",
        "Promise {<resolved>: 'I made it!'}",
        "undefined"
      ],
      correct: 1
    }
  ];