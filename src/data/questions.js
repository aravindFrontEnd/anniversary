// src/data/questions.js
// src/data/questions.js
export const QUESTIONS = [
    {
      question: `What will be the output of this code?
      
  > console.log(typeof typeof 1);`,
      options: ["number", "string", "object", "undefined"],
      correct: 1
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Integration",
        "Automated Program Interface",
        "Application Process Integration"
      ],
      correct: 0
    },
    {
      question: `What will be the output of this code?
      
  > console.log('🥑' + '💻');`,
      options: ["🥑💻", "Error", "undefined", "NaN"],
      correct: 0
    },
    {
      question: `What will be the output of this code?
      
  > console.log(3 + 4 + '5');`,
      options: ["345", "75", "12", "NaN"],
      correct: 1
    },
    {
      question: "Which company created React.js?",
      options: ["Google", "Meta (Facebook)", "Amazon", "Microsoft"],
      correct: 1
    },
    {
      question: `What will this code return?
      
  > function counter() {
  >   let count = 0;
  >   return function() {
  >     return count++;
  >   }
  > }
  > const increment = counter();
  > increment();
  > increment();
  > console.log(increment());`,
      options: ["0", "1", "2", "3"],
      correct: 2
    },
    {
      question: `What will be the output?
      
  > console.log([...'Lydia']);`,
      options: [
        '["L", "y", "d", "i", "a"]',
        '["Lydia"]',
        '[[], "Lydia"]',
        'TypeError'
      ],
      correct: 0
    },
    {
      question: `What will this code print?
      
  > let x = (y = 10);
  > console.log(typeof x, typeof y);`,
      options: [
        "undefined, number", 
        "number, number", 
        "number, undefined", 
        "undefined, undefined"
      ],
      correct: 1
    },
    {
      question: `What's the output?
      
  > console.log(Boolean(0));
  > console.log(Boolean(""));
  > console.log(Boolean([]));`,
      options: [
        "false, false, false",
        "false, false, true",
        "false, true, false",
        "true, true, true"
      ],
      correct: 1
    },
    {
      question: `What's the result?
      
  > const arr = [1, 2, 3];
  > arr[10] = 11;
  > console.log(arr.length);`,
      options: ["3", "10", "11", "4"],
      correct: 2
    },
    {
      question: `What will be logged?
      
  > const obj = { a: 'one', b: 'two', a: 'three' };
  > console.log(obj);`,
      options: [
        "{ a: 'one', b: 'two' }",
        "{ a: 'three', b: 'two' }",
        "SyntaxError",
        "{ a: 'one', b: 'two', a: 'three' }"
      ],
      correct: 1
    },
    {
      question: `What's the output?
      
  > const promise = new Promise(res => res(2));
  > promise.then(v => {
  >     console.log(v);
  >     return v * 2;
  > })
  > .then(v => console.log(v));`,
      options: [
        "2, 4",
        "4, 4",
        "2, 2",
        "undefined, undefined"
      ],
      correct: 0
    },
    {
      question: `What will this return?
      
  > const arr = [1, 2, 3].map(num => {
  >   if (typeof num === 'number') return;
  >   return num * 2;
  > });
  > console.log(arr);`,
      options: [
        "[]",
        "[null, null, null]",
        "[undefined, undefined, undefined]",
        "[2, 4, 6]"
      ],
      correct: 2
    },
    {
      question: `What's the result?
      
  > async function getData() {
  >   return await Promise.resolve('I made it!');
  > }
  > const data = getData();
  > console.log(data);`,
      options: [
        '"I made it!"',
        'Promise {<resolved>: "I made it!"}',
        'Promise {<pending>}',
        'undefined'
      ],
      correct: 2
    },
    {
      question: `What will be logged?
      
  > const set = new Set([1, 1, 2, 3, 4]);
  > console.log(set);`,
      options: [
        "[1, 1, 2, 3, 4]",
        "[1, 2, 3, 4]",
        "{1, 1, 2, 3, 4}",
        "{1, 2, 3, 4}"
      ],
      correct: 3
    }
  ];
  

  export const PRIZE_LEVELS = [
    1000, 2000, 3000, 5000, 10000, 
    20000, 40000, 80000, 160000, 320000,
    640000, 1250000, 2500000, 5000000, 10000000
  ];
  
  export const SOUND_EFFECTS = {
    background: '../sounds/background.mp3',
    correct: '../sounds/correct.mp3',
    wrong: '../sounds/wrong.mp3',
    winning: '../sounds/winning.mp3',
    timer: '../sounds/timer.mp3',
    final: '../sounds/final.mp3'
  };