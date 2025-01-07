// src/data/java-questions.js
export const javaQuestions = [
    {
      question: `What's the output of this code?
      
  String str = null;
  System.out.println(str.length());`,
      options: ["0", "null", "NullPointerException", "undefined"],
      correct: 2
    },
    {
      question: `What's the result of this code?
      
  public class Test {
      public static void main(String[] args) {
          String s1 = "hello";
          String s2 = "hello";
          String s3 = new String("hello");
          
          System.out.println(s1 == s2);
          System.out.println(s1 == s3);
      }
  }`,
      options: [
        "true true",
        "false false",
        "true false",
        "false true"
      ],
      correct: 2
    },
    {
      question: `What's wrong with this code?
      
  public class MyClass {
      public static void main(String[] args) {
          ArrayList<int> list = new ArrayList<int>();
          list.add(10);
      }
  }`,
      options: [
        "Nothing, it's correct",
        "ArrayList can't be used with primitive types",
        "add() method is not defined",
        "main method is incorrect"
      ],
      correct: 1
    },
    {
      question: `What's the output?
      
  class Parent {
      void display() {
          System.out.println("Parent");
      }
  }
  
  class Child extends Parent {
      void display() {
          System.out.println("Child");
      }
  }
  
  Parent obj = new Child();
  obj.display();`,
      options: ["Parent", "Child", "Compilation Error", "Runtime Error"],
      correct: 1
    },
    {
      question: "Which of these is not a valid identifier in Java?",
      options: ["_variable", "$variable", "123variable", "variable123"],
      correct: 2
    },
    {
      question: `What's the difference between String and StringBuilder in Java?`,
      options: [
        "String is mutable, StringBuilder is immutable",
        "String is immutable, StringBuilder is mutable",
        "Both are mutable",
        "Both are immutable"
      ],
      correct: 1
    },
    {
      question: "Which collection type should be used for storing unique elements in sorted order?",
      options: ["ArrayList", "HashSet", "TreeSet", "LinkedList"],
      correct: 2
    },
    {
      question: `What's the output?
      
  int x = 5;
  System.out.println(x++ + ++x);`,
      options: ["11", "12", "13", "10"],
      correct: 1
    },
    {
      question: "What is the default value of Object reference?",
      options: ["0", "undefined", "null", "None"],
      correct: 2
    },
    {
      question: "Which of these is not a valid access modifier in Java?",
      options: ["public", "private", "protected", "friendly"],
      correct: 3
    },
    {
      question: `What happens here?
      
  try {
      throw new Exception("Hello");
  } finally {
      System.out.println("World");
  }`,
      options: [
        "Prints 'Hello'",
        "Prints 'World' then throws exception",
        "Prints nothing",
        "Compilation error"
      ],
      correct: 1
    },
    {
      question: "Which interface should be implemented for defining custom thread execution?",
      options: ["Runnable", "Callable", "Both A and B", "Neither"],
      correct: 2
    },
    {
      question: `What's the output?
      
  String str = "Hello";
  str.concat(" World");
  System.out.println(str);`,
      options: ["Hello World", "Hello", "World", "Compilation Error"],
      correct: 1
    },
    {
      question: "What is the size of int in Java?",
      options: ["16 bits", "32 bits", "64 bits", "Depends on JVM"],
      correct: 1
    },
    {
      question: "Which collection doesn't allow null elements?",
      options: ["ArrayList", "LinkedList", "Hashtable", "HashSet"],
      correct: 2
    }
  ];