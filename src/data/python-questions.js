// src/data/python-questions.js
export const pythonQuestions = [
    {
      question: `What's the output?
      
  x = [1, 2, 3]
  y = x
  y.append(4)
  print(x)`,
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, [4]]", "Error"],
      correct: 1
    },
    {
      question: `What's the result?
      
  def func(x=[]):
      x.append(1)
      return x
  
  print(func())
  print(func())`,
      options: [
        "[1] [1]",
        "[1] [1, 1]",
        "[] []",
        "Error"
      ],
      correct: 1
    },
    {
      question: `What gets printed?
      
  x = 1
  def test():
      print(x)
      x = 2
  test()`,
      options: [
        "1",
        "2",
        "None",
        "UnboundLocalError"
      ],
      correct: 3
    },
    {
      question: `What's the output?
      
  print(True + True + True)`,
      options: ["True", "3", "Error", "1"],
      correct: 1
    },
    {
      question: "What's the primary difference between a tuple and a list in Python?",
      options: [
        "Tuples are ordered, lists are not",
        "Tuples are immutable, lists are mutable",
        "Tuples can contain different data types, lists cannot",
        "Tuples are faster to process"
      ],
      correct: 1
    },
    {
      question: `What's displayed?
      
  a = [1, 2, 3, 4]
  print(a[-1::-1])`,
      options: [
        "[4, 3, 2, 1]",
        "[1, 2, 3, 4]",
        "Error",
        "[4, 3, 2]"
      ],
      correct: 0
    },
    {
      question: `What happens here?
      
  try:
      1/0
  except Exception as e:
      print("error")
  else:
      print("success")
  finally:
      print("done")`,
      options: [
        "error done",
        "success done",
        "error success done",
        "ZeroDivisionError"
      ],
      correct: 0
    },
    {
      question: "Which is NOT a valid way to create an empty set?",
      options: ["set()", "{}", "set([])", "set({})"],
      correct: 1
    },
    {
      question: `What's the output?
      
  print({True: 'yes', 1: 'no', 1.0: 'maybe'})`,
      options: [
        "{True: 'yes', 1: 'no', 1.0: 'maybe'}",
        "{True: 'maybe'}",
        "SyntaxError",
        "TypeError"
      ],
      correct: 1
    },
    {
      question: "What's the time complexity of list.sort() in Python?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
      correct: 1
    },
    {
      question: `What's returned?
      
  def generator():
      yield 1
      yield 2
      yield 3
  
  g = generator()
  next(g)
  next(g)
  print(next(g))`,
      options: ["1", "2", "3", "StopIteration"],
      correct: 2
    },
    {
      question: "Which of these is an invalid variable name in Python?",
      options: ["_variable", "variable123", "123variable", "VARIABLE"],
      correct: 2
    },
    {
      question: `What's the output?
      
  import copy
  a = [1, [2, 3]]
  b = copy.copy(a)
  b[1][0] = 4
  print(a)`,
      options: ["[1, [2, 3]]", "[1, [4, 3]]", "Error", "[4, [2, 3]]"],
      correct: 1
    },
    {
        question: `What's the output?
        
    class Dog:
        def __init__(self, name):
            self.name = name
            self.tricks = []
        
        def add_trick(self, trick):
            self.tricks.append(trick)
    
    d = Dog('Fido')
    d.add_trick('roll over')
    print(d.tricks)`,
        options: ["[]", "['roll over']", "Error", "None"],
        correct: 1
      },
      {
        question: `What gets printed?
        
    x = lambda a: a * 2
    print(x(4))`,
        options: ["lambda", "8", "4", "Error"],
        correct: 1
      },
      {
        question: `What's the output?
        
    print([i for i in range(10) if i % 2 == 0])`,
        options: [
          "[0, 2, 4, 6, 8]",
          "[1, 3, 5, 7, 9]",
          "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
          "Error"
        ],
        correct: 0
      },
      {
        question: `What will this print?
        
    def add(a, b=2, c=3):
        return a + b + c
    
    print(add(1, c=5))`,
        options: ["6", "8", "9", "Error"],
        correct: 1
      },
      {
        question: `What's the result?
        
    print(type(type(int)))`,
        options: ["<class 'int'>", "<class 'type'>", "<class 'object'>", "Error"],
        correct: 1
      }
    ];